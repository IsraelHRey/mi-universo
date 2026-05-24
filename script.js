// 1. Datos del universo 🗂️
const frasesRomanticas = [
    "Eres mi todo ✨",
    "Te amo ❤️",
    "Siempre juntos",
    "Mi persona favorita 🐻",
    "Eres preciosa",
    "Eres lo mejor que me ha pasado",
    "Contigo, yo en la vida ya gané",
    "Mi lugar favorito del mundo eres tú",
    "A tu lado, todo es más bonito",
    "Tú me completas",
    "No necesito buscar más, ya te encontré a ti",
    "Eres mi sueño hecho realidad",
    "Cada día me enamoro más de ti",
    "Tú haces que mi mundo tenga sentido",
    "Eres mi razón para sonreír",
    "Tu amor es mi mayor fortuna",
    "No cambio ni un segundo contigo por nada del mundo",
    "Eres mi paz y mi locura favorita",
    "Desde que llegaste, todo es mejor"
];

const totalFotos = 18; 
const escenario = document.getElementById('escenario-flotante');

// 2. Función principal que crea fotos y textos flotantes 🎲
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
    
    escenario.appendChild(elemento); // Corregido: antes decía corazon
    
    setTimeout(() => {
        elemento.remove();
    }, duracion * 1000);
}

setInterval(crearElementoFlotante, 1200); 

// 🖱️ Escuchador de eventos para clics con animación directa en JavaScript
document.body.addEventListener('click', function(e) {
    const reproductor = document.getElementById('musica-fondo');
    reproductor.play().catch(error => console.log("Esperando interacción para audio"));

    const corazon = document.createElement('span');
    corazon.classList.add('corazon-puro');
    corazon.innerText = "❤️";
    
    // Posicionamiento en píxeles de la ventana
    corazon.style.left = `${e.clientX - 25}px`;
    corazon.style.top = `${e.clientY - 25}px`;
    
    document.body.appendChild(corazon);
    
    // Animación controlada desde JavaScript para evitar conflictos de CSS
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