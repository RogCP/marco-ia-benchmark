// Calificación: funciones puras, que no tocan la página. Las usan el perfil y el envío.
//
// Regla por pregunta (cinco opciones: una de N1, dos de N2, dos de N3):
//   - puntaje: opciones resueltas bien (marcar la que conviene, no marcar el error frecuente), de 0 a 5;
//   - nivel: el más alto resuelto completo, menos uno por cada opción equivocada en niveles inferiores
//     (mínimo 0, «en inicio»).
IB.calif = (() => {
  // marcas: índices de las afirmaciones marcadas, en el orden del banco.
  function pregunta(p, marcas) {
    const ok = p.afirmaciones.map((a, i) => marcas.includes(i) === a.ok);
    const completo = { 1: true, 2: true, 3: true };
    p.afirmaciones.forEach((a, i) => { if (!ok[i]) completo[a.lv] = false; });
    let alto = 0;
    for (const k of [1, 2, 3]) if (completo[k]) alto = k;
    const errores = p.afirmaciones.filter((a, i) => a.lv < alto && !ok[i]).map(a => a.lv);
    return {
      ok,
      puntaje: ok.filter(Boolean).length,
      nivel: Math.max(0, alto - errores.length),
      nota: nota(alto, errores),
    };
  }

  // Explica por qué el nivel quedó abajo del más alto acertado. Textos en datos/textos.js («notas»).
  function nota(alto, errores) {
    const t = IB.datos.textos.notas;
    const llenar = (plantilla, nivel) => plantilla.replace("{alto}", "N" + alto).replace("{nivel}", "N" + nivel);
    if (errores.length === 0) return "";
    if (errores.length === 1) return llenar(t.un_error, errores[0]);
    if (errores.length === 2) {
      return errores[0] === errores[1] ? llenar(t.dos_errores_mismo_nivel, errores[0]) : llenar(t.dos_errores_niveles_distintos);
    }
    return llenar(t.sin_base);
  }

  // Resultado de cada competencia: { "C1-1": {ok, puntaje, nivel, nota}, … }
  function todas(banco, marcas) {
    const S = {};
    for (const p of banco.preguntas) S[p.comp] = pregunta(p, marcas[p.id] || []);
    return S;
  }

  const oficiales = banco => Object.keys(banco.comps).filter(c => banco.comps[c].tipo === "oficial");

  // Insignia: mediana de los niveles de las competencias oficiales (0 Explorador … 3 Guía).
  function insignia(banco, S) {
    const niveles = oficiales(banco).map(c => S[c].nivel).sort((a, b) => a - b);
    return niveles[Math.floor(niveles.length / 2)];
  }

  // Las dos áreas del marco (C1…E3) con el promedio de nivel más bajo, contando las 17 competencias.
  // Las que ya están en N3 no cuentan; los empates se rompen al azar con la semilla de la persona.
  function areasFoco(banco, S, seed) {
    const prom = {};
    for (const c of Object.keys(banco.comps)) {
      const a = c.split("-")[0];
      (prom[a] = prom[a] || []).push(S[c].nivel);
    }
    const r = IB.rnd(seed + 11);
    return Object.keys(prom)
      .map(a => ({ a, m: prom[a].reduce((x, y) => x + y, 0) / prom[a].length, k: r() }))
      .filter(x => x.m < 3)
      .sort((x, y) => x.m - y.m || x.k - y.k)
      .slice(0, 2)
      .map(x => x.a);
  }

  // Tres competencias para los consejos: las de nivel más bajo (sin contar las que están en N3),
  // empates al azar con la semilla. Devuelve [{c, n}], donde n es el nivel actual.
  function consejos(banco, S, seed) {
    const r = IB.rnd(seed + 7);
    return Object.keys(banco.comps)
      .filter(c => S[c].nivel < 3)
      .map(c => ({ c, n: S[c].nivel, k: r() }))
      .sort((a, b) => a.n - b.n || a.k - b.k)
      .slice(0, 3)
      .map(x => ({ c: x.c, n: x.n }));
  }

  // Marcas de una pregunta como cinco dígitos en el orden del banco: «10110» (1 = marcada).
  function cadenaMarcas(banco, marcas) {
    const out = {};
    for (const p of banco.preguntas) {
      const m = marcas[p.id] || [];
      out[p.id] = [0, 1, 2, 3, 4].map(i => (m.includes(i) ? "1" : "0")).join("");
    }
    return out;
  }

  return { pregunta, todas, oficiales, insignia, areasFoco, consejos, cadenaMarcas };
})();
