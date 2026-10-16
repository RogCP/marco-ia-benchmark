// Casos y preguntas: muestra el instrumento, guarda las marcas y, al final, marca cada opción
// como acertada o no para la revisión.
IB.instrumento = (() => {
  const $ = IB.$, esc = IB.esc;
  const banco = () => IB.datos.banco;
  const NQ = () => banco().preguntas.length;

  // marks: { P01: [índices marcados] }, seed: orden de opciones y desempates, submitted: ya vio su perfil.
  const estado = { marks: {}, seed: Math.floor(Math.random() * 1e9) + 1, submitted: false };
  const guardar = () => IB.almacen.guardar("", estado);
  const form = () => $("quiz");

  const etiquetaClave = (p, a) => (a.ok ? (p.comprension ? "Es correcta" : "Conviene hacerlo") : "Error frecuente");

  function construir() {
    const b = banco(), r = IB.rnd(estado.seed);
    let html = "", n = 0;
    b.casos.forEach((caso, ci) => {
      html += `<section class="case" aria-labelledby="t-${caso.id}"><p class="case-label">Caso ${ci + 1} de ${b.casos.length}</p><h2 id="t-${caso.id}">${esc(caso.titulo.split(" · ")[1] || caso.titulo)}</h2>${caso.html}</section>`;
      for (const p of b.preguntas.filter(q => q.caso === caso.id)) {
        n++;
        const orden = [0, 1, 2, 3, 4].sort(() => r() - 0.5);
        html += `<fieldset id="f-${p.id}"><legend><span class="num">${n}/${NQ()}</span><span>${esc(p.enunciado)}</span></legend><div class="opts">`;
        for (const i of orden) {
          const a = p.afirmaciones[i], id = `${p.id}-${i}`;
          const marcada = (estado.marks[p.id] || []).includes(i) ? "checked" : "";
          html += `<label class="opt" for="${id}" data-q="${p.id}" data-i="${i}"><input type="checkbox" id="${id}" name="${p.id}" value="${i}" ${marcada}>`
            + `<span class="opt-text">${esc(a.t)}<span class="tags"><span class="tag lv">N${a.lv}</span>`
            + `<span class="tag ${a.ok ? "k-ok" : "k-no"}">${etiquetaClave(p, a)}</span><span class="tag you"></span></span></span></label>`;
        }
        html += `</div><p class="verdict-line" id="v-${p.id}"></p></fieldset>`;
      }
    });
    form().innerHTML = html;
  }

  const respondidas = () => banco().preguntas.filter(p => (estado.marks[p.id] || []).length > 0).length;

  function actualizar() {
    const n = respondidas(), total = NQ();
    $("progress").textContent = `${n} de ${total} respondidas`;
    $("barFill").style.width = (n / total) * 100 + "%";
    $("submitBtn").disabled = estado.submitted || n < total;
    $("submitHint").textContent = estado.submitted ? "Ya enviaste tus respuestas."
      : n < total ? `Te faltan ${total - n} preguntas. En cada una marca al menos una opción.`
      : "Listo, ya puedes ver tu perfil.";
    $("stickyHint").textContent = estado.submitted ? "Tu perfil está abajo" : "";
  }

  // Texto de cada opción en la revisión: [acertada, texto].
  function decision(p, a, marcada) {
    const bien = p.comprension ? "es correcta" : "convenía hacerlo";
    if (a.ok && marcada) return [true, `✓ La marcaste: ${bien}`];
    if (a.ok) return [false, `Faltó marcarla: ${bien}`];
    if (marcada) return [false, "La marcaste, pero es un error frecuente"];
    return [true, "✓ Bien que no la marcaste: es un error frecuente"];
  }

  // Bloquea el formulario y marca cada opción para la revisión, con el nivel y la nota de cada pregunta.
  function revelar(S) {
    form().classList.add("reviewed");
    form().querySelectorAll("input").forEach(i => { i.disabled = true; });
    for (const p of banco().preguntas) {
      const s = S[p.comp];
      form().querySelectorAll(`.opt[data-q="${p.id}"]`).forEach(el => {
        const a = p.afirmaciones[+el.dataset.i], marcada = (estado.marks[p.id] || []).includes(+el.dataset.i);
        const [ok, txt] = decision(p, a, marcada);
        const tu = el.querySelector(".tag.you");
        el.classList.remove("good", "bad");
        el.classList.add(ok ? "good" : "bad");
        tu.className = "tag you " + (ok ? "st-good" : "st-bad");
        tu.textContent = txt;
      });
      $("v-" + p.id).innerHTML = `Nivel en esta pregunta: <b>${IB.perfil.NIVELES[s.nivel]}</b>${s.nota ? " · " + esc(s.nota) : ""}`;
    }
  }

  function iniciar(alTerminar) {
    const guardado = IB.almacen.leer("");
    if (guardado && guardado.seed && guardado.marks) Object.assign(estado, guardado);
    construir();
    form().addEventListener("change", e => {
      if (estado.submitted || e.target.type !== "checkbox") return;
      const q = e.target.name, i = +e.target.value, cur = new Set(estado.marks[q] || []);
      if (e.target.checked) cur.add(i); else cur.delete(i);
      estado.marks[q] = [...cur];
      guardar();
      actualizar();
    });
    $("submitBtn").addEventListener("click", () => {
      estado.submitted = true;
      guardar();
      actualizar();
      alTerminar();
    });
    actualizar();
  }

  return { iniciar, estado, revelar };
})();
