# DECISIONES — portafolio nuevo

Registro de lo que César ha decidido en la entrevista. **Resumen aprobado por César el 2026-10-07.** Se construye por partes.
Lo marcado como **pendiente** todavía no está decidido.

## Contexto fijo (dado por César)

- Dos públicos: dueños de negocios sin conocimientos técnicos (principal) y reclutadores o clientes técnicos.
- Se abre casi siempre desde el teléfono, desde la bio de Instagram o un mensaje de WhatsApp.
- Cero costo, internet lento e intermitente, mobile-first.
- No se borra el repo `miportfolio` ni su historial.
- Todo texto visible lo aprueba César. No se inventan datos, testimonios ni números.

## Ronda 1 — Técnico (2026-10-07)

| Tema | Decisión |
|---|---|
| Stack | **Astro** (genera HTML estático, sin JavaScript por defecto, optimiza imágenes) |
| Hosting | **Vercel**, conectado al mismo repo `miportfolio`. Nombre exacto de la URL: pendiente |
| Añadir proyectos | **Un archivo de datos**: se copia un bloque y se pone la captura en una carpeta |
| Idioma | **Solo español** |
| Cómo se reemplaza lo actual | Propuesta de Claude, sin objeción: rama nueva `v2` con el contenido actual borrado; el sitio viejo sigue en línea hasta aprobar el nuevo. **Se confirma en el resumen final** |

## Ronda 2 — Identidad visual (2026-10-07)

| Tema | Decisión |
|---|---|
| Referencia | https://ishandutta2007.github.io (un seguidor de César). **No es por el estilo**: sirve de referencia por lo directo — saludo, presentación corta y proyectos con botones Código / Demo, en 15 KB |
| Sensación | «Un toque optimizado y diferente». **Nada que tenga que ver con lo cubano** |
| Tema | **Automático según el teléfono** (claro/oscuro solo con CSS, sin botón) |
| Foto | **Retrato junto a la presentación**, en la primera pantalla. Falta que César indique qué foto |
| Foto (archivo) | César la pasa después. Se construye con un hueco marcado |
| Animaciones | **Más elaboradas, con librería de animación** (tipo GSAP). César lo eligió sabiendo que suma 30–70 KB de JavaScript. Qué librería y qué se anima exactamente: pendiente |
| Dirección visual | **B · Musgo** (elegida viendo `diseno/opciones-visuales.html`): formas redondas, botones en píldora, la foto en una forma redondeada |
| Colores (claro) | fondo `#F1F5EC`, texto `#12251C`, texto suave `#4C6257`, verde `#0B6B4D`, panel `#DDE8D6`, naranja `#FF8A1F` (solo en lo que se toca) |
| Colores (oscuro) | fondo `#0D1E17`, texto `#E6F0E8`, texto suave `#9DB8AA`, verde `#62D6A6`, panel `#173227`, naranja `#FF9D45` |
| Tipografía | **Gabarito**, una sola familia, alojada en el propio sitio (~34 KB) |

## Ronda 3 — Estructura y contenido (2026-10-07)

| Tema | Decisión |
|---|---|
| Secciones y orden | **Portada → Proyectos → Qué puedo construir → Cómo trabajo (pagos, mantenimiento) → Habilidades → Contacto**. Nombres provisionales; los títulos reales están pendientes |
| Tarjeta de proyecto | Nombre, descripción, botones de enlace, **captura de pantalla, estado, tecnologías y tipo de proyecto** (cliente real / proyecto propio) |
| Destacado y filtros | **Empire Signal destacado** (primero y más grande). **Sin filtros** |
| Precios | **No se muestran.** Se invita a pedir presupuesto gratis |
| Qué puedo construir | Páginas web y landing · Reservas y citas · Inventario, ventas y caja · Apps web completas · **y «lo que el cliente desee»** (trabajo a medida). Textos: pendientes |
| Formas de pago | Efectivo, transferencia, moneda extranjera y pago por partes (anticipo al empezar, resto al entregar). **Se escriben en general**: sin nombres de plataformas, monedas ni porcentajes |
| Extras del servicio | Mantenimiento, puesta en línea y apps que funcionan sin internet. **No** se ofrece «enseñar a usarla» (no marcado) |
| Mantenimiento | **Se acuerda en cada proyecto**; la página no promete plazos ni condiciones |
| Canales de contacto | **WhatsApp** (botón principal), **Instagram**, **correo** y **GitHub** |
| Mensaje de WhatsApp | **«Hola César, vi tu portafolio y quiero hablar de un proyecto para mi negocio.»** (aprobado) |
| Mención de IA | **Sí, breve y transparente**: una línea honesta (la usa para ir más rápido; revisa y entiende cada parte). Texto: pendiente |

