const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;

const emojis = ['🎈', '🍭', '🦄', '🌟', '🚀', '🍕', '🐱'];

function createEmoji() {
    const emojiElement = document.createElement('div');
    emojiElement.classList.add('emoji');
    
    // Random Emoji selection
    emojiElement.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Random horizontal position
    const randomX = Math.floor(Math.random() * (gameArea.clientWidth - 50));
    emojiElement.style.left = randomX + 'px';
    
    // Add Click Event
    emojiElement.addEventListener('click', () => {
        score++;
        scoreDisplay.innerText = score;
        emojiElement.remove(); // Pop the emoji
    });

    gameArea.appendChild(emojiElement);

    // Remove emoji after animation finishes to keep DOM clean
    setTimeout(() => {
        if (emojiElement.parentElement) {
            emojiElement.remove();
        }
    }, 4000);
}

// Spawn an emoji every 800ms
setInterval(createEmoji, 800);