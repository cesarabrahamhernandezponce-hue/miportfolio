/* =========================================================
   Interacción del portafolio
   ========================================================= */
(function () {
  "use strict";

  var cfg = window.SITE || {};

  /* ---- Enlaces de WhatsApp y email desde la config ---- */
  var waNumber = (cfg.whatsapp || "").replace(/\D/g, "");
  var waUrl =
    "https://wa.me/" +
    waNumber +
    (cfg.whatsappMessage ? "?text=" + encodeURIComponent(cfg.whatsappMessage) : "");

  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  document.querySelectorAll("[data-email]").forEach(function (el) {
    if (cfg.email) {
      el.setAttribute("href", "mailto:" + cfg.email);
    } else {
      el.style.display = "none";
    }
  });

  document.querySelectorAll("[data-email-text]").forEach(function (el) {
    if (cfg.email) el.textContent = cfg.email;
  });
  document.querySelectorAll("[data-location-text]").forEach(function (el) {
    if (cfg.location) el.textContent = cfg.location;
  });

  /* ---- Año actual en el footer ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Código QR (fuente única: el mismo enlace de WhatsApp) ---- */
  var qrEl = document.getElementById("qr");
  if (qrEl && typeof qrcode === "function" && waNumber) {
    try {
      var qr = qrcode(0, "M");
      qr.addData(waUrl);
      qr.make();
      qrEl.innerHTML = qr.createSvgTag({ cellSize: 6, margin: 1, scalable: true });
      var svg = qrEl.querySelector("svg");
      if (svg) {
        svg.setAttribute("role", "img");
        svg.setAttribute("aria-label", "Código QR para escribir por WhatsApp");
      }
    } catch (e) {
      qrEl.textContent = "";
    }
  }

  /* ---- Menú móvil ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Sombra del header al hacer scroll ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Animación de aparición ---- */
  var reveal = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveal.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
