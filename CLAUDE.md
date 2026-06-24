# CLAUDE.md — Marco IA 2030 · Benchmark Interactivo

Este archivo informa a Claude Code sobre el proyecto. Léelo al inicio de cada sesión.

---

## ¿Qué es este proyecto?

Sitio web estático que presenta el **Benchmark de marcos internacionales de competencias en IA** para la construcción del **Marco Mexicano de Competencias en IA para Educación Superior** — proyecto ganador de la Beca FIMPES-Santander Universidades 2026 ($400,000 MXN).

El benchmark sintetiza 11 marcos fundacionales, institucionales y académicos sobre alfabetización en IA. Su propósito es informar el diseño del marco mexicano que se construye en alianza entre la Universidad Anáhuac México (IES líder) y la UNAM, Facultad de Química.

**Estado actual:** 11 marcos analizados (v1.1). Próximas tareas en orden:
1. Migrar de HTML monolítico a estructura de una página por marco.
2. Incorporar marcos adicionales (a definir inclusión en benchmark principal o bibliografía complementaria).

---

## Equipo del proyecto

- **Roger Canales** (`rogerio.canales@gmx.com`) — consultor y profesor UNAM, coinvestigador FIMPES, motor operativo del benchmark. Conversaciones en **español**.
- **Dr. Alejandro Pisanty** — co-responsable UNAM Facultad de Química (Roger lo llama "Alex").
- **Dr. Carlos Amador Bedolla** — Director Facultad de Química UNAM (respaldo institucional).
- **Equipo Anáhuac** — Dr. Guillermo Jesús Larios Hernández y Dra. Verónica Itzel López Castro.

---

## Ubicación de archivos

### Repositorio (este proyecto)

El repo vive en iCloud y se sincroniza automáticamente entre las dos computadoras de Roger a través de iCloud Drive. La ruta es:

```
~/Documents/Roger/Parallel Entrepreneurship/Roger Independiente/DestruCreacion/Consultoría/Competencias IA - Anáhuac/Benchmark/Benchmark Interactivo/
```

Git se usa dentro de esta carpeta de iCloud. No es la configuración ideal pero funciona en la práctica si se respeta una regla simple: **no editar el mismo archivo desde las dos computadoras al mismo tiempo**. iCloud sincroniza entre sesiones.

GitHub sirve principalmente para publicar el sitio en GitHub Pages. Se hace push cuando hay algo que publicar, no necesariamente después de cada commit.

### PDFs originales de los marcos (NO están en el repo)

Los PDFs están en la carpeta madre, un nivel arriba del repo:

```
~/Documents/Roger/Parallel Entrepreneurship/Roger Independiente/DestruCreacion/Consultoría/Competencias IA - Anáhuac/Benchmark/
```

No se versionan en git. Cuando se necesite leer un PDF para procesar un marco nuevo, acceder por esta ruta.

---

## Estructura del repositorio

```
Benchmark Interactivo/
├── README.md
├── CLAUDE.md                          ← este archivo
├── .gitignore
├── index.html                         ← vista comparativa + grid de marcos
├── styles/
│   ├── main.css                       ← CSS compartido (variables, fonts, layout)
│   └── ficha.css                      ← estilos específicos de fichas individuales
├── marcos/                            ← una página por marco (orden cronológico)
│   ├── digcompedu.html                # 2017 · Redecker · JRC
│   ├── long-magerko.html              # 2020 · CHI
│   ├── digcomp.html                   # 2022/2025 · JRC
│   ├── unesco-cft.html                # 2024 · docentes
│   ├── unesco-cfs.html                # 2024 · estudiantes
│   ├── digital-promise.html           # 2024 · K-12
│   ├── chiu.html                      # 2024 · literacy vs competency
│   ├── ailit.html                     # 2025 · OECD-EC
│   ├── chee.html                      # 2025 · BJET
│   ├── dol.html                       # 2026 · TEN 07-25
│   └── yoon.html                      # 2026 · Corea
├── shared/
│   ├── header.html                    ← snippet HTML del site header
│   └── footer.html                    ← snippet HTML del site footer
├── data/
│   └── marcos.json                    ← metadata estructurada de todos los marcos
└── _archive/
    └── v1.1-monolitico.html           ← HTML monolítico original (referencia)
```

