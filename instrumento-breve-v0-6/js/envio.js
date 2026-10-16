// Envío de la respuesta a la aplicación web de Apps Script (datos/config.js, «endpoint»).
// Para cambiar de destino (por ejemplo, a Supabase) solo hay que cambiar este archivo.
//
// Si falla, reintenta tres veces mientras la página sigue abierta, con esperas crecientes; si aun así
// no llega, queda guardado en el navegador y se reintenta al volver a abrir la página o al recuperar
// la conexión. El script descarta un id que ya recibió, así que reintentar nunca duplica.
IB.envio = (() => {
  const OK = "Tus respuestas quedaron registradas. Gracias por participar.";
  const FALLO = "No pudimos registrar tus respuestas, quizá por la conexión. Lo intentaremos de nuevo cuando vuelvas a abrir esta página.";
  // El azar en cada espera evita que un grupo que termina al mismo tiempo reintente en el mismo segundo.
  const ESPERAS = [0, 5000, 15000, 40000];
  let pendiente = null, enviando = false;

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      const r = (Math.random() * 16) | 0;
      return (c === "x" ? r : (r & 3) | 8).toString(16);
    });
  }

  // Lo que se guarda en la hoja. El correo va aparte: el script lo separa en la hoja de contactos.
  function registro() {
    const banco = IB.datos.banco, est = IB.instrumento.estado, reg = IB.registro.reg;
    const S = IB.calif.todas(banco, est.marks);
    const nivel = {}, puntaje = {};
    for (const c of Object.keys(banco.comps)) { nivel[c] = S[c].nivel; puntaje[c] = S[c].puntaje; }
    return {
      id: uuid(), version: IB.datos.config.version, prueba: IB.esPrueba(),
      inicio: reg.inicio, fin: new Date().toISOString(), publica: reg.publica, edad: +reg.edad,
      universidad: reg.universidad, subunidad: reg.subunidad, universidad_otra: reg.universidad_otra.trim(),
      entidad: reg.entidad, area: reg.area, semestre: reg.semestre, correo: reg.correo.trim(),
      insignia: IB.calif.insignia(banco, S), nivel, puntaje, marcas: IB.calif.cadenaMarcas(banco, est.marks),
    };
  }

  function aviso(t) {
    const el = IB.$("envioEstado");
    el.textContent = t;
    el.hidden = !t;
  }

  async function enviar() {
    const endpoint = IB.datos.config.endpoint;
    if (!endpoint || !IB.instrumento.estado.submitted || enviando) return;
    if (!pendiente) { pendiente = { datos: registro(), enviado: false }; IB.almacen.guardar("-envio", pendiente); }
    if (pendiente.enviado) { aviso(OK); return; }
    enviando = true;
    aviso("Registrando tus respuestas…");
    for (const espera of ESPERAS) {
      if (espera) await new Promise(r => setTimeout(r, espera * (0.75 + Math.random() / 2)));
      try {
        const resp = await fetch(endpoint, { method: "POST", body: JSON.stringify(pendiente.datos) });
        const j = await resp.json();
        if (j.ok) {
          pendiente.enviado = true;
          IB.almacen.guardar("-envio", pendiente);
          aviso(OK);
          enviando = false;
          return;
        }
        if (j.error !== "ocupado") break; // datos rechazados: reintentar no sirve
      } catch (e) { /* sin conexión o servicio caído: reintentar */ }
    }
    enviando = false;
    aviso(FALLO);
  }

  function iniciar() {
    pendiente = IB.almacen.leer("-envio");
    window.addEventListener("online", enviar);
    enviar();
  }

  return { iniciar, enviar };
})();
