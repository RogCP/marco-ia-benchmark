// Utilidades comunes. Todo el instrumento vive en el espacio de nombres IB (instrumento breve):
// IB.datos guarda lo que cargan los archivos de datos/ y cada módulo de js/ agrega su parte.
window.IB = { datos: {} };

IB.$ = id => document.getElementById(id);

IB.esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Generador pseudoaleatorio con semilla: la misma persona ve siempre el mismo orden de opciones
// y los mismos desempates, aunque recargue la página.
IB.rnd = seed => () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

// Lo que se guarda en el navegador de cada persona: respuestas (""), datos de registro ("-registro"),
// envío pendiente ("-envio") y bloqueo temporal por edad ("-bloqueo"). Puede fallar (navegación privada,
// almacenamiento bloqueado); en ese caso el instrumento funciona igual, pero no recuerda nada al recargar.
IB.almacen = {
  clave: sufijo => IB.datos.config.almacen + sufijo,
  leer(sufijo) {
    try { return JSON.parse(localStorage.getItem(this.clave(sufijo)) || "null"); } catch (e) { return null; }
  },
  guardar(sufijo, valor) {
    try { localStorage.setItem(this.clave(sufijo), JSON.stringify(valor)); } catch (e) {}
  },
  borrar(sufijo) {
    try { localStorage.removeItem(this.clave(sufijo)); } catch (e) {}
  },
  borrarTodo() {
    for (const s of ["", "-registro", "-envio", "-bloqueo"]) this.borrar(s);
  },
};

// ?prueba en la dirección marca los envíos como de prueba, para descartarlos en el análisis.
IB.esPrueba = () => /[?&]prueba(=|&|$)/.test(location.search);
