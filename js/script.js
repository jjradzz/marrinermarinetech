(function () {
  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#primary-navigation");
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    };
    toggle.addEventListener("click", function () { setOpen(!nav.classList.contains("is-open")); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
    });
  }

  // Footer year
  document.querySelectorAll(".current-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Course line: plot to the current waypoint when it scrolls into view.
  // Triggered by normal scrolling only; never pins or intercepts the scroll.
  var course = document.querySelector(".course");
  if (!course) return;
  var measure = function () {
    var current = course.querySelector(".is-current") || course.lastElementChild;
    var box = course.getBoundingClientRect();
    var pt = current.getBoundingClientRect();
    course.style.setProperty("--plot-x", (pt.left - box.left + 12) + "px");
    course.style.setProperty("--plot-y", (pt.top - box.top + 12) + "px");
  };
  measure();
  window.addEventListener("resize", measure);
  if (!("IntersectionObserver" in window)) { course.classList.add("is-plotted"); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { course.classList.add("is-plotted"); io.disconnect(); }
    });
  }, { threshold: 0.4 });
  io.observe(course);
})();
