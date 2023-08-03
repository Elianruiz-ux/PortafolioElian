const navbar = document.getElementById("header");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const opacity = 1 - scrollY / 100;
  navbar.style.opacity = opacity.toFixed(2);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Si el componente es visible en el viewport, se agrega la clase 'appear', si no, se remueve.
      entry.target.classList.toggle("appear", entry.isIntersecting);
    });
  },
  { threshold: 0.6 }
); // threshold ajusta la sensibilidad para determinar cuando el componente es visible

// Obtener el elemento del componente que deseas animar
const fotoPerfil = document.getElementById(
  "container__sobremi__column__one__img"
);
const textoSobreMI = document.getElementById("container__sobremi__column__two");
const logosIconos = document.querySelector(".container__conocimiento");

// Observar el componente
observer.observe(textoSobreMI);
observer.observe(fotoPerfil);
observer.observe(logosIconos);
