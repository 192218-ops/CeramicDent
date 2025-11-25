document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  const actions = document.querySelector(".header-actions");

  if (!toggle || !nav || !actions) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));

    nav.classList.toggle("main-nav--open", !isOpen);
    actions.classList.toggle("header-actions--open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest(".nav-link") && toggle.offsetParent !== null) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("main-nav--open");
      actions.classList.remove("header-actions--open");
    }
  });
});
