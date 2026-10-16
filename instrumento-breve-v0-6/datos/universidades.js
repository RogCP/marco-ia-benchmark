// Universidades participantes. Para sumar una, agregar un elemento a «lista»; el script de Google no cambia.
// - clave: lo que se guarda en la hoja (mayúsculas, números y guiones).
// - sub_etiqueta, sub_ayuda: nombre del segundo desplegable («Campus», «Facultad o escuela») y su indicación.
// - sub: [clave, nombre, grupo]; «grupo» agrupa opciones dentro del desplegable ("" = sin grupo).
//   Si la lista va vacía, el segundo desplegable no aparece.
// - otra: opción final del primer desplegable; abre un campo para escribir el nombre.
// Anáhuac: lista de Itzel López (16-oct-2026); Anáhuac México va como un solo campus.
// Es JSON después del signo «=».
IB.datos.universidades = {
 "lista": [
  {
   "clave": "ANAHUAC",
   "nombre": "Universidad Anáhuac",
   "sub_etiqueta": "Campus",
   "sub_ayuda": "Elige tu campus",
   "sub": [
    [
     "MEX",
     "Universidad Anáhuac México",
     ""
    ],
    [
     "MAYAB",
     "Universidad Anáhuac Mayab",
     ""
    ],
    [
     "QRO",
     "Universidad Anáhuac Querétaro",
     ""
    ],
    [
     "OAX",
     "Universidad Anáhuac Oaxaca",
     ""
    ],
    [
     "CUN",
     "Universidad Anáhuac Cancún",
     ""
    ],
    [
     "VER",
     "Universidad Anáhuac Veracruz",
     ""
    ],
    [
     "PUE",
     "Universidad Anáhuac Puebla",
     ""
    ],
    [
     "IEST",
     "IEST Anáhuac",
     ""
    ]
   ]
  },
  {
   "clave": "UNAM",
   "nombre": "Universidad Nacional Autónoma de México (UNAM)",
   "sub_etiqueta": "Facultad o escuela",
   "sub_ayuda": "Elige tu facultad o escuela",
   "sub": [
    [
     "FA",
     "Facultad de Arquitectura",
     "Facultades"
    ],
    [
     "FAD",
     "Facultad de Artes y Diseño",
     "Facultades"
    ],
    [
     "FC",
     "Facultad de Ciencias",
     "Facultades"
    ],
    [
     "FCPYS",
     "Facultad de Ciencias Políticas y Sociales",
     "Facultades"
    ],
    [
     "FCA",
     "Facultad de Contaduría y Administración",
     "Facultades"
    ],
    [
     "FD",
     "Facultad de Derecho",
     "Facultades"
    ],
    [
     "FE",
     "Facultad de Economía",
     "Facultades"
    ],
    [
     "FENO",
     "Facultad de Enfermería y Obstetricia",
     "Facultades"
    ],
    [
     "FES-ACATLAN",
     "Facultad de Estudios Superiores Acatlán",
     "Facultades"
    ],
    [
     "FES-ARAGON",
     "Facultad de Estudios Superiores Aragón",
     "Facultades"
    ],
    [
     "FES-CUAUTITLAN",
     "Facultad de Estudios Superiores Cuautitlán",
     "Facultades"
    ],
    [
     "FES-IZTACALA",
     "Facultad de Estudios Superiores Iztacala",
     "Facultades"
    ],
    [
     "FES-ZARAGOZA",
     "Facultad de Estudios Superiores Zaragoza",
     "Facultades"
    ],
    [
     "FFYL",
     "Facultad de Filosofía y Letras",
     "Facultades"
    ],
    [
     "FI",
     "Facultad de Ingeniería",
     "Facultades"
    ],
    [
     "FM",
     "Facultad de Medicina",
     "Facultades"
    ],
    [
     "FMVZ",
     "Facultad de Medicina Veterinaria y Zootecnia",
     "Facultades"
    ],
    [
     "FAM",
     "Facultad de Música",
     "Facultades"
    ],
    [
     "FO",
     "Facultad de Odontología",
     "Facultades"
    ],
    [
     "FP",
     "Facultad de Psicología",
     "Facultades"
    ],
    [
     "FQ",
     "Facultad de Química",
     "Facultades"
    ],
    [
     "FTS",
     "Facultad de Trabajo Social",
     "Facultades"
    ],
    [
     "ENAC",
     "Escuela Nacional de Artes Cinematográficas",
     "Escuelas nacionales"
    ],
    [
     "ENCIT",
     "Escuela Nacional de Ciencias de la Tierra",
     "Escuelas nacionales"
    ],
    [
     "ENACIF",
     "Escuela Nacional de Ciencias Forenses",
     "Escuelas nacionales"
    ],
    [
     "ENES-JURIQUILLA",
     "Escuela Nacional de Estudios Superiores, Unidad Juriquilla",
     "Escuelas nacionales"
    ],
    [
     "ENES-LEON",
     "Escuela Nacional de Estudios Superiores, Unidad León",
     "Escuelas nacionales"
    ],
    [
     "ENES-MERIDA",
     "Escuela Nacional de Estudios Superiores, Unidad Mérida",
     "Escuelas nacionales"
    ],
    [
     "ENES-MORELIA",
     "Escuela Nacional de Estudios Superiores, Unidad Morelia",
     "Escuelas nacionales"
    ],
    [
     "ENES-OAXACA",
     "Escuela Nacional de Estudios Superiores, Unidad Oaxaca",
     "Escuelas nacionales"
    ],
    [
     "ENALLT",
     "Escuela Nacional de Lenguas, Lingüística y Traducción",
     "Escuelas nacionales"
    ],
    [
     "CCG",
     "Centro de Ciencias Genómicas",
     "Centros e institutos"
    ],
    [
     "CNYN",
     "Centro de Nanociencias y Nanotecnología",
     "Centros e institutos"
    ],
    [
     "CUT",
     "Centro Universitario de Teatro",
     "Centros e institutos"
    ],
    [
     "IER",
     "Instituto de Energías Renovables",
     "Centros e institutos"
    ],
    [
     "IIMAS",
     "Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas",
     "Centros e institutos"
    ],
    [
     "OTRA",
     "Otra dependencia de la UNAM",
     ""
    ]
   ]
  }
 ],
 "otra": [
  "OTRA",
  "Otra universidad"
 ]
};
