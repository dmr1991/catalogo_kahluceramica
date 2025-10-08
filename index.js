const productos = [
  {
    titulo: "Taza Ballena, S",
    precio: "Q.180.00",
    fotos: [
      "https://picsum.photos/id/100/600/600",
      "gallery/test-carrusel.jpg",
      "gallery/test-carrusel2.jpg",
    ],
    desc: "Taza modelada en arcilla roja con diseño de ballena pequeña estilo Snow, de 5oz.",
  },
  {
    titulo: "Taza Winter Snow, L",
    precio: "Q.200.00",
    fotos: [
      "https://picsum.photos/id/200/600/600",
      "https://picsum.photos/id/201/600/600",
    ],
    desc: "Taza modelada en arcilla roja con diseño espiral desordenado estilo Snow, de 13oz.",
  },
  {
    titulo: "Dúo de Bowls Snow, M",
    precio: "Q.350.00",
    fotos: [
      "https://picsum.photos/id/300/600/600",
      "https://picsum.photos/id/301/600/600",
    ],
    desc: "Bowls de tamaño mediano modelados en arcilla roja con esmalte estilo Snow.",
  },
  {
    titulo: "Taza de Capuccino Snow, M",
    precio: "Q.160.00",
    fotos: [
      "https://picsum.photos/id/400/600/600",
      "https://picsum.photos/id/401/600/600",
    ],
    desc: "Taza para capuccino modelada en arcilla roja con esmalte estilo Snow, de 7oz.",
  },
];

const catalogo = document.getElementById("catalogo");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentFotos = [];
let currentIndex = 0;

// Generar cards dinámicamente
productos.forEach((p) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${p.fotos[0]}" alt="${p.titulo}">
    <div class="info">
      <h3>${p.titulo}</h3>
      <p>${p.precio}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    modal.style.display = "flex";
    currentFotos = p.fotos;
    currentIndex = 0;
    modalImg.src = currentFotos[currentIndex];
    modalTitle.textContent = p.titulo;
    modalPrice.textContent = p.precio;
    modalDesc.textContent = p.desc;
  });

  catalogo.appendChild(card);
});

// Cerrar modal
closeBtn.addEventListener("click", () => (modal.style.display = "none"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Scroll suave al catálogo
document.getElementById("catalogoBtn").addEventListener("click", () => {
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
});

// Carrusel: flechas del modal
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentFotos.length) % currentFotos.length;
  modalImg.src = currentFotos[currentIndex];
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentFotos.length;
  modalImg.src = currentFotos[currentIndex];
});

// Carrusel con teclado
document.addEventListener("keydown", (e) => {
  if (!modal.style.display || modal.style.display === "none") return;
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});
