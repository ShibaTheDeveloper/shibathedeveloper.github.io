const canvas = document.getElementById("shootingStarsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class ShootingStar {
    constructor() {
        this.reset();

        for (let i = 0; i < Math.random() * 100000; i++) {
            this.update()
        }
    }

    reset() {
        this.x = Math.random() * -30;
        this.y = (Math.random() - 0.5) * canvas.width * 2;
        this.length = Math.random() * 80;
        this.speed = Math.random() * 5 + 2;
        this.angle = Math.random() * 10 + 10;
        this.opacity = Math.random() * 0.5 + 0.5;
    }

    update() {
        this.x += Math.cos((this.angle * Math.PI) / 180) * this.speed;
        this.y += Math.sin((this.angle * Math.PI) / 180) * this.speed;
        this.opacity -= 0.001; // Gradually fade

        if (this.opacity <= 0 || this.x > canvas.width / 2) {
            this.reset();
        }
    }

    draw() {
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
            this.x - Math.cos((this.angle * Math.PI) / 180) * this.length,
            this.y - Math.sin((this.angle * Math.PI) / 180) * this.length
        );
        ctx.stroke();
    }
}

let stars = [];
let starIndex = 0;

function spawnStar() {
    stars.push(new ShootingStar());
}

for (let i = 0; i < (canvas.width * canvas.height / 6000); i++) {
   spawnStar()
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
        star.update();
        star.draw();
    });
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});