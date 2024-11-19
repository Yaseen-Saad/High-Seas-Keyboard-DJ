const sounds = {
  c: "cannon.mp3",
  s: "seagull.mp3",
  t: "thunder.mp3",
  m: "meow.mp3",
  a: "arr.mp3",
};

const animationMap = {
  c: "cannon.png",
  s: "seagull.png",
  t: "thunder.png",
  m: "meow.png",
  a: "arr.png",
};

const quotes = [
  "Arrr! Fire the cannons!",
  "The gulls are squawking!",
  "A wave crashes upon us!",
  "Aye, matey, that’s a strange cat sound!",
  "Let’s sing a hearty shanty!",
];

let keyPressCount = 0;

const backgroundMusic = new Audio("https://cloud-hrqk6nzbv-hack-club-bot.vercel.app/0old_runescape_soundtrack____sea_shanty2__bjhf0l7pfo8__audio.mp4");
backgroundMusic.loop = true;

const pirateBackgrounds = [
  "linear-gradient(to bottom, #1E90FF, #00008B)", // Calm seas
  "linear-gradient(to bottom, #4682B4, #191970)", // Dusk on the ocean
  "linear-gradient(to bottom, #2F4F4F, #000)", // Stormy seas
];

// Display available keys
const keyGuide = document.createElement("div");
keyGuide.innerHTML = `<strong>Available Keys:</strong> C (Cannon), S (Seagull), T (Thunder), M (Meow), A (Arr)`;
keyGuide.style.padding = "10px";
keyGuide.style.border = "1px solid #ddd";
keyGuide.style.marginBottom = "20px";
document.getElementById("app").prepend(keyGuide);

// Key press counter
const keyCounter = document.createElement("div");
keyCounter.id = "key-counter";
keyCounter.textContent = "Keys Pressed: 0";
keyCounter.style.marginTop = "10px";
keyCounter.style.fontSize = "1.2em";
document.getElementById("app").appendChild(keyCounter);

// Handle keypress events
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (sounds[key]) {
    const sound = new Audio(`sounds/${sounds[key]}`);
    sound.play();
    displayQuote(key);
    createParticles(key);
    updateKeyCounter();
    if (key === "w") {
      triggerStormEffect();
    }
  }
});

// Toggle background music
document.getElementById("toggle-music").addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});

// Display a pirate quote
function displayQuote(key) {
  const quoteDiv = document.getElementById("quote");
  quoteDiv.textContent = quotes[keysToIndices(key)];
  setTimeout(() => {
    quoteDiv.textContent = "";
  }, 2000);
}

// Create particle effects
function createParticles(key) {
  const animationsDiv = document.getElementById("animations");

  for (let i = 0; i < 10; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    animationsDiv.appendChild(particle);

    setTimeout(() => {
      animationsDiv.removeChild(particle);
    }, 1500);
  }
}

// Update key counter
function updateKeyCounter() {
  keyPressCount++;
  document.getElementById("key-counter").textContent = `Keys Pressed: ${keyPressCount}`;
}

// Trigger stormy effects for "W" key
function triggerStormEffect() {
  const animationsDiv = document.getElementById("animations");

  const lightning = document.createElement("div");
  lightning.className = "lightning";
  animationsDiv.appendChild(lightning);

  setTimeout(() => {
    animationsDiv.removeChild(lightning);
  }, 500);
}

function keysToIndices(key) {
  const keyMap = {
    c: 0,
    s: 1,
    t: 2,
    m: 3,
    a: 4,
  };
  return keyMap[key];
}
