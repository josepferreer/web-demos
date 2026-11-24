# Web Demos

Galería de las demos web que diseña el equipo (Josep, Nando y Pau), para ver y sacar ideas. Cada persona hace su diseño: no hay plantilla ni estilo común.

La portada (`index.html`) muestra una previsualización de todas las demos, con filtros por autor y sector. Al pulsar una, se abre la demo.

## Estructura

```
web-demos/
├── index.html          # portada: galería de previsualizaciones
├── galeria/            # estilos, script y datos de la portada (demos.js es generado)
├── scripts/
│   └── actualizar-galeria.ps1
├── CLAUDE.md           # instrucciones para la IA (AGENTS.md apunta aquí)
└── demos/
    └── AAAA-MM-nombre/
        ├── index.html
        ├── demo.json
        ├── preview.png
        └── …            # lo que cada diseño necesite
```

## Ver la galería

Abre `index.html` en el navegador. No necesita servidor ni instalar nada.

## Añadir una demo

1. Crea `demos/AAAA-MM-nombre/` con tu diseño (`index.html` como entrada, rutas relativas, autocontenido).
2. Añade `demo.json` (título, autor, fecha, sector, descripción) y `preview.png` (home a 1440×900). El formato y el comando para la captura están en [`CLAUDE.md`](CLAUDE.md).
3. Ejecuta:

   ```powershell
   ./scripts/actualizar-galeria.ps1
   ```

4. Haz commit y push.

Con IA basta con pedirlo desde la raíz del repo («añade esta web como demo»): leerá `CLAUDE.md` y seguirá estos pasos.

## Publicar en GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `/ (root)`. La galería queda en `https://<usuario>.github.io/<repo>/` y cada demo en `…/demos/<carpeta>/`.