## Ronda 4 — Proyectos (2026-10-07)

Los 5 proyectos del portafolio: **Empire Signal** (destacado), **Entrenador de ajedrez**, **Charcutería**, **Area 51 Tattoo** y **Piano (Pididacta)**.

| Tema | Decisión |
|---|---|
| Gelen Nails | **Fuera.** Lo sustituye **Area 51 Tattoo** (cliente real, en línea en area51-tattoo.vercel.app, repo ya público) |
| Charcutería | **Se enseña la app original** (cambiado por César al aprobar el resumen: dejó ese trabajo y la app es completamente suya). Se publica en Vercel tal cual. Pendiente: nombre con el que se presenta y si sus etiquetas de estado/tipo siguen siendo ciertas |
| Ajedrez y Piano | **Cada uno en su propio sitio de Vercel**, enlazado desde el portafolio. El piano necesita antes un repo en GitHub |
| Código público | César quiere enseñar el código de **los cinco**: Empire Signal, ajedrez, charcutería, piano y area51_tattoo (este ya es público). **Antes de abrir cada repo se revisa el historial** en busca de claves y datos privados. Hacerlos públicos lo hace César en GitHub |
| Capturas | **Las genera Claude en tamaño teléfono**: una imagen fija por proyecto, con datos de ejemplo, comprimida. César las revisa |
| Demos viejos | Los 4 demos ficticios (gimnasio, legal, restaurante, tienda) **se eliminan**. Quedan en el historial de git |
| Etiquetas de estado | **En línea / En uso en un negocio / En desarrollo**. Reparto: Empire Signal y Area 51 «En línea»; charcutería «En uso en un negocio»; ajedrez «En línea» cuando se publique; piano «En desarrollo» |
| URL | **cesarhernandez.vercel.app** (si está libre; alternativa a decidir si no) |

Hallazgos de la exploración:

- **Empire Signal**: `~/proyectos/empire/empire-signal`, en línea en empire-signal.vercel.app. Repo no público. Hay `output/demo.mp4` para capturas.
- **Entrenador de ajedrez**: `~/proyectos/chess` (repo `chess_coach`, no público). Estático y PWA, sin publicar. Motor ~7 MB.
- **Charcutería**: `~/proyectos/charcuteria`. JavaScript sin framework (no React) y ya usa `localStorage`. Publicada en Netlify (no abre desde Cuba sin VPN). Lleva el nombre real del negocio.
- **Gelen Nails**: no está en la máquina (solo rastros de `~/nails` y del paquete `com.gelen.nails`). Falta saber dónde está el código.
- **Piano (Pididacta)**: `~/proyectos/Piano`. Sin git, sin publicar. Módulos 1 y 2.
- Sin mencionar por César: `area51_tattoo` (publicado en area51-tattoo.vercel.app) y los 4 demos del portafolio actual (gimnasio, legal, restaurante, tienda).

## Ronda 5 — Detalles finales (2026-10-07)

| Tema | Decisión |
|---|---|
| Librería de animación | **GSAP** (con su módulo de scroll, ~70 KB). Se carga después del contenido: la página se lee completa aunque la librería tarde o falle. Se desactiva si el teléfono pide menos movimiento. Qué se anima exactamente: pendiente |
| Etiquetas de tipo | **Cliente real** (Area 51) / **Hecho para mi trabajo** (charcutería) / **Proyecto propio** (Empire Signal, ajedrez, piano) |
| Vista previa al compartir | **Tarjeta con foto, nombre y frase**, con los colores de Musgo. Se hace cuando César pase la foto |
| Estadísticas | **Vercel Analytics** (gratis, sin cookies, ~1 KB) |
| SEO y accesibilidad | Pendiente de confirmar el paquete básico |

