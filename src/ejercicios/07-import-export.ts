/*
    ===== Código de TypeScript =====
*/

import { Producto , CalcularISV} from "./06-desestructuracion-argumentos";

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total, isv] = CalcularISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);