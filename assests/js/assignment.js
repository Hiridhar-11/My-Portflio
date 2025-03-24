document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".open-btn");

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
    handleScroll();

    let driveLinks = [
        "https://drive.google.com/drive/folders/1LkhBPZyRbLAGL7dOaNfcNRW9Q89psR_z?usp=drive_link",
        "https://drive.google.com/drive/folders/1KodoiyTI6friti6c5wXzmt4cLQAW4IhD?usp=drive_link",
        "https://drive.google.com/drive/folders/1mZ6qg2OgjLLOQmRZq7es_whcSVR4NcWX?usp=drive_link",
        "https://drive.google.com/drive/folders/1NGBBpIMbOtNeX0vW7De7sBY45pQroXdv?usp=drive_link",
        "https://drive.google.com/drive/folders/19czGsFR_1m0wHVzRnZIYk1tWTsU4PYIv?usp=drive_link",
        "https://drive.google.com/drive/folders/1kWkZtdMRj5iuXvOHCcBP292eDWak0oiA?usp=drive_link"
    ];

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            window.open(driveLinks[index], "_blank");
        });
    });
});

