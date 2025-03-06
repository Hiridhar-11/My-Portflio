document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    const texts = ["Electrical Engineer", "Innovative Thinker", "UI/UX Developer"];
    let index = 0;
    const typingEffect = document.querySelector(".typing-effect");
    
    function typeText() {
        let text = texts[index];
        let i = 0;
        typingEffect.textContent = "";
        
        function typeLetter() {
            if (i < text.length) {
                typingEffect.textContent += text[i];
                i++;
                setTimeout(typeLetter, 100);
            } else {
                setTimeout(eraseText, 2000);
            }
        }
        
        function eraseText() {
            if (typingEffect.textContent.length > 1) {
                typingEffect.textContent = typingEffect.textContent.slice(0, -1);
                setTimeout(eraseText, 50);
            } else {
                index = (index + 1) % texts.length;
                setTimeout(typeText, 500);
            }
        }
        
        typeLetter();
    }
    typeText();
});
