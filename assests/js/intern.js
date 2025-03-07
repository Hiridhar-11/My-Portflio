let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = "1";
    }, 100);
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
document.getElementById("activitiesButton").addEventListener("click", function() {
    window.location.href = "assignment.html";
});

let activitiesButton = document.getElementById("activitiesButton");
activitiesButton.style.transition = "transform 0.3s";
activitiesButton.addEventListener("mouseover", function() {
    activitiesButton.style.transform = "translateY(-5px)";
});
activitiesButton.addEventListener("mouseout", function() {
    activitiesButton.style.transform = "translateY(0)";
});