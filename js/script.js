(function () {
  var body = document.body;
  var currentPage = body ? body.getAttribute("data-page") : "";
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#primary-navigation");
  var yearTargets = document.querySelectorAll(".current-year");
  var navLinks = document.querySelectorAll(".nav-link");

  yearTargets.forEach(function (target) {
    target.textContent = new Date().getFullYear();
  });

  navLinks.forEach(function (link) {
    if (link.getAttribute("data-nav") === currentPage) {
      link.setAttribute("aria-current", "page");
      link.classList.add("is-current");
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
})();
