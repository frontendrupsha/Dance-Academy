// JavaScript for extra floating effect
const floatingText = document.querySelector('.floating-text');

let floatDirection = 1;
setInterval(() => {
    if (floatingText.style.transform === 'translateY(-10px)') {
        floatDirection = -1;
    } else if (floatingText.style.transform === 'translateY(0px)') {
        floatDirection = 1;
    }
    floatingText.style.transform = `translateY(${floatDirection * 10}px)`;
}, 3000);

// Fade-in effect on load
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".instructor-card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "scale(1)";
        }, index * 200); // Stagger each card by 200ms
    });
});
