// Pantalla de inicio: consentimiento, aviso de privacidad y datos de la persona.
// Llena los textos y desplegables desde datos/, valida y habilita «Comenzar».
IB.registro = (() => {
  const $ = IB.$, esc = IB.esc;
  const CAMPOS = ["edad", "universidad", "entidad", "area", "semestre", "correo"];
  const correoOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const reg = {
    acepta: false, publica: "", contacto: "", edad: "", universidad: "", subunidad: "", universidad_otra: "",
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
    $("universidad").innerHTML = opciones("Elige tu universidad", u.lista.map(x => [x.clave, x.nombre]).concat([u.otra]));
    $("entidad").innerHTML = opciones("Elige la entidad de tu campus", cat.entidades);
    $("area").innerHTML = opciones("Elige el área de tu carrera", cat.areas);
    $("semestre").innerHTML = opciones("Elige tu semestre", cat.semestres);
  }

  // --- Universidad y segundo nivel (campus, facultad…) ------------------------------------------

  const OTRA = () => IB.datos.universidades.otra[0];
  const universidadActual = () => IB.datos.universidades.lista.find(x => x.clave === reg.universidad);

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
      for (const [c, n, g] of u.sub) {
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

  // --- Validación ---------------------------------------------------------------------------------

  function faltantes() {
    const f = [];
    if (!reg.acepta) f.push("aceptar el consentimiento");
    if (!reg.publica) f.push("responder si autorizas la publicación");
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
    guardar();
    actualizar();
  }

  function mostrarInstrumento(desplazar) {
    $("inicio").hidden = true;
    $("instrumento").hidden = false;
    if (desplazar) window.scrollTo(0, 0);
  }

  // --- Arranque -----------------------------------------------------------------------------------

  function iniciar() {
    Object.assign(reg, IB.almacen.leer("-registro") || {});
    llenarPantalla();

    $("aceptoTxt").checked = reg.acepta;
    if (reg.publica) $(reg.publica === "si" ? "pubSi" : "pubNo").checked = true;
    if (reg.contacto) $(reg.contacto === "si" ? "contSi" : "contNo").checked = true;
    for (const k of CAMPOS) $(k).value = reg[k];
    armarSegundoNivel();

    $("aceptoTxt").addEventListener("change", e => cambio("acepta", e.target.checked));
    document.querySelectorAll('input[name="publica"]').forEach(x => x.addEventListener("change", e => cambio("publica", e.target.value)));
    document.querySelectorAll('input[name="contacto"]').forEach(x => x.addEventListener("change", e => cambio("contacto", e.target.value)));
    for (const k of CAMPOS) {
      $(k).addEventListener("input", e => cambio(k, e.target.value));
      if ($(k).tagName === "SELECT") $(k).addEventListener("change", e => cambio(k, e.target.value));
    }
    $("subunidad").addEventListener("change", e => cambio("subunidad", e.target.value));
    $("universidadOtra").addEventListener("input", e => cambio("universidad_otra", e.target.value));
    $("correo").addEventListener("blur", () => { $("correoError").hidden = reg.correo === "" || correoOk(reg.correo); });
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

  return { iniciar, reg };
})();