---

## Convenciones de código

### CSS y diseño

- **Fonts (Google Fonts):** Fraunces (display, serif), Inter (body, sans-serif), JetBrains Mono (mono).
- **Paleta:** beige/piedra con acento marrón (`--accent: #5b4733`). **Modo claro fijo** — el modo oscuro automático vía `prefers-color-scheme` se deshabilitó (algunos elementos de color no se distinguían bien contra fondo oscuro); pendiente definir una paleta oscura específica antes de reactivarlo.
- **CSS variables** definidas en `:root`. Nunca hardcodear colores ni medidas que ya tienen variable.
- **Sin frameworks** (no Tailwind, no Bootstrap). CSS puro.
- **Sin build step.** El HTML se sirve tal cual.
- **Mobile-first responsive** con media queries para `max-width: 720px`.

### HTML

- Cada página de marco (`marcos/{slug}.html`) incluye el CSS compartido vía `<link>`.
- Header y footer se duplican en cada página (HTML estático puro). En el futuro se pueden templateizar con 11ty o Astro, pero por ahora HTML puro funciona y es transparente.
- Idioma: `<html lang="es">`. Todo el contenido en español.

### Estructura de cada ficha individual (`marcos/{slug}.html`)

```
<head> con links a styles/main.css y styles/ficha.css
site-header (compartido)
breadcrumb "← Benchmark"
ficha-header: eyebrow + h2 + cita
meta-grid: 6 celdas de metadatos
secciones del marco (posicionamiento, estructura, aportes, limitaciones)
callout "Nota para el marco mexicano"
link-row con DOI
site-footer (compartido)
```

### Navegación entre fichas

- Cada tarjeta del grid en `index.html` es un `<a href="marcos/{slug}.html">`.
- Cada ficha tiene breadcrumb `← Volver al benchmark` al inicio.
- Cada ficha tiene botones `← anterior` y `siguiente →` en orden cronológico.

### `data/marcos.json`

Fuente única de verdad para metadatos. Cuando se agrega un marco nuevo, **actualizar `marcos.json` primero**, luego propagar a `index.html` y crear `marcos/{slug}.html`.

---

## Patrones de trabajo

### Agregar un nuevo marco

1. **Leer el PDF o TXT.** Roger lo ubica en la carpeta de PDFs (ruta arriba) o lo comparte directamente. Para evitar cuota de imágenes, Roger convierte PDFs a TXT con `pdf2md.morethan.io` o `marker-pdf`.
2. **Captura analítica antes de codear.** Presentar a Roger:
   - Metadatos (autores, año, DOI, licencia, institución).
   - Posicionamiento estratégico en el benchmark.
   - Estructura completa (áreas, competencias, niveles).
   - Aportes distintivos.
   - Limitaciones.
   - Implicaciones para el marco mexicano.
3. **Roger valida o ajusta.** No proceder a código sin confirmación.
4. **Actualizar `data/marcos.json`** con la entrada del nuevo marco.
5. **Crear `marcos/{slug}.html`** siguiendo la estructura estándar.
6. **Actualizar `index.html`:**
   - Grid de tarjetas (posición cronológica correcta).
   - Tabla comparativa (nueva columna).
   - Mapa de competencias (nueva columna).
   - Mapa de progresión (nueva tarjeta).
   - Convergencias y divergencias.
   - Linaje conceptual si aplica.
7. **Commit.**

### Editar una ficha existente

- Modificar solo `marcos/{slug}.html`.
- Si el cambio afecta la vista comparativa, también actualizar `index.html` y `data/marcos.json`.

### Commits

Mensajes claros y consistentes:

