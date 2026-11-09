// Ajusta la fecha exacta en que se volvieron novios (Año, Mes-1, Día, Hora, Minuto, Segundo)
// Nota: Los meses en JavaScript van de 0 a 11 (0 = Enero, 9 = Octubre, 10 = Noviembre, etc.)
const startDate = new Date(2026, 9, 9, 0, 0, 0); 

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateTimer, 1000);
updateTimer();

function toggleMessage() {
  const modal = document.getElementById('messageModal');
  modal.classList.toggle('hidden');
}

// Generador de corazones morados flotantes en el fondo
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '💜';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heart.style.opacity = Math.random();
  document.getElementById('hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
