/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalle: Detalle;
}

interface Detalle {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 60,
    cancion: 'Mess is mine',
    detalle: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalle } = reproductor;
const { anio } = detalle;

// console.log('El volumen actual es de: ', volumen );
// console.log('El segundo actual es: ', segundo);
// console.log('La cancion actual es: ', cancion);
// console.log('El autor es: ', anio);

const dbz: string [] = ['Goku', 'Vegeta', 'Trunks'];
const [ goku, vegeta, trunks ] = dbz;

console.log('Personaje 1', goku);
console.log('Personaje 2', vegeta);
console.log('Personaje 3', trunks);