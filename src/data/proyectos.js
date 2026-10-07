/* ============================================================
   PROYECTOS
   Para añadir uno nuevo:
     1. Copia un bloque entero, de { a },
     2. pégalo donde quieras que aparezca (el orden de aquí es el de la página),
     3. cambia los textos,
     4. guarda la captura en src/assets/capturas/ y pon su nombre en `captura`.

   Campos:
     estado:  "En línea" | "En uso en un negocio" | "En desarrollo"
     tipo:    "Cliente real" | "Hecho para mi trabajo" | "Proyecto propio"
     demo / codigo: enlace completo, o "" si no hay (el botón no se muestra).
     destacado: true solo en uno; sale primero y más grande.
   ============================================================ */

export const proyectos = [
  {
    nombre: "Empire Signal",
    descripcion:
      "Analizador lingüístico para estudiantes de inglés y español de nivel B2–C1. Analiza palabras y frases con inteligencia artificial.",
    estado: "En línea",
    tipo: "Proyecto propio",
    tecnologias: ["Next.js", "React", "TypeScript", "Prisma", "Supabase"],
    captura: "empire-signal.png",
    demo: "https://empire-signal.vercel.app",
    codigo: "https://github.com/cesarabrahamhernandezponce-hue/empire-signal",
    destacado: true,
  },
  {
    nombre: "Entrenador de ajedrez",
    descripcion:
      "Juegas contra Stockfish con nivel ajustable y la app clasifica cada jugada tuya al momento, de mejor jugada a error grave, y te explica por qué.",
    estado: "En línea",
    tipo: "Proyecto propio",
    tecnologias: ["JavaScript", "chess.js", "Stockfish"],
    captura: "ajedrez.png",
    demo: "", // PENDIENTE: publicar en Vercel
    codigo: "https://github.com/cesarabrahamhernandezponce-hue/chess_coach",
  },
  {
    nombre: "Mostrador",
    descripcion:
      "Caja e inventario para un mostrador: ventas por peso o por unidad, control de merma y cuadre de caja al cerrar el turno. Funciona sin internet.",
    estado: "En línea",
    tipo: "Proyecto propio",
    tecnologias: ["JavaScript", "App instalable"],
    captura: "charcuteria.png",
    demo: "", // PENDIENTE: publicar en Vercel
    codigo: "https://github.com/cesarabrahamhernandezponce-hue/charcuteria",
  },
  {
    nombre: "Area 51 Tattoo",
    descripcion:
      "Página de presentación de un estudio de tatuajes, pensada para el teléfono y para llevar a cada visitante a WhatsApp.",
    estado: "En línea",
    tipo: "Cliente real",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    captura: "area51.png",
    demo: "https://area51-tattoo.vercel.app",
    codigo: "https://github.com/cesarabrahamhernandezponce-hue/area51_tattoo",
  },
  {
    nombre: "Pididacta",
    descripcion:
      "Piano en el navegador con un tutor integrado que te guía lección a lección.",
    estado: "En desarrollo",
    tipo: "Proyecto propio",
    tecnologias: ["JavaScript", "Web Audio"],
    captura: "piano.png",
    demo: "", // PENDIENTE: publicar en Vercel
    codigo: "", // PENDIENTE: crear repo en GitHub
  },
];
