// Banco del instrumento breve: competencias, casos y preguntas (contenido de la v0.3 del equipo).
// - comps: nombre y tipo (oficial / candidata) de cada competencia.
// - perfil_tecnico: competencias cuyo N3 pide conocimiento técnico («N3 · según perfil»).
// - casos: id, título y texto en HTML.
// - preguntas: una por competencia; cada afirmación tiene texto (t), si conviene marcarla (ok) y nivel (lv).
//   El orden de las afirmaciones importa: las marcas se guardan en este orden.
// Es JSON después del signo «=»: los scripts de Python lo leen así.
IB.datos.banco = {
 "instruccion": "Lee cada caso. En cada pregunta marca todas las opciones que harías o que consideres correctas. Cada opción se califica por separado.",
 "perfil_tecnico": [
  "C2-1",
  "C4-2"
 ],
 "comps": {
  "C1-1": {
   "nombre": "Comprensión conceptual de la IA: qué es, cómo piensa y su alcance",
   "tipo": "oficial"
  },
  "C1-2": {
   "nombre": "Comprensión del aprendizaje, percepción y acción de los sistemas de IA",
   "tipo": "oficial"
  },
  "C2-1": {
   "nombre": "Interacción, selección y configuración de sistemas de IA",
   "tipo": "oficial"
  },
  "C2-2": {
   "nombre": "Uso de tecnologías adaptativas personalizadas de IA",
   "tipo": "oficial"
  },
  "C2-3": {
   "nombre": "Resolución de problemas con apoyo de IA",
   "tipo": "oficial"
  },
  "C3-1": {
   "nombre": "Evaluación crítica de la calidad y confiabilidad de outputs de IA",
   "tipo": "oficial"
  },
  "C3-2": {
   "nombre": "Juicio humano y explicación crítica de la IA",
   "tipo": "oficial"
  },
  "C4-1": {
   "nombre": "Creación de contenido con IA mediante instrucciones e iteración",
   "tipo": "oficial"
  },
  "C4-2": {
   "nombre": "Prototipado, innovación y construcción técnica de soluciones con IA",
   "tipo": "oficial"
  },
  "C5-1": {
   "nombre": "Aplicación de la IA en la práctica disciplinar propia",
   "tipo": "oficial"
  },
  "E1-1": {
   "nombre": "Principios éticos, normativos y de seguridad en el uso de la IA",
   "tipo": "oficial"
  },
  "E1-2": {
   "nombre": "Privacidad, datos e identidad digital",
   "tipo": "oficial"
  },
  "E1-3": {
   "nombre": "Salud y bienestar digital en el uso de la IA",
   "tipo": "oficial"
  },
  "E2-1": {
   "nombre": "Agencia, desarrollo continuo y reflexión crítica frente a la IA",
   "tipo": "oficial"
  },
  "E3-1": {
   "nombre": "Análisis, equidad y responsabilidad ante el impacto social y ambiental de la IA",
   "tipo": "oficial"
  },
  "C2-4": {
   "nombre": "Conciencia de costos económicos, materiales y ambientales en el uso de la IA",
   "tipo": "candidata"
  },
  "C3-3": {
   "nombre": "Reconocimiento de sesgos y límites de la IA para decidir cuándo delegar a juicio humano",
   "tipo": "candidata"
  }
 },
 "casos": [
  {
   "id": "caso1",
   "titulo": "Caso 1 · El diagnóstico de las fonditas",
   "html": "<p>Mariana, estudiante de séptimo semestre de licenciatura, hace su servicio social en Cocinas Vivas, una asociación civil de Iztapalapa que apoya a 40 fondas familiares. La directora, Rosa, le pidió un diagnóstico breve de la economía de las fondas tras la pandemia, para decidir a cuáles apoyar primero y cómo.</p><p>Con poco tiempo, Mariana hace casi todo con un chatbot de IA generativa, que no tiene activada la búsqueda en internet. Subió completa la hoja de cálculo de la asociación, con el nombre, teléfono, dirección, ingresos aproximados y apoyos de gobierno de cada dueña, y le pidió: «Hazme un diagnóstico de estas fondas».</p><p>La hoja dice que:</p><ul><li>22 de las 40 fondas ganan hoy menos que en 2019.</li><li>12 dueñas reciben algún apoyo de gobierno.</li><li>31 dueñas no tienen cuenta bancaria.</li><li>9 dueñas tienen más de 65 años y 2 hablan náhuatl como primera lengua.</li><li>Casi todas usan solo WhatsApp en su celular.</li></ul><p>El chatbot respondió con un texto bien redactado. Este es un fragmento:</p><blockquote><span class=\"bq-label\">Respuesta del chatbot</span>Según el INEGI (Encuesta Nacional de Negocios Gastronómicos, 2024), el 78 % de las fondas de la Ciudad de México cerró durante la pandemia. Más de la mitad de las fondas de la asociación gana hoy menos que en 2019. La mayoría de las dueñas recibe apoyo de gobierno, por lo que su situación es estable. Se recomienda que las fondas pidan un crédito bancario para digitalizarse y contraten un sistema de cobro como Square o Toast.</blockquote><p>Mariana buscó la encuesta en el sitio del INEGI y no la encontró.</p><p>Cuando le cuenta a Rosa que usó un chatbot, Rosa le pregunta: «¿Cómo es que esa máquina sabe tanto de nuestras fondas? ¿Puedo confiar en lo que dice?».</p><p>Además, Mariana nota que últimamente usa el chatbot para casi todo, hasta para mensajes sencillos, y se siente insegura al redactar sin él.</p>"
  },
  {
   "id": "caso2",
   "titulo": "Caso 2 · El buzón de la Coordinación",
   "html": "<p>La Coordinación de Servicio Social de tu facultad recibe cada mes unos 900 mensajes de estudiantes por un formulario en línea. La mayoría son dudas sobre trámites o solicitudes de cambio de plaza. También llegan quejas sobre las instituciones del servicio y, a veces, reportes graves, como acoso o accidentes. Hoy, dos personas leen todos los mensajes y tardan hasta tres semanas en contestar.</p><p>La Coordinación te invitó a un equipo que quiere usar IA para responder más rápido. Un proveedor ofrece un sistema en cuatro pasos:</p><ol><li>Un modelo de IA clasifica cada mensaje como trámite, cambio de plaza, queja o grave.</li><li>Un modelo de IA generativa, como el de los chatbots, redacta la respuesta.</li><li>La respuesta se envía al estudiante sin que nadie de la Coordinación la revise.</li><li>Un tablero muestra cuántos mensajes se contestaron y en cuánto tiempo.</li></ol><p>Para el paso 1 hay dos opciones: el mismo modelo generativo del paso 2, o un modelo más pequeño que solo sabe clasificar, entrenado con mensajes ya clasificados. El proveedor cobra por cada mensaje procesado y promete respuesta en menos de un minuto.</p><p>En una prueba con 50 mensajes ya recibidos, el sistema clasificó bien 46 y se equivocó en 4. Tres eran mensajes con muchas abreviaturas o que mezclaban español con otra lengua. El cuarto, un reporte de acoso que el sistema clasificó como queja común.</p>"
  },
  {
   "id": "caso3",
   "titulo": "Caso 3 · Las plagas de la cooperativa",
   "html": "<p>Una cooperativa de productoras de jitomate en Morelos colabora con un equipo de estudiantes de distintas carreras de tu universidad.</p><p>Desde hace un año, las productoras usan una app con IA en el celular: toman una foto de las hojas y la app les dice si hay una plaga y cuál es. El modelo de la app se entrenó con miles de fotos de cultivos, casi todas de otros países. La app incluye un curso sobre plagas que cambia los ejercicios según los errores de cada productora.</p><p>Esta temporada, la app marcó como enfermas varias hojas que la agrónoma de la cooperativa considera sanas, y no detectó un hongo común en la región.</p><p>En la reunión del equipo, Daniel, que estudia ingeniería, propone reentrenar el modelo con fotos de la zona. Lucía, que estudia comunicación, dice que no entiende de modelos de IA y que eso le toca a Daniel. La agrónoma comenta, preocupada, que algunas productoras ya no revisan sus plantas: solo hacen lo que la app les dice.</p>"
  }
 ],
 "preguntas": [
  {
   "id": "P01",
   "caso": "caso1",
   "comp": "C1-1",
   "tarea": false,
   "comprension": true,
   "enunciado": "Rosa quiere saber cómo «sabe» tanto el chatbot y si puede confiar en él. ¿Qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "Un chatbot y un sistema que recomienda videos hacen lo mismo: eligen entre respuestas ya escritas.",
     "ok": false,
     "lv": 1
    },
    {
     "t": "El 78 % pudo salir de cómo el modelo combina patrones de textos, sin consultar fuentes.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Si no tiene un dato, un chatbot como este suele avisarlo en lugar de inventar una cifra.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Sirve para ordenar y redactar, pero sus cifras deben revisarse antes de decidir a quién apoyar.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Como procesa más información que una persona, su diagnóstico es más objetivo que el de Mariana.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P02",
   "caso": "caso1",
   "comp": "C3-1",
   "tarea": false,
   "comprension": true,
   "enunciado": "Sobre el fragmento que respondió el chatbot, ¿qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "Lo que el fragmento dice del apoyo de gobierno no coincide con la hoja.",
     "ok": true,
     "lv": 1
    },
    {
     "t": "Sin la encuesta original, Mariana no debería usar la cifra del 78 %.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Si otras páginas repiten la cifra del 78 %, eso confirma que la encuesta existe.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Aunque sus cifras fueran correctas, el fragmento no le dice a Rosa a qué fondas apoyar primero.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Para Rosa, el diagnóstico es más útil entre más datos nacionales incluya, aunque no sean de sus fondas.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P03",
   "caso": "caso1",
   "comp": "C3-2",
   "tarea": false,
   "comprension": false,
   "enunciado": "Si fueras Mariana, ¿qué harías con el texto y cómo se lo explicarías a Rosa?",
   "afirmaciones": [
    {
     "t": "Agregar al diagnóstico lo que falta sobre las dueñas sin banco y las mayores de 65.",
     "ok": true,
     "lv": 1
    },
    {
     "t": "Contrastar el texto con lo que he visto al trabajar con las dueñas.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Corregir solo las cifras equivocadas y dejar las recomendaciones como están.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Explicarle que el chatbot no conoce las fondas: combina la hoja con patrones de otros textos.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Explicarle que el chatbot sabía que la cifra no existía, pero la incluyó para sonar convincente.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P04",
   "caso": "caso1",
   "comp": "C4-1",
   "tarea": true,
   "comprension": false,
   "enunciado": "Mariana pedirá el diagnóstico otra vez, y el próximo semestre otros voluntarios harán diagnósticos parecidos. Marca lo que incluirías en la nueva instrucción.",
   "afirmaciones": [
    {
     "t": "Que proponga dos formas de organizar el diagnóstico: por zona o por tipo de apoyo.",
     "ok": true,
     "lv": 1
    },
    {
     "t": "Para quién es, qué decisión debe apoyar y que pregunte lo que le falte saber.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Que complete con cifras nacionales los datos que falten en la hoja de la asociación.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Espacios marcados, como [datos del semestre], para que otros la reutilicen.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Que retome la conversación de Mariana, para no empezar de cero cada semestre.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P05",
   "caso": "caso1",
   "comp": "E1-2",
   "tarea": false,
   "comprension": false,
   "enunciado": "Si tuvieras que hacer de nuevo el diagnóstico, ¿qué harías con los datos de las dueñas?",
   "afirmaciones": [
    {
     "t": "Subir la hoja completa, porque pertenece a la asociación donde trabajo.",
     "ok": false,
     "lv": 1
    },
    {
     "t": "Antes de subir la hoja, quitar nombres, teléfonos y direcciones.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Borrar la conversación, dando por hecho que así los datos ya no quedan en la empresa.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Revisar bien el diagnóstico antes de firmarlo: los errores de la IA afectan mi credibilidad.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "No mencionar en ningún lado que usé IA, para que nadie dude de la calidad de mi trabajo.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P06",
   "caso": "caso1",
   "comp": "E1-3",
   "tarea": false,
   "comprension": true,
   "enunciado": "Mariana se siente insegura cuando escribe sin el chatbot. ¿Qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "Si el chatbot le ahorra tiempo, usarlo para todo no afecta su bienestar.",
     "ok": false,
     "lv": 1
    },
    {
     "t": "Que dude de su redacción cuando no tiene el chatbot es algo que conviene atender.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Si revisa lo que el chatbot escribe, usarlo para todos sus mensajes no crea dependencia.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Mariana podría proponer al equipo acordar qué tareas hacer sin IA para no perder práctica.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Cada integrante decide cuánto usa el chatbot; no es algo que el equipo tenga que acordar.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P07",
   "caso": "caso1",
   "comp": "E3-1",
   "tarea": false,
   "comprension": true,
   "enunciado": "Sobre los efectos del chatbot y de su recomendación, ¿qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "Usar el chatbot también tiene un costo ambiental, aunque no aparezca en el texto.",
     "ok": true,
     "lv": 1
    },
    {
     "t": "Seguir la recomendación tal cual podría dejar fuera a parte de las dueñas.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "La recomendación es justa porque propone lo mismo para todas las fondas.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Si muchas asociaciones siguen consejos así, las fondas sin digitalizar podrían perder clientes.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Con el tiempo, estas herramientas serán más baratas y la brecha entre fondas se cerrará sola.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P08",
   "caso": "caso2",
   "comp": "C2-1",
   "tarea": false,
   "comprension": false,
   "enunciado": "Como parte del equipo, ¿qué harías para elegir las herramientas y montar el sistema?",
   "afirmaciones": [
    {
     "t": "Probar nosotros mismos la plataforma con mensajes de ejemplo, para ver qué hace y qué no.",
     "ok": true,
     "lv": 1
    },
    {
     "t": "Usar el modelo pequeño para clasificar y dejar el generativo para redactar.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Que el modelo también redacte la respuesta a los reportes graves, para atenderlos de inmediato.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Montar con una herramienta de automatización el flujo entre formulario, modelos y correo.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Dejar que el proveedor configure todo el flujo y limitarnos a revisar el tablero.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P09",
   "caso": "caso2",
   "comp": "C2-3",
   "tarea": true,
   "comprension": false,
   "enunciado": "Te piden armar el plan para usar IA en el buzón. Marca los pasos que incluirías.",
   "afirmaciones": [
    {
     "t": "Usar la IA sobre todo en los reportes graves, porque son pocos y urgentes.",
     "ok": false,
     "lv": 1
    },
    {
     "t": "Medir los errores por tipo de mensaje y ajustar el sistema antes de usarlo con todos.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Pedirle al mismo sistema que evalúe su propia prueba, para ahorrar tiempo de revisión.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Separar los mensajes por tipo y definir qué necesita cada uno antes de elegir dónde usar IA.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Repartir los mensajes entre las dos personas por orden de llegada y que la IA redacte todas las respuestas.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P10",
   "caso": "caso2",
   "comp": "C2-4",
   "tarea": false,
   "comprension": true,
   "enunciado": "Sobre lo que cuesta el sistema, ¿qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "Procesar cada mensaje consume energía en los servidores, aunque no aparezca en la factura.",
     "ok": true,
     "lv": 1
    },
    {
     "t": "Usar IA generativa para mensajes que bastaría responder con una plantilla fija es un gasto evitable.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "El tiempo de las dos personas revisando respuestas no es un costo, porque ya tienen sueldo.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "La Coordinación debería revisar cada mes cuánto gasta y qué mejora, para decidir si sigue.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Basta comparar la factura del proveedor con el sueldo de las dos personas para decidir si conviene.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P11",
   "caso": "caso2",
   "comp": "C3-3",
   "tarea": false,
   "comprension": true,
   "enunciado": "Sobre los errores de la prueba y lo que conviene dejarle al sistema, ¿qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "Con más datos de entrenamiento, el sistema podría decidir por sí mismo cómo atender un reporte de acoso.",
     "ok": false,
     "lv": 1
    },
    {
     "t": "Sus fallas con abreviaturas o mezcla de lenguas sugieren que funciona peor con ciertas formas de escribir.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Con 46 aciertos de 50, se puede dar por hecho que el sistema funciona igual de bien para todos.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Todo mensaje marcado como grave o queja debería pasar por una persona antes de responderse.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Basta con que una persona revise cada semana una muestra al azar de las respuestas enviadas.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P12",
   "caso": "caso2",
   "comp": "C4-2",
   "tarea": false,
   "comprension": false,
   "enunciado": "¿Qué harías al diseñar la solución?",
   "afirmaciones": [
    {
     "t": "Ajustar el modelo pequeño con mensajes ya clasificados de la Coordinación, para que entienda los de aquí.",
     "ok": true,
     "lv": 1
    },
    {
     "t": "Diseñar el sistema con las dos personas que hoy responden, probarlo con ellas y ajustarlo.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Usar las categorías que trae el proveedor y adaptar después las que usa la Coordinación.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Conectar el modelo por API y guardar en una base de datos cada clasificación y respuesta.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Agregar un segundo modelo que revise al primero, en lugar de la revisión de personas.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P13",
   "caso": "caso2",
   "comp": "E1-1",
   "tarea": false,
   "comprension": true,
   "enunciado": "Sobre la ética y las reglas de este sistema, ¿qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "Desde el formulario, los estudiantes deberían saber que sus mensajes los procesa una IA.",
     "ok": true,
     "lv": 1
    },
    {
     "t": "Un error con un caso de acoso pesa más que varios con trámites, aunque cuenten igual en el porcentaje.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Si el proveedor garantiza por contrato un 92 % de aciertos, la responsabilidad por los errores es suya.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Sin reglas en la facultad, la Coordinación puede fijar criterios propios y consultarlos con estudiantes.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Si el sistema cumple la ley de protección de datos, la Coordinación no necesita otros criterios éticos.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P14",
   "caso": "caso3",
   "comp": "C1-2",
   "tarea": false,
   "comprension": true,
   "enunciado": "Sobre cómo funciona la app de plagas, ¿qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "La app aprendió por su cuenta qué es una plaga; nadie decidió qué tenía que detectar.",
     "ok": false,
     "lv": 1
    },
    {
     "t": "Puede marcar hojas sanas como enfermas porque las de la región difieren de las de entrenamiento.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Con cada foto que suben las productoras, la app aprende y corrige sola los errores que cometió.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Si muchas la usan, las fotos con fecha y lugar podrían mostrar hacia dónde avanza una plaga.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Como ya reconoce plagas en fotos, pronto podrá decidir sola qué tratamiento aplicar en cada parcela.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P15",
   "caso": "caso3",
   "comp": "C2-2",
   "tarea": false,
   "comprension": true,
   "enunciado": "Sobre el curso que se adapta a cada productora, ¿qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "Los ejercicios que el curso le repite le indican qué temas le conviene repasar.",
     "ok": true,
     "lv": 1
    },
    {
     "t": "Si el curso le avanza lento, le conviene revisar si puede ajustar el nivel o elegir temas.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Como el curso se adapta solo, no importa si la productora contesta con prisa o al azar.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "El equipo podría configurar o crear un módulo del curso con las plagas de la región.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Si cada productora hace más ejercicios, el curso se ajustará solo a las plagas de la región.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P16",
   "caso": "caso3",
   "comp": "C5-1",
   "tarea": false,
   "comprension": true,
   "enunciado": "Sobre cómo deberían usar la app la agrónoma y el equipo, ¿qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "Un chatbot general, al que se le describe la hoja con palabras, diagnosticaría tan bien como la app.",
     "ok": false,
     "lv": 1
    },
    {
     "t": "La agrónoma debería tomar el resultado de la app como un dato más, junto con lo que observa en campo.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Reentrenar el modelo es un problema técnico, así que basta con que Daniel lo resuelva sin la agrónoma.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "Con los reportes de la app, la agrónoma podría decidir qué parcelas visitar primero, sin dejar las demás.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Antes de cambiar cómo vigila el cultivo, la cooperativa debería esperar a que la app ya no se equivoque.",
     "ok": false,
     "lv": 3
    }
   ]
  },
  {
   "id": "P17",
   "caso": "caso3",
   "comp": "E2-1",
   "tarea": false,
   "comprension": true,
   "enunciado": "Sobre las productoras que solo hacen lo que dice la app y sobre Lucía, ¿qué afirmaciones son correctas?",
   "afirmaciones": [
    {
     "t": "Si la app acierta la mayoría de las veces, es razonable que las productoras dejen de revisar sus plantas.",
     "ok": false,
     "lv": 1
    },
    {
     "t": "A Lucía le serviría aprender lo básico de cómo se entrena un modelo, aunque no vaya a programarlo.",
     "ok": true,
     "lv": 2
    },
    {
     "t": "Como Lucía usa chatbots a diario, ya sabe lo suficiente de IA para opinar sobre el reentrenamiento.",
     "ok": false,
     "lv": 2
    },
    {
     "t": "La agrónoma podría preguntarse qué de su trabajo cambia con la app y qué depende de su criterio.",
     "ok": true,
     "lv": 3
    },
    {
     "t": "Si la app hace bien su parte, la agrónoma no tiene por qué replantearse su papel en la cooperativa.",
     "ok": false,
     "lv": 3
    }
   ]
  }
 ]
};
