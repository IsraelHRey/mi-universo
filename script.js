// ==========================================================================
// 🗂️ 1. DATOS DEL UNIVERSO (MENSAJES ROMÁNTICOS)
// ==========================================================================
const frasesRomanticas = [
    "Eres mi One piece 🏴‍☠️✨",
    "Te amo Gatunia ❤️",
    "Siempre juntos 🫂",
    "Mi persona favorita 🐻",
    "Eres la más preciosa ❤️",
    "La mujer más inteligente 🧠",
    "Mi mujer valiente",
    "Eres mi lugar favorito",
    "Contigo, todo es más bonito",
    "Me inspiras ❤️",
    "Contigo lo tengo todo ❤️",
    "Eres la mujer más maravillosa ✨",
    "Cada día me enamoro más de ti ❤️",
    "Eres mi razón de sonreír 😁",
    "Toca la pantalla ❤️",
    "Dos hijitos",
    "1 perrito 🐶",
    "1 casita 🏡"
];


const totalFotos = 18; 
const escenario = document.getElementById('escenario-flotante');

// ==========================================================================
// 🎲 2. ELEMENTOS FLOTANTES (FOTOS Y TEXTOS)
// ==========================================================================
function crearElementoFlotante() {
    const elemento = document.createElement('div');
    elemento.classList.add('elemento-flotante');
    
    const suerte = Math.random(); 
    
    if (suerte < 0.5) {
        elemento.classList.add('texto-amor');
        const indiceAzar = Math.floor(Math.random() * frasesRomanticas.length);
        elemento.innerText = frasesRomanticas[indiceAzar];
    } else {
        const numeroFotoAzar = Math.floor(Math.random() * totalFotos) + 1; 
        const img = document.createElement('img');
        img.src = `fotos/foto${numeroFotoAzar}.jpg`; 
        img.classList.add('foto-polaroid');
        elemento.appendChild(img);
    }
    
    const posicionX = Math.random() * 90; 
    const duracion = 4 + Math.random() * 4; 
    const rotacion = (Math.random() * 30) - 15; 
    
    elemento.style.setProperty('--posicion-x', `${posicionX}%`);
    elemento.style.setProperty('--duracion', `${duracion}s`);
    elemento.style.setProperty('--rotacion', `${rotacion}deg`);
    
    escenario.appendChild(elemento);
    
    setTimeout(() => {
        elemento.remove();
    }, duracion * 1000);
}

// Genera un elemento flotante cada 1.2 segundos
setInterval(crearElementoFlotante, 1200); 

// ==========================================================================
// 🖱️ 3. INTERACCIÓN POR CLIC (MÚSICA Y CORAZONES)
// ==========================================================================
document.body.addEventListener('click', function(e) {
    const reproductor = document.getElementById('musica-fondo');
    reproductor.play().catch(error => console.log("Esperando interacción para audio"));

    const corazon = document.createElement('span');
    corazon.classList.add('corazon-puro');
    corazon.innerText = "❤️";
    
    corazon.style.left = `${e.clientX - 25}px`;
    corazon.style.top = `${e.clientY - 25}px`;
    
    document.body.appendChild(corazon);
    
    corazon.animate([
        { transform: 'translateY(0) scale(0.6)', opacity: 0 },
        { opacity: 1, offset: 0.15 },
        { transform: 'translateY(-80px) scale(1.2)', opacity: 0 }
    ], {
        duration: 1200,
        easing: 'ease-out'
    });
    
    setTimeout(() => {
        corazon.remove();
    }, 1200);
});