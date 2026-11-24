# Web Demos: cómo añadir una demo

Este repo es una **galería de inspiración**: reúne las demos web que diseña el equipo para consultarlas y sacar ideas. La portada (`index.html`) muestra una previsualización de todas.

**El diseño es libre.** Cada persona hace el suyo y puede ser totalmente distinto al de otra. No hay plantilla, guía de estilo ni stack obligatorio: cada demo decide sus fuentes, colores, estructura y tecnología. Lo único común son las convenciones de abajo, que solo sirven para que la galería encuentre y muestre las demos.

## Convenciones (lo único obligatorio)

Cada demo vive en su propia carpeta, autocontenida:

```
demos/AAAA-MM-nombre/
├── index.html      # punto de entrada; ábrelo directamente en el navegador
├── demo.json       # metadatos para la galería
├── preview.png     # captura de la home, 1440×900
└── …               # el resto (css, js, assets…) como quiera quien la haga
```

- Carpeta: `AAAA-MM-nombre`, minúsculas y guiones (`2026-11-bellavista`). Usa el mes actual.
- **Autocontenida:** no depende de otras carpetas del repo ni de un build. Debe verse abriendo `index.html`. Si se usa un framework, subir ya compilado como estático.
- **Rutas relativas** (`css/styles.css`), nunca con `/` inicial: GitHub Pages sirve desde un subdirectorio.
- No tocar otras carpetas de `demos/` que no sean la tuya.
- Sin `node_modules`, builds temporales ni secretos. Imágenes optimizadas (idealmente < 300 KB cada una).
- Los formularios no envían nada a ningún sitio.

### `demo.json`

```json
{
  "titulo": "Bellavista Residencial",
  "autor": "Josep",
  "fecha": "2026-11",
  "sector": "Turismo",
  "descripcion": "Una frase sobre qué es y qué estilo tiene."
}
```

`autor` y `sector` alimentan los filtros de la portada. Autores del equipo, escritos exactamente así: **Josep**, **Nando**, **Pau**. Para `sector`, reutiliza los valores que ya existan en otras demos para no duplicar variantes («Turismo» y «turismo»). Si el usuario no dice quién es, pregúntalo antes de escribir `demo.json`.

### `preview.png`

Captura de la home a 1440×900. Con Chrome instalado:

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --hide-scrollbars --window-size=1440,900 --virtual-time-budget=4000 --screenshot="$PWD\demos\AAAA-MM-nombre\preview.png" "file:///$($PWD -replace '\\','/')/demos/AAAA-MM-nombre/index.html"
```

Si la home tiene animaciones de entrada, comprueba que la captura no salga a medias.

## Al terminar una demo

1. Comprueba que `index.html` se ve bien abriéndolo directamente, sin errores en consola ni enlaces rotos.
2. Crea `demo.json` y `preview.png`.
3. Ejecuta `./scripts/actualizar-galeria.ps1`: regenera `galeria/demos.js`, que es lo que pinta la portada. Avisa si falta algún `demo.json` o `preview.png`.
4. No hagas commit ni push salvo que el usuario lo pida.

`galeria/demos.js` es un archivo **generado**: no se edita a mano. Si hay conflicto al fusionar ramas, resuélvelo ejecutando el script de nuevo.

## Qué no tocar sin que lo pidan

- `index.html` de la raíz y la carpeta `galeria/` (la portada). Solo se cambian si el usuario quiere modificar la galería.
