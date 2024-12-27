function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

// Función para cambiar la imagen
function changeImage() {
  const offset = -currentIndex * 100;
  track.style.transform = `translateX(${offset}%)`;
}

// Evento para el botón "prev"
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = images.length - 1; // Volver al último
  }
  changeImage();
});

// Evento para el botón "next"
nextButton.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volver al primero
  }
  changeImage();
});