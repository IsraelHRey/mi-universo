// ==========================================================================
// 🗂️ 1. DATOS DEL UNIVERSO (MENSAJES ROMÁNTICOS)
// ==========================================================================
const frasesRomanticas = [
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
// 🎲 2. ELEMENTOS FLOTANTES CON DIRECCIÓN MULTIDIRECCIONAL
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
    
    // 🌌 Posición de origen: un punto al azar en la pantalla
    const posicionX = Math.random() * 100;
    const posicionY = Math.random() * 100;
    
    // 🧭 Dirección de escape: calcula hacia dónde viajará el elemento al expandirse
    // Si nace a la izquierda, viaja más a la izquierda; si nace arriba, viaja más arriba.
    const desplazarX = (posicionX - 50) * 8; // Multiplicador para abrir el ángulo
    const desplazarY = (posicionY - 50) * 6;
    
    const duracion = 5 + Math.random() * 4; // Un viaje ligeramente más suave
    const rotacion = (Math.random() * 40) - 20; 
    
    // Asignación de las variables al CSS
    elemento.style.setProperty('--posicion-x', `${posicionX}%`);
    elemento.style.setProperty('--posicion-y', `${posicionY}%`);
    elemento.style.setProperty('--desplazamiento-x', `${desplazarX}px`);
    elemento.style.setProperty('--desplazamiento-y', `${desplazarY}px`);
    elemento.style.setProperty('--duracion', `${duracion}s`);
    elemento.style.setProperty('--rotacion', `${rotacion}deg`);
    
    escenario.appendChild(elemento);
    
    setTimeout(() => {
        elemento.remove();
    }, duracion * 1000);
}

// Genera un elemento flotante cada 1.3 segundos para balancear la dispersión
setInterval(crearElementoFlotante, 1300); 

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