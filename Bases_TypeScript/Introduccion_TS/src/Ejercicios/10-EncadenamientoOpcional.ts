/*=======ENCADENAMIENTO OPCIONAL=====*/

interface Pasajero {
    nombre: string,
    hijos?: string []
}

const pasajero1: Pasajero = {
    nombre: 'Duvan'
}

const pasajero2: Pasajero = {
    nombre:"Melissa",
    hijos: ["Natalia", "Gabriel"]
}

function imprimeHijos(pasajero: Pasajero): void{
    const cuantosHijos = pasajero.hijos?.length || 0
    console.log(cuantosHijos)
}


imprimeHijos(pasajero1) //retornara 0
imprimeHijos(pasajero2) //retornara 2 siempre porque esta definida la propiedad hijos en esta variable