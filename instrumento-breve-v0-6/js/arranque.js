// Arranque. Se carga al final, cuando ya están los datos y todos los módulos.

// Solo para quien prueba: #reiniciar al final de la dirección borra lo guardado en este navegador.
function reiniciarSiSePide() {
  if (location.hash !== "#reiniciar") return false;
  IB.almacen.borrarTodo();
  history.replaceState(null, "", location.pathname + location.search);
  return true;
}
reiniciarSiSePide();
window.addEventListener("hashchange", () => { if (reiniciarSiSePide()) location.reload(); });

IB.registro.iniciar();
IB.instrumento.iniciar(() => {
  IB.perfil.mostrar();
  IB.envio.enviar();
  IB.$("results").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
});
if (IB.instrumento.estado.submitted) IB.perfil.mostrar();
IB.envio.iniciar();
