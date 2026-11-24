# Plan Maestro — Hotel Bellavista 2.0 (Demo Web de Villas en Monte Pego, Costa Blanca)

> **Carpeta del proyecto:** `Hotel Bellavista2.0/`  
> **Web de referencia funcional analizada:** `https://www.bellavistaresidential.com/es/index.html`  
> **Ubicación real:** Monte Pego · Calle las Rosas S/N, 03780 Pego, Alicante (Costa Blanca)  
> **Sistema de diseño base generado:** [`design-system/hotel-bellavista-2-0/MASTER.md`](design-system/hotel-bellavista-2-0/MASTER.md)  
> **Estado:** Demo construida y lista para evolucionar con referencias visuales adicionales.

---

## 1. Diagnóstico de la Web Actual (`bellavistaresidential.com`)

Tras inspeccionar visual y funcionalmente todas las páginas de la web actual, estas son las conclusiones clave que guían el rediseño **2.0**:

> **Nota geográfica importante:** La web actual de *Bellavista Residencial* corresponde realmente a un complejo de apartamentos turísticos en **Monte Pego (Alicante, Costa Blanca, España)** construido sobre una plantilla antigua de **SiteMinder Canvas**. En **Hotel Bellavista 2.0** conservamos el **100% de su arquitectura funcional y sus módulos de negocio**, pero los transformamos y elevamos a una experiencia de **hotel boutique de alquiler de villas blancas de inspiración griega/cicládica en la costa mediterránea de Montenegro** (entorno Bahía de Kotor / Península de Luštica / Riviera de Budva).

### Qué conservamos e integramos (Inventario Funcional Completo)
- **8 tipologías de alojamiento** escalonadas por categoría, superficie, terraza, capacidad y equipamiento.
- **Motor de reservas** (fechas de llegada/salida, número de huéspedes, códigos promocionales y flujo de disponibilidad).
- **4 pilares de servicios** visibles (Restaurante, Pool Bar, Gimnasio, Piscina) + **servicios premium ocultos** en la web actual (piscina interior climatizada de temporada, sauna, baño turco, minigolf, ping-pong, parque infantil, parking privado y política *pet-friendly*).
- **9 categorías de actividades y entorno** (ciclismo, senderismo, avistamiento de aves, deportes de montaña/agua, playas y calas, ocio familiar, motor/náutica y parques naturales).
- **Galería fotográfica con filtros** en 3 colecciones + visor modal (*lightbox*).
- **Sección de Promociones**, **Cómo Llegar** (aeropuertos y rutas), **Sobre Nosotros**, **Mapa interactivo**, **Formulario de Contacto** y **Bloque Legal** (Cookies, Privacidad, Aviso Legal).
- **Multidioma en 4 idiomas:** Español (`ES`), Inglés (`EN`), Francés (`FR`) y Alemán (`DE`).

