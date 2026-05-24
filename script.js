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
    "Tu amor es mi mayor fortuna",
    "No cambio ni un segundo contigo por nada del mundo",
    "Eres mi paz y mi locura favorita",
    "Desde que llegaste, todo es mejor"
];

// Aquí defines cuántas fotos guardaste en tu carpeta
const totalFotos = 18; 

const escenario = document.getElementById('escenario-flotante');

// 2. Función principal que crea un elemento al azar 🎲
function crearElementoFlotante() {
    const elemento = document.createElement('div');
    elemento.classList.add('elemento-flotante');
    
    // --- EL VOLADO ALEATORIO ---
    // Generamos un número entre 0 y 1
    const suerte = Math.random(); 
    
    if (suerte < 0.5) {
        // 💬 Opción A: Es una frase de texto
        elemento.classList.add('texto-amor');
        const indiceAzar = Math.floor(Math.random() * frasesRomanticas.length);
        elemento.innerText = frasesRomanticas[indiceAzar];
    } else {
        // 📸 Opción B: Es una foto de la carpeta
        const numeroFotoAzar = Math.floor(Math.random() * totalFotos) + 1; // Número entre 1 y el total de fotos
        
        const img = document.createElement('img');
        img.src = `fotos/foto${numeroFotoAzar}.jpg`; // Ruta local de tu foto
        img.classList.add('foto-polaroid');
        
        elemento.appendChild(img);
    }
    
    // 3. Configuración de variables aleatorias para el CSS 🎨
    const posicionX = Math.random() * 90; // Evitamos que se pegue al borde derecho
    const duracion = 2 + Math.random() * 2; // Ahora es entre 4 y 8 segundos 🏃‍♂️
    const rotacion = (Math.random() * 30) - 15; // Rotación leve entre -15 y 15 grados
    
    elemento.style.setProperty('--posicion-x', `${posicionX}%`);
    elemento.style.setProperty('--duracion', `${duracion}s`);
    elemento.style.setProperty('--rotacion', `${rotacion}deg`);
    
    escenario.appendChild(elemento);
    
    // 4. Limpieza de memoria 🗑️
    setTimeout(() => {
        elemento.remove();
    }, duracion * 1000);
}

setInterval(crearElementoFlotante, 1200); // Nace un elemento cada 1.2 segundos ⏳

// 🖱️ Escuchador de eventos para detectar los clics en la pantalla
// 🖱️ Escuchador de eventos para detectar los clics en la pantalla
document.body.addEventListener('click', function(e) {
    // 🎵 ACTIVAR MÚSICA: Buscamos el audio y le damos Play
    const reproductor = document.getElementById('musica-fondo');
    reproductor.play().catch(error => console.log("Esperando interacción para reproducir audio"));

    // (Aquí abajo continúa todo el código que ya tenías para crear el corazón...)
    const corazon = document.createElement('span');
    corazon.classList.add('elemento-flotante', 'texto-amor');
    corazon.innerText = "❤️";
    
    const xPorcentaje = (e.clientX / window.innerWidth) * 100;
    corazon.style.setProperty('--posicion-x', `${xPorcentaje}%`);
    corazon.style.setProperty('--duracion', '4s');
    corazon.style.setProperty('--rotacion', '0deg');
    corazon.style.bottom = `${window.innerHeight - e.clientY}px`;
    
    escenario.appendChild(corazon);
    
    setTimeout(() => {
        corazon.remove();
    }, 4000);
});