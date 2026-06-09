# Marco IA 2030 · Benchmark Interactivo

Sitio web estático que presenta un benchmark de once marcos internacionales de competencias en inteligencia artificial, analizados para informar el diseño del **Marco Mexicano de Competencias en IA para Educación Superior**.

> Proyecto ganador de la **Beca FIMPES-Santander Universidades 2026**. Alianza entre la Universidad Anáhuac México (IES líder) y la UNAM, Facultad de Química.

## Marcos analizados

1. **DigCompEdu** (Redecker, 2017) — JRC · CE · educadores
2. **Long & Magerko** (2020) — CHI · definición seminal AI literacy
3. **DigComp 2.2 / 3.0** (Vuorikari et al., 2022; Cosgrove & Cachia, 2025) — JRC · 5 ediciones
4. **UNESCO AI CFT** (Miao & Cukurova, 2024) — docentes
5. **UNESCO AI CFS** (Miao & Cukurova, 2024) — estudiantes
6. **Digital Promise** (Mills, Ruiz et al., 2024) — K-12 · Core Values
7. **Chiu, Ahmad, Ismailov & Sanusi** (2024) — literacy vs competency
8. **AILit Framework** (OECD-EC, 2025) — base PISA 2029
9. **Chee, Ahn & Lee** (2025) — revisión sistemática PRISMA · BJET
10. **US DOL AI Literacy Framework** (2026) — TEN 07-25
11. **Yoon, Ryu, Kim & Kim** (2026) — etapas de carrera docente · Corea

## Desarrollo

```bash
# Preview local
python3 -m http.server 8000
# Abrir http://localhost:8000
```

## Estructura

- `index.html` — vista comparativa y grid de marcos.
- `marcos/` — ficha individual de cada marco.
- `styles/` — CSS compartido.
- `data/marcos.json` — metadata estructurada.

## Licencia

Contenido bajo CC-BY 4.0. Código bajo MIT.

---

Equipo: **Roger Canales** (UNAM, coinvestigador) · **Dr. Alejandro Pisanty** (UNAM FQ) · **Dr. Carlos Amador Bedolla** (Director FQ UNAM) · equipo Universidad Anáhuac México.
