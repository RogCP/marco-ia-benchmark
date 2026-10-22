// Pantalla de inicio: consentimiento, aviso de privacidad y datos de la persona.
// Llena los textos y desplegables desde datos/, valida y habilita «Comenzar».
IB.registro = (() => {
  const $ = IB.$, esc = IB.esc;
  const CAMPOS = ["edad", "universidad", "entidad", "area", "semestre", "correo"];
  const correoOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  // Orden alfabético en español, sin distinguir acentos ni mayúsculas. Solo cambia el orden en pantalla:
  // lo que se guarda es la clave.
  const alfabetico = (a, b) => a.localeCompare(b, "es", { sensitivity: "base" });

  const reg = {
    acepta: false, contacto: "", edad: "", universidad: "", subunidad: "", universidad_otra: "",
    entidad: "", area: "", semestre: "", correo: "", inicio: null,
  };
  const guardar = () => IB.almacen.guardar("-registro", reg);

  // --- Textos y desplegables ---------------------------------------------------------------------

  function bloques(lista) {
    return lista.map(([tipo, texto]) => (tipo === "h" ? `<h4>${esc(texto)}</h4>` : `<p>${esc(texto)}</p>`)).join("");
  }

  function opciones(ayuda, lista) {
    return `<option value="">${esc(ayuda)}</option>` + lista.map(([c, n]) => `<option value="${esc(c)}">${esc(n)}</option>`).join("");
  }

  function llenarPantalla() {
    const t = IB.datos.textos, cat = IB.datos.catalogos, u = IB.datos.universidades;
    $("txtConsentimiento").innerHTML = bloques(t.consentimiento);
    const enlace = t.aviso_enlace;
    $("txtAviso").innerHTML = bloques(t.aviso)
      + (enlace ? `<p><a href="${esc(enlace.url)}" target="_blank" rel="noopener">${esc(enlace.texto)}</a></p>` : "");
    const unis = u.lista.map(x => [x.clave, x.nombre]).sort((a, b) => alfabetico(a[1], b[1]));
    $("universidad").innerHTML = opciones("Elige tu universidad", unis.concat([u.otra]));
    $("entidad").innerHTML = opciones("Elige la entidad de tu campus", cat.entidades);
    $("area").innerHTML = opciones("Elige el área de tu carrera", cat.areas);
    $("semestre").innerHTML = opciones("Elige tu semestre", cat.semestres);
  }

  // --- Universidad y segundo nivel (campus, facultad…) ------------------------------------------

  const OTRA = () => IB.datos.universidades.otra[0];
  const universidadActual = () => IB.datos.universidades.lista.find(x => x.clave === reg.universidad);

  // Segundo nivel en orden alfabético: los grupos (Facultades, Escuelas…) conservan su orden y se ordena
  // dentro de cada uno; la opción «OTRA» (por ejemplo, «Otra dependencia de la UNAM») va siempre al final.
  function ordenarSub(sub) {
    const grupos = [];
    for (const x of sub) if (x[0] !== "OTRA" && !grupos.includes(x[2])) grupos.push(x[2]);
    return grupos
      .flatMap(g => sub.filter(x => x[2] === g && x[0] !== "OTRA").sort((a, b) => alfabetico(a[1], b[1])))
      .concat(sub.filter(x => x[0] === "OTRA"));
  }

  // Muestra el segundo desplegable o el campo «¿Cuál?» según la universidad elegida, y limpia lo que
  // ya no aplica (por ejemplo, el campus de otra universidad).
  function armarSegundoNivel() {
    const u = universidadActual();
    if (!u && reg.universidad !== OTRA()) reg.universidad = "";
    const tieneSub = !!(u && u.sub.length);
    $("subCampo").hidden = !tieneSub;
    $("otraCampo").hidden = reg.universidad !== OTRA();
    if (tieneSub) {
      $("subLbl").textContent = u.sub_etiqueta;
      let h = `<option value="">${esc(u.sub_ayuda)}</option>`, grupo = "";
      for (const [c, n, g] of ordenarSub(u.sub)) {
        if (g !== grupo) {
          if (grupo) h += "</optgroup>";
          if (g) h += `<optgroup label="${esc(g)}">`;
          grupo = g;
        }
        h += `<option value="${esc(c)}">${esc(n)}</option>`;
      }
      if (grupo) h += "</optgroup>";
      $("subunidad").innerHTML = h;
      if (!u.sub.some(x => x[0] === reg.subunidad)) reg.subunidad = "";
      $("subunidad").value = reg.subunidad;
    } else {
      reg.subunidad = "";
    }
    if (reg.universidad !== OTRA()) reg.universidad_otra = "";
    $("universidadOtra").value = reg.universidad_otra;
  }

  function faltaUniversidad() {
    if (!reg.universidad) return "tu universidad";
    if (reg.universidad === OTRA()) return reg.universidad_otra.trim() ? "" : "el nombre de tu universidad";
    const u = universidadActual();
    return u && u.sub.length && !reg.subunidad ? "tu " + u.sub_etiqueta.toLowerCase() : "";
  }

  // --- Dominio del correo -------------------------------------------------------------------------
  // Si la universidad (o su campus/facultad) tiene dominios registrados en datos/universidades.js,
  // se avisa, sin bloquear, cuando el correo no termina en ninguno. Cuenta cualquier subdominio:
  // «comunidad.unam.mx» coincide con «unam.mx».

  function dominiosEsperados() {
    const u = universidadActual();
    if (!u) return [];
    const porSub = (u.dominios_sub || {})[reg.subunidad];
    return porSub || u.dominios || [];
  }

  // "si" / "no" / "" (sin dominios registrados o correo incompleto). Se envía con la respuesta.
  function dominioCoincide() {
    const esperados = dominiosEsperados();
    if (!esperados.length || !correoOk(reg.correo)) return "";
    const dom = reg.correo.trim().toLowerCase().split("@")[1];
    return esperados.some(d => dom === d || dom.endsWith("." + d)) ? "si" : "no";
  }

  function avisoDominio() {
    const no = dominioCoincide() === "no";
    $("correoAviso").hidden = !no;
    $("correoAviso").textContent = no ? `Este correo no parece de ${universidadActual().nombre}. Revisa que sea tu correo institucional.` : "";
  }

  // --- Validación ---------------------------------------------------------------------------------

  function faltantes() {
    const f = [];
    if (!reg.acepta) f.push("aceptar el consentimiento");
    if (!reg.contacto) f.push("responder si aceptas que te contactemos");
    if (reg.edad === "" || +reg.edad < 15 || +reg.edad > 99) f.push("tu edad");
    const fu = faltaUniversidad();
    if (fu) f.push(fu);
    if (!reg.entidad) f.push("la entidad donde estudias");
    if (!reg.area) f.push("tu área de estudio");
    if (!reg.semestre) f.push("tu semestre");
    if (!correoOk(reg.correo)) f.push("tu correo institucional");
    return f;
  }

  function actualizar() {
    const f = faltantes();
    $("comenzarBtn").disabled = f.length > 0;
    $("comenzarHint").textContent = f.length ? "Falta: " + f.join(", ") + "." : "Listo, ya puedes comenzar.";
  }

  function cambio(clave, valor) {
    reg[clave] = valor;
    if (clave === "universidad") armarSegundoNivel();
    if (["universidad", "subunidad"].includes(clave)) avisoDominio();
    if (clave === "correo" && dominioCoincide() !== "no") $("correoAviso").hidden = true;
    guardar();
    actualizar();
  }

  function mostrarInstrumento(desplazar) {
    $("inicio").hidden = true;
    $("instrumento").hidden = false;
    if (desplazar) window.scrollTo(0, 0);
  }

  // Una vez registrada la respuesta, se borran del navegador los datos personales: en una computadora
  // compartida, quien llegue después no los ve. Se conservan «acepta» e «inicio» para seguir mostrando el perfil.
  function borrarDatosPersonales() {
    for (const k of ["contacto", "edad", "universidad", "subunidad", "universidad_otra", "entidad", "area", "semestre", "correo"]) reg[k] = "";
    guardar();
  }

  // --- Arranque -----------------------------------------------------------------------------------

  function iniciar() {
    Object.assign(reg, IB.almacen.leer("-registro") || {});
    llenarPantalla();

    $("aceptoTxt").checked = reg.acepta;
    if (reg.contacto) $(reg.contacto === "si" ? "contSi" : "contNo").checked = true;
    for (const k of CAMPOS) $(k).value = reg[k];
    armarSegundoNivel();
    avisoDominio();

    $("aceptoTxt").addEventListener("change", e => cambio("acepta", e.target.checked));
    document.querySelectorAll('input[name="contacto"]').forEach(x => x.addEventListener("change", e => cambio("contacto", e.target.value)));
    for (const k of CAMPOS) {
      $(k).addEventListener("input", e => cambio(k, e.target.value));
      if ($(k).tagName === "SELECT") $(k).addEventListener("change", e => cambio(k, e.target.value));
    }
    $("subunidad").addEventListener("change", e => cambio("subunidad", e.target.value));
    $("universidadOtra").addEventListener("input", e => cambio("universidad_otra", e.target.value));
    $("correo").addEventListener("blur", () => { $("correoError").hidden = reg.correo === "" || correoOk(reg.correo); avisoDominio(); });
    $("comenzarBtn").addEventListener("click", () => {
      if (faltantes().length) return;
      reg.inicio = reg.inicio || new Date().toISOString();
      guardar();
      mostrarInstrumento(true);
    });

    guardar();
    actualizar();
    if (reg.inicio) mostrarInstrumento(false);
  }

  return { iniciar, reg, dominioCoincide, borrarDatosPersonales };
})();
