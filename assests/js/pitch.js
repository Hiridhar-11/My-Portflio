document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");

  function handleScroll() {
    fadeInElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
