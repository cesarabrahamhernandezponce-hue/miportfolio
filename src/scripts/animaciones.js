/* ============================================================
   ANIMACIONES (GSAP)
   Solo cuatro cosas se mueven:
     1. la entrada de la portada, una vez, al abrir;
     2. la captura del proyecto destacado, que se desliza al bajar;
     3. las demás tarjetas de proyecto, que entran una tras otra;
     4. los botones, que rebotan al tocarlos.
   (La forma del retrato cambia con CSS, en Portada.astro.)

   Si el teléfono pide menos movimiento, la clase "con-entrada" no existe
   y este archivo no hace nada.
   ============================================================ */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const html = document.documentElement;

if (html.classList.contains("con-entrada")) {
  gsap.registerPlugin(ScrollTrigger);
  entradaDePortada();
  capturaDestacada();
  tarjetasEnFila();
  rebotarBotones();
}

/* 1. Portada: título palabra a palabra, retrato con rebote, texto y botones al final. */
function entradaDePortada() {
  // Si la librería llegó tarde, la portada ya se mostró sin animación: no se repite.
  if (window.entradaVencida) return;

  // Una línea de tiempo encadena los movimientos; el último número de cada paso
  // dice cuándo empieza (en segundos, o relativo al paso anterior con "-=").
  const tl = gsap.timeline();

  tl.fromTo(
    ".portada .palabra",
    { yPercent: 70, opacity: 0 },
    { yPercent: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)", stagger: 0.07 },
  )
    .fromTo(
      ".portada .retrato",
      { scale: 0.4, rotate: -14, opacity: 0 },
      { scale: 1, rotate: 0, opacity: 1, duration: 1.1, ease: "elastic.out(1, 0.6)" },
      0.15,
    )
    .fromTo(
      ".portada .presentacion",
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.7",
    )
    .fromTo(
      ".portada .boton",
      { y: 20, scale: 0.9, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.55, ease: "back.out(2)", stagger: 0.1 },
      "-=0.3",
    );

  // GSAP ya dejó cada pieza en su punto de partida: se puede quitar el ocultado del CSS.
  html.classList.add("entrada-lista");
}

/* 2. La captura destacada es más alta que su marco y sube a medida que bajas. */
function capturaDestacada() {
  const marco = document.querySelector("#proyectos .destacado .marco");
  const imagen = marco?.querySelector("img");
  if (!imagen) return;

  gsap.to(imagen, {
    // Función y no número: se recalcula si cambia el tamaño de la pantalla.
    y: () => -Math.max(0, imagen.offsetHeight - marco.offsetHeight),
    ease: "none",
    scrollTrigger: {
      trigger: marco,
      start: "top 85%",
      end: "bottom 20%",
      scrub: 0.6, // sigue al dedo con un pequeño retraso suave
      invalidateOnRefresh: true,
    },
  });
}

/* 3. Las demás tarjetas entran una tras otra cuando llegan a la pantalla. */
function tarjetasEnFila() {
  const tarjetas = gsap.utils.toArray("#proyectos .lista > li");
  if (!tarjetas.length) return;

  gsap.set(tarjetas, { opacity: 0, y: 48 });

  // batch agrupa las que aparecen a la vez para escalonarlas entre sí.
  ScrollTrigger.batch(tarjetas, {
    start: "top 90%",
    once: true,
    onEnter: (grupo) =>
      gsap.to(grupo, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "back.out(1.4)",
        stagger: 0.12,
      }),
  });
}

/* 4. Los botones se hunden al tocarlos y vuelven con un rebote. */
function rebotarBotones() {
  const boton = (evento) => evento.target.closest?.(".boton");

  document.addEventListener("pointerdown", (e) => {
    const b = boton(e);
    if (b) gsap.to(b, { scale: 0.94, duration: 0.12, ease: "power2.out" });
  });

  const soltar = (e) => {
    const b = boton(e);
    if (b) gsap.to(b, { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  document.addEventListener("pointerup", soltar);
  document.addEventListener("pointercancel", soltar);
  document.addEventListener("pointerout", soltar);
}

// Cuando terminan de cargar las imágenes cambian las alturas: se recalculan los puntos de disparo.
window.addEventListener("load", () => ScrollTrigger.refresh());
