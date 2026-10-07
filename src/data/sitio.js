/* ============================================================
   DATOS DEL SITIO
   Único lugar donde se cambian tu contacto y los textos generales.
   ============================================================ */

export const sitio = {
  nombre: "César Abraham Hernández",
  nombreCorto: "César Hernández",

  // Lo que ven Google y WhatsApp/Instagram al compartir el enlace.
  titulo: "César Hernández — Webs y apps para negocios",
  descripcion:
    "Construyo páginas web y aplicaciones a medida para negocios: reservas, inventario, caja y más.",

  // WhatsApp en formato internacional, solo dígitos (53 + número).
  whatsapp: "5359522128",
  mensajeWhatsapp:
    "Hola César, vi tu portafolio y quiero hablar de un proyecto para mi negocio.",

  correo: "cesarabrahamhernandezponce@gmail.com",
  github: "https://github.com/cesarabrahamhernandezponce-hue",
  instagram: "https://www.instagram.com/csarh_hdez",
};

// Enlace de WhatsApp con el mensaje ya escrito.
export const enlaceWhatsapp =
  "https://wa.me/" +
  sitio.whatsapp +
  "?text=" +
  encodeURIComponent(sitio.mensajeWhatsapp);

// Secciones de la página, en orden. El menú solo muestra las que tienen `menu`.
export const secciones = [
  { id: "proyectos", titulo: "Proyectos", menu: "Proyectos" },
  { id: "servicios", titulo: "Qué puedo construir para ti", menu: "Servicios" },
  { id: "como-trabajo", titulo: "Cómo trabajo", menu: "Cómo trabajo" },
  { id: "habilidades", titulo: "Habilidades" },
  { id: "contacto", titulo: "Hablemos", menu: "Contacto" },
];
