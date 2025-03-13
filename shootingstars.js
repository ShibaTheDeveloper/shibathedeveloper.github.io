const canvas = document.getElementById("shootingStarsCanvas");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height * 1.5; // Start from top half
                this.length = Math.random() * 80 + 20;
                this.speed = Math.random() * 5 + 2;
                this.angle = Math.random() * 20 + 220; // Diagonal down
                this.opacity = Math.random() * 0.5 + 0.5;
            }

            update() {
                this.x += Math.cos((this.angle * Math.PI) / 180) * this.speed;
                this.y += Math.sin((this.angle * Math.PI) / 180) * this.speed;
                this.opacity -= 0.003; // Gradually fade

                if (this.opacity <= 0) {
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
        for (let i = 0; i < 59; i++) {
            stars.push(new ShootingStar());
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