## Textos aprobados (2026-10-07)

| Dónde | Texto |
|---|---|
| Título de portada | «Hago webs y apps para negocios.» |
| Presentación | «Soy César, desarrollador. Construyo páginas web y aplicaciones a medida: reservas, inventario, caja o lo que tu negocio necesite.» |
| Botón principal (abre WhatsApp) | «Escríbeme por WhatsApp» |
| Mensaje prellenado de WhatsApp | «Hola César, vi tu portafolio y quiero hablar de un proyecto para mi negocio.» |
| Etiquetas de estado | «En línea» · «En uso en un negocio» · «En desarrollo» |
| Etiquetas de tipo | «Cliente real» · «Hecho para mi trabajo» · «Proyecto propio» |
| Habilidades — Interfaz | HTML, CSS, JavaScript, TypeScript, React, Next.js |
| Habilidades — Servidor | Node.js, Java, Spring Boot |
| Habilidades — Datos | PostgreSQL, Prisma, Supabase |
| Habilidades — Otras | Apps instalables que funcionan sin internet, integración de inteligencia artificial, Git, publicación en Vercel |

## Textos aprobados en bloque (2026-10-07, «todo perfecto»)

Excepción: lo referido a la charcutería (nombre «Mostrador», etiquetas) queda pendiente por el cambio de decisión.

**Botones y menú**
- Botón secundario de portada: «Ver proyectos»
- Botones de cada tarjeta: «Ver demo» · «Ver código»
- Menú: Proyectos · Servicios · Cómo trabajo · Contacto

**Títulos de sección**
- «Proyectos» · «Qué puedo construir para ti» · «Cómo trabajo» · «Habilidades» · «Hablemos»

**Proyectos**
- **Empire Signal** — «Analizador lingüístico para estudiantes de inglés y español de nivel B2–C1. Analiza palabras y frases con inteligencia artificial.» · Next.js, React, TypeScript, Prisma, Supabase
- **Entrenador de ajedrez** — «Juegas contra Stockfish con nivel ajustable y la app clasifica cada jugada tuya al momento, de mejor jugada a error grave, y te explica por qué.» · JavaScript, chess.js, Stockfish
- **Mostrador** (nombre propuesto para la demo de la charcutería) — «Caja e inventario para un mostrador: ventas por peso o por unidad, control de merma y cuadre de caja al cerrar el turno. Funciona sin internet.» · JavaScript, app instalable
- **Area 51 Tattoo** — «Página de presentación de un estudio de tatuajes, pensada para el teléfono y para llevar a cada visitante a WhatsApp.» · HTML, CSS, JavaScript
- **Pididacta** — «Piano en el navegador con un tutor integrado que te guía lección a lección.» · JavaScript, Web Audio

**Qué puedo construir para ti**
- Páginas web — «La presentación de tu negocio en internet, hecha para verse bien en el teléfono y llevar a tus clientes a WhatsApp.»
- Reservas y citas — «Tus clientes reservan su turno y tú lo gestionas desde un panel.»
- Inventario, ventas y caja — «Control de mercancía, ventas y cuadre de caja, también sin internet.»
- Apps web completas — «Plataformas con cuentas de usuario, base de datos e inteligencia artificial.»
- Algo a medida — «¿Tu idea no está en la lista? Cuéntamela y vemos cómo hacerla.»

**Cómo trabajo**
- Presupuesto gratis — «Me cuentas lo que necesitas y te digo qué haría y cuánto cuesta, sin compromiso.»
- Pago — «Efectivo, transferencia o moneda extranjera. Un anticipo al empezar y el resto al entregar.»
- Puesta en línea — «Me encargo de publicar tu web o app en internet.»
- Sin internet — «Si lo necesitas, tu app se instala en el teléfono y sigue funcionando sin conexión.»
- Mantenimiento — «Sigo disponible después de la entrega. Las condiciones las acordamos según el proyecto.»
- Inteligencia artificial — «Uso herramientas de inteligencia artificial para avanzar más rápido. Reviso y entiendo cada parte de lo que entrego.»

