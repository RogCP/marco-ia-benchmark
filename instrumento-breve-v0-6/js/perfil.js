// Perfil formativo: insignia, áreas para crecer, consejos, mapa de competencias y revisión.
IB.perfil = (() => {
  const $ = IB.$, esc = IB.esc;
  const NIVELES = ["En inicio", "N1", "N2", "N3"];
  const COLORES = ["var(--n0)", "var(--n1)", "var(--n2)", "var(--n3)"];
  const tecnica = c => IB.datos.banco.perfil_tecnico.includes(c);

  const nivelTxt = (c, n) => NIVELES[n] + (n === 3 && tecnica(c) ? " · según perfil" : "");
  const pastilla = (c, n) => `<span class="pill" style="background:${COLORES[n]}">${nivelTxt(c, n)}</span>`;

  function insignia(banco, S, seed) {
    const t = IB.datos.textos, k = IB.calif.insignia(banco, S), ins = t.insignias[k];
    const ruta = t.insignias.map((x, i) => `<li class="${i < k ? "hecho" : i === k ? "actual" : ""}">${esc(x.nombre)}</li>`).join("");
    const areas = IB.calif.areasFoco(banco, S, seed);
    const foco = areas.length
      ? `<p class="foco">${esc(t.foco_frase)}</p><ul class="foco">${areas.map(a => `<li><b>${esc(t.foco_areas[a][0])}.</b> ${esc(t.foco_areas[a][1])}</li>`).join("")}</ul>`
      : `<p class="foco">${esc(t.foco_completo)}</p>`;
    $("insignia").innerHTML = `<ol class="ruta">${ruta}</ol><p class="insignia-kicker">Tu insignia</p>`
      + `<p class="insignia-nombre">${esc(ins.nombre)}</p><p class="msg">${esc(ins.mensaje)}</p>${foco}`;
  }

  function consejos(banco, S, seed) {
    const lista = IB.calif.consejos(banco, S, seed);
    $("consejos").innerHTML = lista.length
      ? lista.map(({ c, n }) => `<div class="consejo"><p class="c-titulo">${esc(banco.comps[c].nombre)}</p>`
        + `<p class="c-meta">Para llegar a ${n === 2 && tecnica(c) ? "N3 · según perfil" : NIVELES[n + 1]}</p>`
        + `<p class="c-texto">${esc(IB.datos.textos.consejos[c][n])}</p></div>`).join("")
      : `<p class="note">Llegaste al N3 en todas las competencias. Te invitamos a compartir lo que sabes y acompañar a otras personas en su camino con la IA.</p>`;
  }

  // Avisos cuando el patrón de marcas dice poco de la persona (casi todo o casi nada marcado).
  function avisos(banco, marks) {
    const marcadas = banco.preguntas.reduce((a, p) => a + (marks[p.id] || []).length, 0);
    const prop = marcadas / (banco.preguntas.length * 5);
    const cola = "Con ese patrón tu perfil dice poco de ti; si quieres, vuelve a intentarlo con calma.";
    const f = [];
    if (prop > 0.9) f.push("Marcaste casi todas las opciones. " + cola);
    if (prop < 0.1) f.push("Marcaste muy pocas opciones. " + cola);
    $("flags").innerHTML = f.map(x => `<p class="flag">${x}</p>`).join("");
  }

  function mapa(banco, S) {
    const encabezado = `<tr><th>Competencia</th><th>Nivel</th><th>Nota</th></tr>`;
    const fila = c => {
      const n = S[c].nivel;
      const extra = tecnica(c) && n < 3 ? "El N3 de esta competencia corresponde a perfiles técnicos." : "";
      const nota = [S[c].nota, extra].filter(Boolean).join(" ");
      return `<tr><td>${esc(banco.comps[c].nombre)}</td><td class="pillcell">${pastilla(c, n)}</td><td class="lbl notecell">${esc(nota)}</td></tr>`;
    };
    const comps = Object.keys(banco.comps);
    $("compTable").innerHTML = encabezado + comps.filter(c => banco.comps[c].tipo === "oficial").map(fila).join("");
    $("candTable").innerHTML = encabezado + comps.filter(c => banco.comps[c].tipo === "candidata").map(fila).join("");
  }

  function mostrar() {
    const banco = IB.datos.banco, est = IB.instrumento.estado;
    const S = IB.calif.todas(banco, est.marks);
    insignia(banco, S, est.seed);
    avisos(banco, est.marks);
    consejos(banco, S, est.seed);
    mapa(banco, S);

    // La revisión pregunta por pregunta es el mismo formulario, ya bloqueado, dentro de un plegable.
    IB.instrumento.revelar(S);
    $("revisionCuerpo").appendChild($("quiz"));
    document.querySelector(".sticky").hidden = true;
    $("enviarAcciones").hidden = true;
    $("results").hidden = false;
  }

  return { mostrar, nivelTxt };
})();
