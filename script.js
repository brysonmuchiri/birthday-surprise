document.addEventListener('DOMContentLoaded', () => 
const canvas =
document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
)
console.log("%c",
    "font-size: 200px; background:
    url(https://github.com/brysonmuchiri/birthday-surprise/blob/main/Screenshot%202025-03-30%20132806.png?raw=true") no repeat;
        background-size: cover; ");
    )
    
const particles = [];

function createFirework() {
    let x = Math.random() *
    canvas.width;
    let y = Math.random() *
    canvas.height / 2;
    let color = `hsl(${Math.random() *
        360}, 100%, 60%)`;

        for (let i = 0; i < 30; i++) {
            particles.push( {
                x: x,
                y: y,
                size: Math.random() * 3,
                speedX: Math.random() * 4 - 2,
                speedY: Math.random() * 4 - 2,
                color: color,
                life: 50 
            } ) ;
        }
}

function showBalloons() {
    let container = document.getElementById("balloonContainer");
    for (let i = 0; i < 10; i++) {  // Generate 10 balloons
        balloon.src =
        "https://github.com/brysonmuchiri/birthday-surprise/blob/main/Screenshot%202025-03-30%20153830.png?raw=true";
        balloon.className = "balloon";
        let balloon = document.createElement("img");
        // Set random position
        balloon.style.left = Math.random() * window.innerWidth + "px";
        balloon.style.bottom = "-100px"; // Start below screen

        // Random animation duration
        let floatTime = Math.random() * 3 + 4; // Between 4-7 seconds
        balloon.style.animation = `float ${floatTime}s linear forwards`;

        container.appendChild(balloon);

        // Remove balloon after animation
        setTimeout(() => {
            balloon.remove();
        }, floatTime * 1000);
        }
    }

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width,canvas.height);

    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        ctx.fillstyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0,
            Math.PI * 2);
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;
            p.life--;

            if (p.life <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }

        requestAnimationFrame(
            animateFireworks);
}

setInterval(createFirework, 700);
animateFireworks();

{
    const container = document.querySelector('.container');
    const fireworks = new Fireworks.default(container, {
      autoresize: true,
      opacity: 0.5,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 50,
      trace: 3,
      explosion: 5,
      intensity: 30,
      flickering: 50,
      lineStyle: 'round',
      hue: { min: 0, max: 360 },
      delay: { min: 30, max: 60 },
      rocketsPoint: 50,
      lineWidth: { explosion: { min: 1, max: 3 }, trace: { min: 1, max: 2 } },
      brightness: { min: 50, max: 80 },
      decay: { min: 0.015, max: 0.03 },
      mouse: { click: false, move: false, max: 1 },
      sound: { enable: false }
    });
    fireworks.start();
    console.log(document.querySelector("img").src);
  });