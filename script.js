const matrixRain = document.querySelector('.matrix-rain');

// Array of characters to use in the Matrix effect (you can expand this)
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]{}|';

// Function to create a falling letter
function createMatrixLetter() {
  const span = document.createElement('span');
  const randomChar = characters[Math.floor(Math.random() * characters.length)];

  // Position the letter inside the cloud bounds
  const cloudRect = document.querySelector('.cloud').getBoundingClientRect();
  const startX = Math.random() * cloudRect.width + cloudRect.left;
  const startY = cloudRect.top; // Start at the cloud position
  
  span.textContent = randomChar;
  span.style.left = `${startX}px`; // Random horizontal position within the cloud
  span.style.top = `${startY}px`;  // Start at the cloud's top position

  span.style.animationDuration = `${Math.random() * 5 + 3}s`; // Random duration for each letter's fall
  span.style.animationDelay = `${Math.random() * 2}s`; // Random delay before falling

  matrixRain.appendChild(span);

  // Remove the letter once it's done falling
  span.addEventListener('animationend', () => {
    span.remove();
  });
}

// Create falling letters every 100 milliseconds
setInterval(createMatrixLetter, 100);
