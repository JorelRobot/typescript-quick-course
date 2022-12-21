/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir = () => {
        console.log('Hola MUndo');
    }
}

console.log(MiSuperClase);