**Contacto**
- «Cuéntame qué necesita tu negocio. El presupuesto es gratis.» + botón «Escríbeme por WhatsApp»
- Pie: «© 2026 César Abraham Hernández»

**Para buscadores y vista previa al compartir**
- Título: «César Hernández — Webs y apps para negocios»
- Descripción: «Construyo páginas web y aplicaciones a medida para negocios: reservas, inventario, caja y más.»

## Propuestas técnicas — aprobadas (2026-10-07)

- **Qué se anima (GSAP):** (1) al abrir, una sola entrada orquestada: el título aparece palabra a palabra, la forma de la foto se despliega con rebote y los botones llegan al final; (2) la forma de la foto cambia despacio, como en la muestra; (3) al bajar, la captura del proyecto destacado se desliza dentro de su marco y las demás tarjetas entran una tras otra; (4) los botones responden con un rebote corto al tocarlos. Nada más se mueve.
- **SEO básico:** título y descripción, mapa del sitio, datos estructurados de persona, dirección canónica.
- **Accesibilidad:** contraste AA en claro y oscuro, todo usable con teclado, foco visible, texto alternativo en imágenes, animaciones apagadas si el teléfono pide menos movimiento.
- **Rama:** todo se hace en `v2`; se pasa a `main` cuando César apruebe el resultado.

## Datos que faltan (los da César)

- Foto para el retrato (y para la tarjeta de vista previa).
- Confirmar que el WhatsApp sigue siendo +53 59522128 y el correo el Gmail actual.
- Charcutería: se presenta como **«Mostrador»**, tipo **«Proyecto propio»**, estado **«En línea»** (César confirmó el 2026-10-07 que la charcutería ya no la usa). Las etiquetas «En uso en un negocio» y «Hecho para mi trabajo» quedan disponibles pero hoy no las lleva ningún proyecto.
- Instagram confirmado: https://www.instagram.com/csarh_hdez

## Trabajo en los proyectos (fuera del portafolio, se hace por partes)

1. Charcutería: publicar la app original en Vercel.
2. Ajedrez: publicarlo en Vercel.
3. Piano: crear repo en GitHub y publicarlo en Vercel.
4. Revisar el historial de cada repo (claves, datos privados) antes de que César los haga públicos.
5. Generar las 5 capturas en tamaño teléfono.

## Avance de la construcción

- [x] **Parte 1 — Estructura** (2026-10-07): rama `v2`, sitio viejo quitado, Astro 7 instalado, colores y letra de Musgo, `src/data/sitio.js` y `src/data/proyectos.js`.
- [x] **Parte 2 — Portada** (2026-10-07): título, retrato (silueta hasta tener foto), presentación y botones.
- [x] **Parte 3 — Proyectos** (2026-10-07): tarjetas con Empire Signal destacado y capturas provisionales (pantalla inicial de cada app; las definitivas van en la Parte 7).
- [x] **Parte 4 — Qué puedo construir y Cómo trabajo** (2026-10-07): textos en `src/data/servicios.js`.
- [x] **Parte 5 — Habilidades y Contacto** (2026-10-07): grupos en `src/data/habilidades.js`; contacto con WhatsApp, Instagram, correo y GitHub.
- [x] **Parte 6 — Animaciones (GSAP)** (2026-10-07): `src/scripts/animaciones.js`. Peso real: 114 KB (44,5 KB comprimido), GSAP + ScrollTrigger. Si la librería tarda más de 1,5 s, la portada se muestra sin animación.
- [ ] **Parte 7 — Proyectos externos** (en curso, 2026-10-07)
  - [x] Historiales revisados (ver tabla arriba).
  - [x] Empire Signal: «En desarrollo» y sin demo hasta que César lo arregle (sigue destacado).
  - [x] Ajedrez: `main` adelantada hasta `feat/ensenar-aperturas` (local, sin pushear).
  - [x] Charcutería: `fotos/` y `CLAUDE.md` fuera del repo **y borrados de todo el historial** (reescrito en local el 2026-10-07, de 26 a 18 commits). Siguen en la máquina. Respaldo del historial original en `~/proyectos/charcuteria-respaldo-2026-10-07/`. Falta que César haga `git push --force origin main`.
  - [x] Area 51: `node_modules/` fuera del repo (local, sin pushear).
  - [x] Piano: repo git creado en local, primer commit hecho.
  - [x] Capturas definitivas: ajedrez (pantalla «Nueva partida») y Mostrador (turno abierto con productos de ejemplo). Empire Signal, Area 51 y piano conservan la de su pantalla inicial.
  - [x] César: repo `pididacta` creado y subido.
  - [x] Ajedrez en https://chesscoach-drab.vercel.app y Mostrador en https://charcuteria-seven.vercel.app (ambos responden).
  - [x] Piano: **sin demo** por decisión de César (2026-10-07); en el portafolio solo lleva «Ver código». El despliegue en Vercel queda sin resolver.
  - [ ] Repos públicos: empire-signal, pididacta y area51_tattoo ya lo son; faltan chess_coach y charcuteria.
  - [ ] Poner los enlaces de demo y código definitivos en `src/data/proyectos.js`.
