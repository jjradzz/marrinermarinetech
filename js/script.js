(function () {
  var body = document.body;
  var currentPage = body ? body.getAttribute("data-page") : "";
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#primary-navigation");
  var yearTargets = document.querySelectorAll("[data-current-year]");
  var inactiveForm = document.querySelector("[data-inactive-form]");

  yearTargets.forEach(function (target) {
    target.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-nav]").forEach(function (link) {
    if (link.getAttribute("data-nav") === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.focus();
      }
    });
  }

  if (inactiveForm) {
    inactiveForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var message = inactiveForm.querySelector("[data-form-message]");

      if (message) {
        message.textContent = "This placeholder form is not active yet. Please replace [BUSINESS EMAIL] before publishing.";
      }
    });
  }
})();
