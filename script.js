// Função para criar corações flutuantes
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';

    document.getElementById('heartsContainer').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Criar corações continuamente
setInterval(createHeart, 800);

// Função para criar sparkles
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

// Adicionar sparkles no clique
document.addEventListener('click', (e) => {
    createSparkle(e.clientX, e.clientY);
});

// Contador de dias dinâmico
function updateDaysCounter() {
    const weddingDate = new Date('2024-06-07');
    const today = new Date();
    const diffTime = Math.abs(today - weddingDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    document.getElementById('daysCounter').textContent = diffDays;
}

updateDaysCounter();
setInterval(updateDaysCounter, 86400000); // Atualizar a cada 24h

// Controle do player do YouTube
let playerVisible = false;

function toggleMusicPlayer() {
    const player = document.getElementById('youtube-player');
    const btn = document.querySelector('.play-btn');

    if (playerVisible) {
        player.style.display = 'none';
        btn.innerHTML = '🎵 Tocar Nossa Música';
        btn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
        playerVisible = false;
    } else {
        player.style.display = 'block';
        player.style.animation = 'fadeInUp 0.5s ease-out';
        btn.innerHTML = '🎵 Ocultar Player';
        btn.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
        playerVisible = true;

        // Criar efeitos especiais quando o player aparecer
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const rect = player.getBoundingClientRect();
                    createSparkle(
                        rect.left + Math.random() * rect.width,
                        rect.top + Math.random() * rect.height
                    );
                }, i * 100);
            }
        }, 300);
    }
}

// Efeito de partículas no fundo
function createRandomSparkles() {
    if (Math.random() < 0.3) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        createSparkle(x, y);
    }
}

setInterval(createRandomSparkles, 2000);

// Adicionar interatividade à timeline
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Adicionar efeito de clique na timeline
    timelineItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Criar sparkles especiais na timeline
            const rect = item.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createSparkle(
                        centerX + (Math.random() - 0.5) * 100,
                        centerY + (Math.random() - 0.5) * 100
                    );
                }, i * 100);
            }

            // Destacar o item clicado
            item.style.transform = 'scale(1.05)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // Adicionar efeito especial quando todos os itens da timeline aparecerem
    setTimeout(() => {
        const celebration = document.createElement('div');
        celebration.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 4rem;
                    z-index: 1000;
                    animation: celebrationPop 2s ease-out;
                    pointer-events: none;
                `;
        celebration.innerHTML = '🎉💕🎊';

        document.body.appendChild(celebration);

        setTimeout(() => {
            celebration.remove();
        }, 2000);
    }, 5000);
});

// Mensagem especial após alguns segundos
setTimeout(() => {
    const specialMessage = document.createElement('div');
    specialMessage.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(255, 107, 107, 0.9);
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                font-size: 14px;
                z-index: 1000;
                animation: slideInRight 1s ease-out;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            `;
    specialMessage.innerHTML = '💕 Feito com muito amor para você!';

    document.body.appendChild(specialMessage);

    setTimeout(() => {
        specialMessage.remove();
    }, 5000);
}, 8000);

// Adicionar CSS para animação celebrationPop
const style = document.createElement('style');
style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes celebrationPop {
                0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 0; }
                50% { transform: translate(-50%, -50%) scale(1.2) rotate(180deg); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(1) rotate(360deg); opacity: 0; }
            }
        `;
document.head.appendChild(style);

/*function toggleMusicPlayer() {
    const player = document.getElementById("youtube-player");
    const iframe = document.getElementById("yt-iframe");

    if (player.style.display === "none") {
        player.style.display = "block";
        iframe.src = "https://www.youtube.com/watch?v=ZBwjT-3t2O8"; // com autoplay
    } else {
        player.style.display = "none";
        iframe.src = ""; // para parar o vídeo
    }
}*/