```
Add marco {slug} ({year})
Fix {descripción corta}
Update comparison — {qué cambió}
Refactor styles — {qué cambió}
```

---

## Reglas de trabajo (heredadas del proyecto)

1. **No inventar requisitos de la convocatoria FIMPES.** Solo los que se puedan verificar textualmente en el documento oficial.
2. **Pushback honesto, no complacencia.** Roger pide crítica directa.
3. **Verificar citas antes de incluirlas.** No añadir referencias sin confirmar autor, año y DOI.
4. **Roger toma las decisiones sustantivas.** Claude Code propone y ejecuta; Roger decide.
5. **Conversaciones en español.**
6. **Verificar autoría antes de procesar archivos.** Confirmar con Roger quién es el primer autor antes de comenzar una captura analítica.

---

## Comandos comunes

### Preview local

```bash
python3 -m http.server 8000
# Abrir http://localhost:8000
```

### Git workflow

Roger trabaja desde iCloud, que sincroniza automáticamente entre sus dos computadoras. No hace `git pull` explícito entre sesiones — iCloud se encarga de eso.

**Commit frecuente** al terminar una tarea definida:

```bash
git add .
git commit -m "Mensaje claro"
```

**Push a GitHub** cuando hay algo listo para publicar:

```bash
git push origin main
```

### Deploy a GitHub Pages

Configuración inicial (una sola vez):
1. GitHub → repo → Settings → Pages.
2. Source: Deploy from branch → `main` → `/ (root)`.
3. URL resultante: `https://{usuario}.github.io/{repo}/`.

Después de eso, cada `git push` a `main` hace redeploy automático.

---

## Decisiones técnicas tomadas

- **HTML estático puro, sin generador.** Simplicidad, transparencia, sin build step, funciona directo en GitHub Pages. Migrar a 11ty o Astro si el proyecto crece considerablemente.
- **Una página por marco.** URLs compartibles, mejor performance, más fácil de mantener e iterar.
- **Git en iCloud.** No es la configuración ideal pero funciona si no se edita el mismo archivo simultáneamente desde las dos computadoras. iCloud sincroniza entre sesiones.
- **GitHub para publicar.** Push cuando hay algo listo para publicar en GitHub Pages.
- **PDFs fuera del repo.** Binarios pesados que no se publican.

---

## Estado del benchmark

11 marcos, orden cronológico:

| # | Slug | Año | Autores | Categoría |
|---|------|-----|---------|-----------|
| 1 | digcompedu | 2017 | Redecker | Institucional europeo |
| 2 | long-magerko | 2020 | Long & Magerko | Académico fundacional |
| 3 | digcomp | 2022/2025 | Vuorikari et al. / Cosgrove & Cachia | Institucional europeo |
| 4 | unesco-cft | 2024 | Miao & Cukurova | Institucional UNESCO |
| 5 | unesco-cfs | 2024 | Miao & Cukurova | Institucional UNESCO |
| 6 | digital-promise | 2024 | Mills, Ruiz et al. | Institucional K-12 |
| 7 | chiu | 2024 | Chiu, Ahmad, Ismailov & Sanusi | Académico |
| 8 | ailit | 2025 | OECD-EC | Institucional OCDE |
| 9 | chee | 2025 | Chee, Ahn & Lee | Académico |
| 10 | dol | 2026 | U.S. DOL | Institucional política |
| 11 | yoon | 2026 | Yoon, Ryu, Kim & Kim | Académico-aplicado |

**Dos linajes identificados:**
- AI literacy/competency académico: Long & Magerko → Chiu → Yoon.
- Digital competence europeo: DigComp → DigCompEdu → SELFIE for Teachers → Yoon.
- Yoon (2026) es el punto de convergencia entre ambos.

---

## Pendientes activos

- [ ] Migrar de HTML monolítico a estructura de una página por marco.
- [ ] Configurar GitHub Pages.
- [ ] Incorporar marcos adicionales que compartirá Roger.
- [ ] Considerar buscador/filtros en el grid de marcos.
