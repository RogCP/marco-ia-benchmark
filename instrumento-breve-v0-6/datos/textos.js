// Textos de la pantalla de inicio y del perfil.
// - consentimiento, aviso: bloques [tipo, texto]; tipo «h» es subtítulo y «p» es párrafo.
// - insignias: de 0 (Explorador) a 3 (Guía), según la mediana de niveles de las 15 competencias oficiales.
// - foco_areas: nombre llano y frase de cada área del marco; se muestran las dos con promedio más bajo.
// - consejos: tres por competencia, uno para llegar a cada nivel (N1, N2, N3).
// - notas: explicación del nivel de una pregunta cuando hubo errores en niveles anteriores.
// Es JSON después del signo «=».
IB.datos.textos = {
 "consentimiento": [
  [
   "p",
   "La Universidad Anáhuac México y la Universidad Nacional Autónoma de México están desarrollando una investigación para desarrollar un marco de competencia de IA 2030."
  ],
  [
   "p",
   "El objetivo de este estudio es desarrollar un modelo basado en niveles de agencia, validado empíricamente y alineado con estándares internacionales. Este documento tiene como propósito informarle los alcances de su participación en la investigación."
  ],
  [
   "p",
   "Le pedimos leerlo cuidadosamente y, en caso de estar de acuerdo, aceptarlo al final."
  ],
  [
   "h",
   "Sobre su participación"
  ],
  [
   "p",
   "Usted ha sido invitado/a a participar en el levantamiento de datos para el desarrollo del marco de competencia IA 2030."
  ],
  [
   "p",
   "Nuestro propósito es construir no solo un marco de competencias sino rutas de aprendizaje que permitan desarrollar dichas competencias."
  ],
  [
   "p",
   "Su participación es completamente voluntaria. No implica compensación económica ni costo alguno. Una vez concluido el estudio, los hallazgos serán publicados en un informe y publicaciones relacionadas que serán compartidos en un portal digital de manera consolidada. Sus datos personales no serán compartidos de manera individual, pero sí de manera consolidada (encuestas). En el caso de personas entrevistadas solo se citará el número de entrevistado sin mostrar su nombre ni datos personales."
  ],
  [
   "h",
   "Derechos ARCO"
  ],
  [
   "p",
   "El titular de los datos personales tiene derecho a solicitar el Acceso, Rectificación, Cancelación u Oposición (derechos ARCO) respecto del tratamiento de su información. Para iniciar este proceso, deberá presentar una solicitud por escrito dirigida al Centro de Emprendimiento Universitario de la Universidad Anáhuac México en el domicilio en Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Estado de México, o bien, a través del correo electrónico emprende@anahuac.mx detallando los datos sobre los cuales desea ejercer su derecho."
  ]
 ],
 "aviso": [
  [
   "p",
   "Investigaciones y Estudios Superiores, S. C. (Universidad Anáhuac México), con domicilio en Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Estado de México, C. P. 52786, es responsable del tratamiento de los datos personales que nos proporciones en este cuestionario, que forma parte de una investigación conjunta con la Facultad de Química de la Universidad Nacional Autónoma de México."
  ],
  [
   "h",
   "Qué datos recabamos"
  ],
  [
   "p",
   "Edad, universidad, entidad, área de estudio, semestre y correo institucional, además de tus respuestas a los casos y la fecha y hora en que respondes. No recabamos datos personales sensibles."
  ],
  [
   "h",
   "Para qué los usamos"
  ],
  [
   "p",
   "Para analizar los resultados del estudio de forma consolidada, por universidad, entidad, área de estudio, semestre y edad, y para identificar que cada persona responda una sola vez. Tu correo se guarda por separado de tus respuestas. Tus respuestas no se publican de manera individual."
  ],
  [
   "h",
   "Con quién los compartimos"
  ],
  [
   "p",
   "Solo los consulta el equipo de investigación de la Universidad Anáhuac México y de la Facultad de Química de la UNAM. No los transferimos a terceros."
  ],
  [
   "h",
   "Tus derechos"
  ],
  [
   "p",
   "Puedes ejercer tus derechos de acceso, rectificación, cancelación u oposición (ARCO) con una solicitud por escrito al Centro de Emprendimiento Universitario de la Universidad Anáhuac México, en Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Estado de México, o al correo emprende@anahuac.mx."
  ]
 ],
 "aviso_pendiente": "Pendiente: enlace al aviso de privacidad completo para participantes del proyecto.",
 "insignias": [
  {
   "nombre": "Explorador",
   "mensaje": "¡Felicidades por dar el primer paso! Estás comenzando tu camino con la IA y ya te detuviste a pensar cómo la usas. Hay mucho por descubrir."
  },
  {
   "nombre": "Practicante",
   "mensaje": "Ya usas la IA en tu día a día y conoces lo básico de cómo funciona. Tienes una buena base para seguir profundizando."
  },
  {
   "nombre": "Estratega",
   "mensaje": "Usas la IA con criterio y sabes cuándo y cómo apoyarte en ella. Estás cerca de diseñar tus propias formas de trabajar con IA."
  },
  {
   "nombre": "Guía",
   "mensaje": "Tienes un dominio amplio de la IA y una mirada crítica sobre ella. Estás en posición de proponer nuevas formas de usarla y de acompañar a otras personas en su camino."
  }
 ],
 "foco_areas": {
  "C1": [
   "Comprensión de la IA",
   "Entender cómo funcionan y aprenden los sistemas de IA."
  ],
  "C2": [
   "Uso efectivo",
   "Elegir y usar las herramientas de IA según lo que necesitas."
  ],
  "C3": [
   "Evaluación crítica",
   "Revisar con criterio lo que te da la IA."
  ],
  "C4": [
   "Creación e innovación",
   "Crear contenido y soluciones con IA."
  ],
  "C5": [
   "Aplicación en tu disciplina",
   "Llevar la IA a la práctica de tu profesión."
  ],
  "E1": [
   "Ética y uso responsable",
   "Usar la IA de forma ética y segura, cuidando los datos y el bienestar."
  ],
  "E2": [
   "Agencia y desarrollo continuo",
   "Mantener tu propio criterio frente a la IA y seguir aprendiendo."
  ],
  "E3": [
   "Impacto social",
   "Analizar los efectos sociales y ambientales de la IA."
  ]
 },
 "foco_frase": "Donde más puedes crecer ahora:",
 "foco_completo": "Llegaste al nivel más alto en todas las áreas del marco.",
 "consejos": {
  "C1-1": [
   "Fíjate qué herramientas de tu día a día usan IA, como el corrector del teclado, las recomendaciones de videos o un chatbot, y en qué se distinguen: unas recomiendan, otras clasifican y otras generan texto o imágenes.",
   "Cuando un chatbot te dé un dato, recuerda que produce el texto más probable según lo que aprendió, sin consultar una base de datos. Pídele sus fuentes y revisa que existan.",
   "Antes de usar un sistema de IA para algo importante, pregúntate para qué fue hecho, en qué suele fallar y a quién afectaría un error."
  ],
  "C1-2": [
   "Recuerda que detrás de cada sistema de IA hay personas que decidieron qué debía hacer y con qué datos entrenarlo.",
   "Cuando una herramienta falle, pregúntate con qué datos se entrenó: un sistema aprende de sus ejemplos y le cuesta lo que no se parece a ellos.",
   "Imagina qué podría hacer la IA en tu campo dentro de unos años, a partir de cómo aprende y percibe hoy, y qué efectos tendría."
  ],
  "C2-1": [
   "Prueba una herramienta de IA distinta a la que ya usas, también por voz, y explora para qué tareas te sirve y para cuáles no.",
   "Antes de usar IA para una tarea, pregúntate qué tipo de herramienta le conviene (un chatbot, una herramienta especializada) o si es mejor hacerla sin IA.",
   "Si te interesa el lado técnico, prueba una herramienta de automatización que conecte varios pasos de un proceso, por ejemplo un formulario, un modelo de IA y tu correo."
  ],
  "C2-2": [
   "Prueba una app que se adapte a ti, como un tutor o una app de idiomas con IA, y observa cómo cambia según tus respuestas.",
   "Revisa la configuración de las apps que se adaptan a ti y ajusta el nivel o los temas a lo que de verdad necesitas aprender.",
   "Arma tu propio tutor: dale a un chatbot tu temario y pídele que te haga preguntas y cambie la dificultad según tus errores."
  ],
  "C2-3": [
   "Piensa en una tarea repetitiva de tu escuela o tu trabajo y pregúntate en qué parte podría ayudarte la IA.",
   "Cuando uses IA para resolver algo, ve por pasos: prueba con un ejemplo pequeño, revisa el resultado y ajusta antes de aplicarlo a todo.",
   "Ante un problema grande, divídelo en partes antes de abrir la IA y decide cuáles le delegas y cuáles te quedas."
  ],
  "C3-1": [
   "Antes de usar una cifra o un dato que te dio la IA, búscalo en su fuente original.",
   "Si la IA cita un estudio o una fuente, verifica que exista: que otras páginas repitan un dato no prueba que sea cierto.",
   "Además de revisar si lo que te dio la IA es correcto, pregúntate si de verdad sirve para lo que necesitas decidir o entregar."
  ],
  "C3-2": [
   "Cuando recibas una respuesta de la IA, pregúntate qué le falta: qué casos, qué datos o qué personas no considera.",
   "Contrasta lo que te dice la IA con lo que tú sabes del tema o de la situación. Tu experiencia también es un dato.",
   "Practica explicar a alguien cómo funciona la IA sin decir que «piensa», «sabe» o «quiere»: describe qué hace con los datos."
  ],
  "C4-1": [
   "Pídele a la IA varias versiones o enfoques de lo mismo y combina lo mejor con tus propias ideas.",
   "En tus instrucciones di para quién es el resultado y para qué sirve, y pídele a la IA que te pregunte lo que le falte antes de empezar.",
   "Guarda las instrucciones que te funcionan como plantillas, con espacios para cambiar los datos, para reutilizarlas o compartirlas."
  ],
  "C4-2": [
   "Piensa en un problema de tu comunidad o tu escuela que la IA podría ayudar a resolver y qué datos se necesitarían.",
   "Arma una versión sencilla de una solución con IA, pruébala con quienes la usarían y ajústala con lo que te digan.",
   "Si te interesa el lado técnico, aprende a conectar un modelo de IA a otra herramienta (por ejemplo, por API) o a guardar sus resultados en una base de datos."
  ],
  "C5-1": [
   "Busca qué herramientas de IA se usan en tu carrera o campo profesional y para qué problemas.",
   "Cuando la IA te dé un resultado de tu área, interprétalo con lo que sabes de tu disciplina y consulta a gente de otras áreas cuando el problema lo pida.",
   "Piensa en un proceso de tu práctica profesional que podría hacerse distinto con apoyo de IA y en qué seguiría dependiendo de tu criterio."
  ],
  "E1-1": [
   "Revisa qué reglas tiene tu escuela o tu trabajo sobre el uso de IA y cuida los permisos que les das a las apps.",
   "Antes de usar IA en algo que afecte a otras personas, piensa qué tan grave sería un error y quién respondería por él.",
   "Cuando no haya reglas claras para un uso de IA, propón criterios con tu equipo en lugar de esperar a que alguien más los defina."
  ],
  "E1-2": [
   "No subas a un chatbot datos personales tuyos o de otras personas (nombres, teléfonos, direcciones) si no es indispensable.",
   "Antes de compartir información con una herramienta de IA, quita lo que identifica a las personas y revisa qué hace la herramienta con los datos.",
   "Cuida lo que publicas con ayuda de IA: lo que firmas con tu nombre construye tu reputación, incluidos los errores que no revisaste."
  ],
  "E1-3": [
   "Observa cuánto tiempo pasas con herramientas de IA y si te ayudan o te quitan tiempo de descanso.",
   "Haz algunas tareas sin IA de vez en cuando. Si te cuesta mucho, es una señal para practicar más por tu cuenta.",
   "Propón en tu equipo o grupo acuerdos sencillos para usar la IA sin perder habilidades, como qué tareas hacer sin ella."
  ],
  "E2-1": [
   "Usa la IA con curiosidad, pero quédate con la última palabra: si algo no te convence, revísalo por tu cuenta.",
   "Fíjate qué te funciona de la IA en tu vida diaria y prueba llevarlo a tus tareas de la carrera. Date tiempo para aprender algo nuevo sobre ella.",
   "Pregúntate cómo está cambiando la IA tu forma de trabajar y qué partes de tu profesión quieres seguir haciendo con tu propio criterio."
  ],
  "E3-1": [
   "Recuerda que usar IA consume energía y que sus decisiones afectan a personas. Toma en cuenta ambos efectos al usarla.",
   "Cuando la IA te haga una recomendación, pregúntate a quién podría dejar fuera por idioma, edad, acceso o recursos.",
   "Imagina cómo cambiaría tu comunidad si una aplicación de IA se usara a gran escala, y quién ganaría o perdería."
  ],
  "C2-4": [
   "Recuerda que usar IA tiene costos aunque sea gratis para ti: energía, servidores y el tiempo de revisar lo que produce.",
   "Antes de usar IA para una tarea, pregúntate si vale la pena o si una solución más simple bastaría.",
   "Si tu equipo usa IA, lleven un registro sencillo de cuánto gastan y qué mejora obtienen, para decidir si les conviene."
  ],
  "C3-3": [
   "Ten presente que hay decisiones que la IA no debe tomar sola, sobre todo las que afectan a personas.",
   "Pregúntate si la IA funciona igual para todos: puede fallar más con ciertas formas de escribir, lenguas o contextos.",
   "Al usar IA en un proceso, define en qué casos debe intervenir una persona antes de tomar una decisión."
  ]
 },
 "notas": {
  "un_error": "Acertaste las opciones de {alto}, pero tuviste un error en {nivel}.",
  "dos_errores_mismo_nivel": "Acertaste las opciones de {alto}, pero tuviste dos errores en {nivel}.",
  "dos_errores_niveles_distintos": "Acertaste las opciones de {alto}, pero tuviste dos errores: uno en N1 y uno en N2.",
  "sin_base": "Acertaste las opciones de {alto}, pero no las de N1 y N2, que son la base de este nivel."
 }
};
