// Matrix background
for (let i = 0; i < 50; i++) {
    const column = document.createElement('div');
    column.classList.add('code-column');
    column.style.left = `${Math.random() * window.innerWidth}px`;
    column.style.animationDuration = `${Math.random() * 5 + 3}s`;
    column.textContent = Array.from({length: 30}, () => String.fromCharCode(33 + Math.floor(Math.random() * 94))).join('');
    document.body.appendChild(column);
}

// Countdown logic
let countdownNumber = 5;
const countdownEl = document.getElementById('countdown');

const interval = setInterval(() => {
    countdownNumber--;
    countdownEl.textContent = countdownNumber;
    if (countdownNumber === 0) {
        clearInterval(interval);
        countdownEl.style.display = 'none';

        // Name animation sequence
        const nameElement = document.getElementById('name');
        nameElement.style.display = 'block';

        const text = 'Jaime Concheso Quiñones';
        let html = '';
        for (let letter of text) {
            html += `<span>${letter === " " ? "\u00A0" : letter}</span>`;
        }
        nameElement.innerHTML = html;

        gsap.to("#name span", {
            duration: 0.5,
            delay: (i, total) => i * 0.1,
            opacity: 1,
            y: 0,
            stagger: 0.05,
            ease: "back",
            onCompleteAll: () => {
                const btnElement = document.getElementById('btn');
                gsap.to(btnElement, {
                    duration: 0.5,
                    display: 'inline-block',
                    opacity: 1,
                    scale: 1.2,
                    yoyo: true,
                    repeat: -1,
                    ease: "power1.inOut"
                });
            }
        });
    }
}, 1000);
