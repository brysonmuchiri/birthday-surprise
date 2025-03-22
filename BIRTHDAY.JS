const canvas =
document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
    
        requestAnimationFrame(animateFireworks);
    }

    setInterval(createFirework, 700);
    animateFireworks();
