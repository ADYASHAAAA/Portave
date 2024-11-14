document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".animate-fade-in, .animate-zoom-in");
    elements.forEach(el => {
        el.style.opacity = 1;
    });
});