### Fallos de UX/UI de la web actual que corregimos en 2.0
1. **Contenido roto o sin terminar:** Eliminamos el placeholder sin editar `[Replace with a quote about your property]` del encabezado, la página vacía de `Promociones`, el `Blog` con códigos caducados de 2017 y las erratas (`Avistamieto`, `pintball`).
2. **Inconsistencia de marca:** Unificamos el nombre del hotel (**Hotel Bellavista**) y resolvemos los 3 nombres contradictorios del restaurante actual (*Asador Bellavista*, *L'Imprevéu*, *La Bohême*).
3. **Primera impresión débil:** Sustituimos el recuadro oscuro de YouTube y el fondo blanco plano de plantilla por un **Hero editorial a pantalla completa** con arquitectura blanca mediterránea, luz adriática y barra de reserva integrada.
4. **Descubrimiento de villas limitado:** La home actual solo enseña 1 tipo de alojamiento (*2 Dormitorios Estándar*) sin precios ni comparativa. En 2.0 mostraremos toda la colección con filtros rápidos, atributos clave y tarifa orientativa.
5. **Navegación confusa:** Eliminamos el menú hamburguesa redundante en escritorio (que esconde 8 enlaces) y retiramos elementos obsoletos como el número de fax.

---

## 2. Identidad Visual y Sistema de Diseño ("Mediterráneo Cicládico-Adriático")

Refinando la base de **UI/UX Pro Max** con principios de diseño editorial (**Frontend Design**), definimos una dirección visual propia para **casas blancas estilo griego frente al mar en Montenegro**, evitando clichés genéricos de plantillas SaaS o tonos terracota repetitivos:

### Paleta de Color (Tokens Semánticos — Contraste WCAG AA/AAA)
| Rol | Nombre | Hex | Uso principal |
|---|---|---|---|
| **Canvas Principal** | Cal Encalada (*Cycladic Lime*) | `#FDFCFA` | Fondo principal luminoso y cálido, evocando fachadas blancas al sol |
| **Superficie Secundaria** | Piedra Caliza (*Adriatic Limestone*) | `#F2EFE9` | Bandas editoriales alternas, tarjetas de especificaciones y fondo de filtros |
| **Primario de Marca** | Cobalto Adriático (*Kotor Cobalt*) | `#163A5F` | Encabezados clave, botones secundarios, iconos arquitectónicos y barra de reserva |
| **Secundario Costero** | Azul Egeo (*Aegean Sea*) | `#2E6F95` | Estados hover, acentos de agua/piscina y enlaces activos |
| **Acento / CTA Principal** | Latón de Olivo (*Sun-Bleached Brass*) | `#9E7B4F` | CTA principal `Reservar`, etiquetas de categoría *Deluxe* y detalles sutiles |
| **Texto Principal** | Pizarra Marina (*Slate Ink*) | `#1B2430` | Cuerpo de texto y títulos sobre claro (contraste > 12:1 sobre `#FDFCFA`) |

### Tipografía
- **Títulos y Display Editorial:** `Cormorant Garamond` (Regular 400 / Medium 500 / SemiBold 600, en *sentence case*, nunca todo mayúsculas) — aporta elegancia arquitectónica mediterránea.
- **Cuerpo de Texto e Interfaz (UI):** `Plus Jakarta Sans` (400 / 500 / 600) — máxima legibilidad en fichas técnicas de villas, selector de fechas, filtros y navegación (base `16px`, `line-height: 1.6`).

### Principios Visuales y Espaciado
- **Densidad Espaciosa (`Density 3/10`):** Márgenes amplios (`64px–96px` entre secciones) para transmitir calma y exclusividad.
- **Un momento protagonista:** La **Barra de Reservas Flotante** + **Explorador Interactivo de Villas** concentran la atención; el resto de la interfaz se mantiene sereno y limpio.
- **Cero decoración gratuita:** Sin etiquetas en mayúsculas repetitivas encima de cada título, sin numeración falsa (`01 / 02 / 03`) en bloques que no son secuenciales, sin emojis como iconos (solo iconos SVG finos de `Lucide`), y respeto estricto a `prefers-reduced-motion`.

### Zonas Preparadas para el "Mix" con tus Futuros Diseños
La arquitectura modular permite intercambiar o fusionar fácilmente las referencias visuales que compartas después en cualquiera de estos 5 bloques sin romper el sistema:
1. **Variante de Hero** (editorial asimétrico, full-bleed cinematográfico o split arquitectónico).
2. **Estilo de Tarjetas de Villa** (bento editorial, carrusel horizontal o ficha detallada con plano/galería).
3. **Dock de Reserva** (barra flotante inferior, barra integrada en hero o drawer lateral).
4. **Mosaico de Galería** (masonry asimétrico estilo revista o cuadrícula limpia con zoom).
5. **Presentación de Experiencias** (tarjetas horizontales con mapa interactivo o tabs visuales).

---

## 3. Arquitectura de la Información y Mapa del Sitio

### Navegación Superior (Limpia, sin hamburguesa en escritorio)
- **Izquierda:** Logotipo tipográfico `BELLAVISTA` (*Montenegro Villas*).
- **Centro (5 enlaces directos):** `Villas` · `Servicios & Spa` · `Experiencias` · `Galería` · `Ubicación`
- **Derecha (Utilidades):** Selector de idioma (`ES | EN | FR | DE`), acceso rápido a `Promociones` y botón CTA `Reservar`.
- **Móvil (`< 768px`):** Header compacto + menú drawer a pantalla completa + botón fijo inferior `Comprobar disponibilidad`.

### Estructura de la Homepage (Wireframe de Flujo)
```text
+-------------------------------------------------------------------------+
| [BELLAVISTA]    Villas · Servicios · Experiencias · Galería · Ubicación |
|                                                [ES ▾]  [Reservar Villa] |
+-------------------------------------------------------------------------+
|                                                                         |
|              HERO EDITORIAL FULL-BLEED (Villas Blancas & Mar)           |
|         "Arquitectura blanca frente al azul sereno de Montenegro"       |
|         Subtítulo breve · [Explorar Villas]  [Ver Vídeo del Resort]     |
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   |  Llegada [dd/mm] | Salida [dd/mm] | Huéspedes [2 ▾] | [Buscar]  |   |
|   +-----------------------------------------------------------------+   |
+-------------------------------------------------------------------------+
|  01. ESENCIA BELLAVISTA (Split Asimétrico 55/45)                        |
|  Texto editorial breve + 4 cifras reales (8 estilos de villa, 10 min    |
|  de calas privadas, Spa & Piscina Infinita, 4 idiomas) + Foto vertical  |
+-------------------------------------------------------------------------+
|  02. COLECCIÓN DE VILLAS (Interactivo con Filtros)                      |
|  Filtros: [Todas] [1-2 Dorm.] [3 Dorm.] [Vista Mar] [Acceso Spa]        |
|  Tarjetas editoriales con foto, m², terraza, huéspedes, A/C, precio     |
|  orientativo/noche y CTA [Ver detalles] / [Reservar] (abre modal)       |
+-------------------------------------------------------------------------+
|  03. BIENESTAR, GASTRONOMÍA Y SERVICIOS (Tabs Visuales)                 |
|  [Piscina Infinita] [Spa & Baño Turco] [Restaurante & Bar] [Gimnasio]   |
|  Visibiliza las joyas ocultas de la web original en un bloque premium   |
+-------------------------------------------------------------------------+
|  04. PROMOCIONES DE TEMPORADA (Sustituye la página vacía original)      |
|  3 ofertas activas con código aplicable en 1 clic en la demo            |
|  (Estancia Larga -15%, Escapada Romántica, Reserva Anticipada)          |
+-------------------------------------------------------------------------+
|  05. EXPERIENCIAS EN MONTENEGRO (Adaptación de las 9 categorías)        |
|  Selector visual por interés: Mar y Calas · Senderismo Lovćen ·         |
|  Ciclismo Costero · Avistamiento de Aves (Skadar) · Bahía de Kotor      |
+-------------------------------------------------------------------------+
|  06. GALERÍA EDITORIAL FILTRABLE + LIGHTBOX                             |
|  Tabs: [Villas y Arquitectura] [Entorno Adriático] [Experiencias]       |
+-------------------------------------------------------------------------+
|  07. UBICACIÓN, CÓMO LLEGAR Y CONTACTO                                  |
|  Mapa interactivo + Distancias (Aeropuerto Tivat 25 min / Podgorica     |
|  65 min / Kotor 20 min) + Formulario de contacto + WhatsApp Concierge   |
+-------------------------------------------------------------------------+
|  FOOTER (3 columnas limpias + Idiomas + Cookies/Privacidad/Aviso Legal) |
+-------------------------------------------------------------------------+
```

---

## 4. Mapeo Completo de Funcionalidades (Web Original → Bellavista 2.0)

### A. Catálogo de 8 Villas (Evolución de las 8 tipologías actuales)
Cada villa tendrá una **ficha modal / vista de detalle completa** con galería, plano de distribución, listado de equipamiento, servicios incluidos y botón de pre-reserva:

| # | Referencia Original | Nombre en Bellavista 2.0 (Montenegro) | Sup. + Terraza | Cap. | Atributos Destacados |
|---|---|---|---|---|---|
| 1 | 2 Dormitorios Estándar | **Villa Calma 2D** | 65 m² + 18 m² | 4 | Estilo cicládico blanco, cocina equipada, jardín mediterráneo |
| 2 | 2 Dormitorios Vista Mar | **Villa Horizonte 2D** | 65 m² + 18 m² | 4 | Terraza orientada al Adriático, ventilación cruzada, vistas abiertas |
| 3 | 3 Dormitorios Garden | **Villa Olivo Garden 3D** | 85 m² + 28 m² | 6 | Planta baja con acceso directo a jardín privado y parking, 2 baños |
| 4 | 3 Dormitorios Vista Mar Ático | **Villa Mirador Penthouse 3D** | 105 m² + 30 m² | 6 | Planta alta panorámica, cocina completa con lavavajillas, A/C |
| 5 | 1 Dormitorio Superior Vista Mar | **Villa Egeo Superior 1D** | 62 m² + 17 m² | 2 | Ideal parejas, interiorismo renovado blanco/piedra, A/C, caja fuerte |
| 6 | 2 Dormitorios Superior Vista Mar | **Villa Brisa Superior 2D** | 68 m² + 20 m² | 4 | Diseño minimalista costero, terraza solárium, A/C, lavavajillas |
| 7 | 2 Dormitorios Deluxe Vista Mar | **Villa Kotor Deluxe 2D** | 97 m² + 25 m² | 4 | Jacuzzi/Spa en baño, vistas a piscina infinita y mar, acceso Spa/Sauna |
| 8 | 3 Dormitorios Deluxe Vista Mar | **Grand Villa Bellavista 3D** | 120 m² + 46 m² | 6 | Terraza panorámica XXL, ascensor, Jacuzzi, acceso total Spa & ocio |

### B. Motor de Reservas Demo Interactivo
- **Widget sticky / hero:** Selección de `Llegada`, `Salida`, `Adultos/Niños` y campo opcional de `Código promocional`.
- **Simulador funcional en la demo:** Calcula noches, filtra villas disponibles según capacidad, aplica descuentos de promociones activas y muestra un **resumen de reserva paso a paso** (con opción arquitectónica de redirigir al motor real *SiteMinder / TheBookingButton* en producción).

### C. Servicios & Wellness (4 + 1 pilares unificados)
1. **Piscina Infinita Exterior:** Solárium con camas balinesas, sombrillas y vistas al mar.
2. **Wellness & Spa (Puesta en valor):** Piscina interior climatizada de temporada, sauna finlandesa y baño turco.
3. **Bellavista Kitchen & Pool Bar:** Restaurante mediterráneo unificado (desayunos en terraza, pescados del Adriático, cócteles al atardecer).
4. **Fitness & Ocio Activo:** Gimnasio equipado, zona de bicicletas, ping-pong, minigolf y área infantil.
5. **Servicios de Concierge:** Traslados privados desde aeropuertos, alquiler de embarcaciones, admisión de mascotas bajo petición y recepción multilingüe.

### D. Experiencias en Montenegro (Las 9 categorías originales adaptadas)
1. **Playas y Calas del Adriático** (calas de piedra blanca y aguas turquesas a 10 min).
2. **Bahía de Kotor y Perast** (patrimonio UNESCO y travesías en barco).
3. **Rutas sobre Ruedas (Ciclismo)** (carreteras escénicas costeras + taller/alquiler de bicis).
4. **Senderismo en Parque Nacional Lovćen** (miradores panorámicos sobre la bahía).
5. **Avistamiento de Aves en Lago Skadar** (rutas guiadas de baja dificultad).
6. **Aventura de Montaña y Mar** (kayak, paddle surf, barranquismo y MTB).
7. **Parques Naturales y Reservas Marinas** (península de Luštica y Cueva Azul).
8. **Ocio en Familia** (excursiones en catamarán y parques acuáticos cercanos).
9. **Deportes Náuticos y Circuito Costero** (charter privado y actividades de motor).

### E. Multidioma, Galería, Ubicación y Contacto
- **i18n integrado (`ES`, `EN`, `FR`, `DE`):** Cambio instantáneo en la demo sin recargar la página mediante diccionario estructurado.
- **Galería en 3 colecciones:** Filtros instantáneos + visor modal navegable con teclado (`←`, `→`, `Esc`).
- **Cómo Llegar:** Mapa interactivo + tarjetas de distancia a **Aeropuerto de Tivat (TIV)**, **Aeropuerto de Podgorica (TGD)** y **Dubrovnik (DBV)**.
- **Contacto:** Formulario con validación inline accesible + botón flotante de **WhatsApp Concierge** + enlaces legales (`Cookies`, `Privacidad`, `Aviso Legal`).

---

## 5. Arquitectura Técnica y Hoja de Ruta de Construcción

### Stack Recomendado para la Demo
- **Frontend:** HTML5 semántico + CSS moderno con variables del sistema de diseño (`tokens.css`) + JavaScript modular (o **Vite + React + TypeScript** si prefieres escalarlo a proyecto completo; por defecto para una demo ultra-rápida y fácil de abrir en cualquier navegador, **Vite + React + Tailwind/CSS Tokens** o **HTML/CSS/JS modular sin fricción**).
- **Activos visuales:** Fotografía de alta resolución en formato WebP con *lazy loading*, relación de aspecto fija (CLS < 0.1) e iconografía SVG consistente (`Lucide`).
- **Calidad y Accesibilidad:** Responsive completo (`375px`, `768px`, `1024px`, `1440px`), foco visible por teclado, contraste ≥ 4.5:1 y animaciones suaves respetando `prefers-reduced-motion`.

### Estructura de Carpetas Propuesta dentro de `Hotel Bellavista2.0/`
```text
Hotel Bellavista2.0/
├── PLAN_HOTEL_BELLAVISTA_2.0.md       # Este plan maestro
├── design-system/
│   └── hotel-bellavista-2-0/
│       ├── MASTER.md                  # Reglas base generadas con UI/UX Pro Max
│       ├── tokens.css                 # Variables CSS del sistema de diseño
│       └── tokens.json                # Tokens W3C DTCG
├── references/                        # Carpeta lista para guardar los diseños extra que envíes
└── src/                               # Código fuente de la demo (Fases 2-4)
    ├── data/                          # villas.json, experiences.json, i18n (es/en/fr/de)
    ├── styles/                        # tokens mediterráneos, layout, componentes
    ├── components/                    # Navbar, Hero, BookingDock, VillaModal, Lightbox, etc.
    └── index.html
```

### Fases de Ejecución
1. **Fase 1 — Mix Visual (Siguiente paso cuando envíes tus referencias):** Analizar los diseños adicionales que compartas, fusionar sus mejores patrones con este plan y cerrar el `MASTER.md` definitivo.
2. **Fase 2 — Estructura y Estética Core:** Construir la arquitectura visual (Hero mediterráneo, paleta cal/cobalto/latón, tipografía, navegación y secciones editoriales).
3. **Fase 3 — Funcionalidad Completa 2.0:** Implementar el catálogo interactivo de las 8 villas con filtros y modal, simulador de reservas con códigos promocionales, tabs de servicios/experiencias, galería lightbox, mapa y selector multidioma (`ES/EN/FR/DE`).
4. **Fase 4 — Revisión Visual y Pulido:** Verificación en navegador (desktop y móvil), accesibilidad, animaciones sutiles y entrega de la demo lista para presentar.
