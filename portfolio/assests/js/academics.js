document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeInElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                element.classList.add("show");
            }
        });
    }
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially in case elements are already in view
});
