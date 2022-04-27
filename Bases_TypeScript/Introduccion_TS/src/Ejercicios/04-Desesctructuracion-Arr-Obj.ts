/*=======Desestructuración de objetos===== */

//partiendo de interfaces

interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles: Detalles
}

interface Detalles{
    autor:string,
    anio:number
}

const reproductor: Reproductor = {
    volumen:60,
    segundo:30,
    cancion:"Vienna",
    detalles:{
        autor:"Billy Joel",
        anio:1977
    }
}

//Para evitar repetir tantas veces el nombre del objeto
console.log("El volumen es", reproductor.volumen)
console.log("El segundo es", reproductor.segundo)
console.log("La cancion es", reproductor.cancion)
console.log("El autor es", reproductor.detalles.autor)
console.log("El año de lanzamiento es", reproductor.detalles.anio)

//Surge la desestructuración de objetos, en donde a través de constantes
//se almacenan los valores que toman las propiedades de los objetos
//con el fin de poder utilizarlas directamente, teniendo un codigo más limpio

//es posible realizarlo en una sola linea

//NOTA: es posible que mediante la creación de estas constantes se presenten
//conflictos, al tener otras constantes con el mismo nombre, este problema se
//puede solucionar a través de
const segundo =25
const autor = "Steve Taylor"
const {volumen, segundo: segundoReproductor, cancion, detalles:{autor:autorReproductor,anio}} = reproductor
//const {autor, anio} = detalles
console.log("El volumen es", volumen)
console.log("El segundo es", segundoReproductor)
console.log("La cancion es", cancion)
console.log("El autor es", autorReproductor)
console.log("El año de lanzamiento es", anio)


/*=======Desestructuración de arreglos===== */

const dbz: string [] = ["Goku", "Vegeta", "Trunks", "Goten"]
const [, p2, , ] = dbz

//console.log("El personaje 1 es", p1)
//si solo se necesita una posicion en especifico
console.log("El personaje 2 es", p2)
//console.log("El personaje 3 es", p3)
//console.log("El personaje 4 es", p4)

