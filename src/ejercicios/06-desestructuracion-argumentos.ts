/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad',
    precio: 350
}

const CalcularISV = (productos: Producto[]): [number, number] => {
    let total = 0;

    productos.forEach(({ precio }) => {
        total += precio;
    });

    return [ total, total * 0.15 ];
}

const articulos = [telefono, tableta];
const [total, isv] = CalcularISV(articulos);

console.log('Total: ', total);
console.log('ISV: ', isv);