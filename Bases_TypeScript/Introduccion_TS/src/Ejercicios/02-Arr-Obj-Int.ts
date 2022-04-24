/* === Arreglos y objetos === */
/* === Inferencia de tipos=== */
let array = [] //array de tipo any, se considera una mala practica
array.push(2.5)
array.push("Amarillo")
array.push(false)
let datos = ["Laura", true, "Dueñas"] //TS infiere el tipo del array
datos.push(false)
datos.push("true")
let saludo = ["Hola", "que", "tal"]
saludo.push(":)")
/* === Con tipado=== */
let letras: string [] = ["A","B","C","D"]
letras.push("E")
let colores: (string | number |string []) [] = ["blanco", ["255","255","255"]]
colores.push("azul")
colores.push("230,230,250")

/* === Interfaces === */

interface Personaje {
    nombre: string,
    habilidades: string [],
    puebloNatal?: string, //atributo opcional
    edad: number
}

/* === Objetos === */

const nuevoPersonaje: Personaje = {
    nombre: "Ash",
    habilidades: ["agilidad", "velocidad"],
    puebloNatal: "Pueblo paleta",
    edad:13
}

console.table( nuevoPersonaje )
