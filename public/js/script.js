// ========== CARRUSEL ==========
var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning');

let timeRunning = 3000;
let timeAutoNext = 7000;

nextBtn.onclick = function() {
    showSlider('next');
};

prevBtn.onclick = function() {
    showSlider('prev');
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; // trigger reflow
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}

function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
    } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();
}

// ========== MENÚ LATERAL ==========
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    mainContent.classList.toggle("collapsed");
});

// ========== GESTIÓN DE PANTALLAS ==========
function changeScreen(screen) {
    // Ocultar todas las pantallas
    document.querySelectorAll("main > div").forEach((s) => {
        s.classList.remove("active");
    });


    if (screen === 'Screen1') {
        document.querySelector(".carousel").classList.add("active");
    } else {
    // Mostrar la pantalla seleccionada
     const targetScreen = document.getElementById(screen);
     if (targetScreen) {
     targetScreen.classList.add("active");
     
     // Si es la galería, cargar las imágenes
     if (screen === 'Screen4') {
         loadGalleryImages();
     }
 }
    }

    // Cerrar el menú lateral
    sidebar.classList.remove("open");
    mainContent.classList.add("collapsed");
}

// ========== GALERÍA ==========
function loadGalleryImages() {
    const images = [
        "image.webp", "image-1.webp", "image-2.webp", "image-3.webp",
        "image-4.webp", "image-12.webp", "image-13.webp", "image-14.webp",
        "image-15.webp", "img1.webp", "img2.webp", "img3.webp",
        "img4.webp", "img5.webp", "img6.webp", "imghouse.webp", "imgjardin.webp",
        "foto20.jpg", "foto21.jpg", "foto22.jpg",
    ];

    const galleryContainer = document.querySelector('.galery .row');
    if (!galleryContainer) return;

    // Limpiar y crear columnas
    galleryContainer.innerHTML = '';
    const columns = 4;
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'column';
        galleryContainer.appendChild(column);
    }

    // Distribuir imágenes
    const columnElements = galleryContainer.querySelectorAll('.column');
    images.forEach((image, index) => {
        const columnIndex = index % columns;
        const img = document.createElement('img');
        img.src = `./images/pryimg/${image}`;
        img.alt = "SuperMario's";
        columnElements[columnIndex].appendChild(img);
    });
}

// ========== VISTA DE COLUMNAS ==========
function one() {
    document.querySelectorAll('.column').forEach(col => {
        col.style.flex = "100%";
    });
}

function two() {
    document.querySelectorAll('.column').forEach(col => {
        col.style.flex = "50%";
    });
}

function three() {
    document.querySelectorAll('.column').forEach(col => {
        col.style.flex = "33.33%";
    });
}

// ========== INICIALIZACIÓN ==========
document.addEventListener("DOMContentLoaded", () => {
    resetTimeAnimation();
    changeScreen('Screen1'); // Mostrar pantalla inicial
    
    // Configurar eventos para los botones de vista
    document.querySelector('.btn[onclick="one()"]').addEventListener('click', one);
    document.querySelector('.btn[onclick="two()"]').addEventListener('click', two);
    document.querySelector('.btn[onclick="three()"]').addEventListener('click', three);
});