- [ ] **Parte 8 — Vista previa, SEO y publicación** (2026-10-07)
  - [x] Tarjeta al compartir: `public/tarjeta.jpg` (1200 × 630, 58 KB), **sin foto por ahora**. Su fuente es `diseno/tarjeta-compartir.html`; se regenera cuando César pase la foto.
  - [x] Etiquetas Open Graph, datos estructurados de persona, `robots.txt` y `sitemap.xml`.
  - [x] Contraste comprobado: todas las combinaciones de texto y fondo, en claro y oscuro, superan 4,5:1 (la más baja, 5,2).
  - [x] Vercel Analytics: script puesto; falta activarlo en el panel de Vercel.
  - [ ] César: aprobar el resultado, pasar `v2` a `main`, importar en Vercel con el nombre `cesarhernandez` y desactivar GitHub Pages.

## Notas de César sobre los proyectos (2026-10-07, antes de la Parte 7)

- Correo oficial confirmado: cesarabrahamhernandezponce@gmail.com (ya estaba en `src/data/sitio.js`).
- **Empire Signal:** está «medio roto» al usarlo. No se arregla dentro de este trabajo, pero hay que tenerlo en cuenta (es el destacado y lleva «En línea» y «Ver demo»). Pendiente decidir qué hacer en el portafolio mientras tanto.
- **Area 51 Tattoo:** está bien.
- **Ajedrez:** está bien; falta subirlo.
- **Piano:** en proceso; hay que subirlo también.
- **Mostrador:** está bien; solo falta lo ya señalado (publicarlo donde abra desde Cuba).

## Revisión de historiales (2026-10-07, solo lectura)

Búsqueda por patrones de clave (OpenRouter, Google, JWT de Supabase, URLs de Postgres con contraseña, tokens de GitHub, claves privadas) en todos los commits y ramas, más archivos sensibles alguna vez versionados. Es una búsqueda por patrones: reduce mucho el riesgo, no lo elimina.

| Repo | Claves en el historial | Otras cosas a saber antes de abrirlo |
|---|---|---|
| empire-signal (145 commits) | Ninguna. `.env` y `.env.local` están ignorados; `.env.example` solo tiene valores de ejemplo | 55 archivos con cambios sin commitear y 1 commit sin pushear. El correo de César aparece en las páginas About y Privacy (a propósito) |
| chess_coach (7 commits) | Ninguna | El trabajo reciente (6 commits, incluida la preparación para código abierto) está en la rama `feat/ensenar-aperturas`, no en `main`; 1 commit sin pushear |
| charcuteria (25 commits) | Ninguna | Incluye `fotos/` (4 fotos de WhatsApp), el logo y fotos de JM, y `CLAUDE.md` con notas internas de trabajo; 1 commit sin pushear |
| area51_tattoo (1 commit, ya público) | Ninguna | Tiene `node_modules/` subido al repo |
| Piano (sin git) | Ninguna en `app/` | 34 archivos, 272 KB. Falta crear el repo |

La «imagen rota» de la captura provisional de Mostrador fue cosa de la captura (se tomó antes de que cargara); `assets/cerdo.jpg` existe y está versionada. No hay nada que reparar ahí.
