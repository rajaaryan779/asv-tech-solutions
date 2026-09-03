/* ASV Tech Solutions — interactions */
(function () {
  "use strict";

  /* ---- year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- sticky header shadow ---- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- mobile menu ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    var setOpen = function (open) {
      menu.hidden = !open;
      menu.classList.toggle("open", open);
      toggle.classList.toggle("is-active", open);
      toggle.setAttribute("aria-expanded", String(open));
    };
    toggle.addEventListener("click", function () {
      setOpen(!menu.classList.contains("open"));
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setOpen(false);
    });
  }

  /* ---- scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---- contact form (front-end only, no backend wired) ---- */
  var form = document.querySelector(".contact-form");
  if (form) {
    var note = form.querySelector(".form-note");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name");
      var email = form.querySelector("#email");
      var message = form.querySelector("#message");
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        note.textContent = "Please fill in your name, email and a short brief.";
        note.style.color = "#ff7aa8";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        note.textContent = "That email doesn't look right — mind checking it?";
        note.style.color = "#ff7aa8";
        return;
      }
      note.textContent =
        "Thanks, " + name.value.trim().split(" ")[0] + " — this is a demo form. Connect it to email/Formspree to receive messages.";
      note.style.color = "";
      form.reset();
    });
  }
})();
