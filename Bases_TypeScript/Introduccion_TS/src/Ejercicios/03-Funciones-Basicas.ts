/* === Funciones basicas === */
//Especificando el tipo de datos en parametros y retorno
function sumar (a:number, b:number) : number{
    return a + b;
}

const resultado = sumar(2,3);

console.log("Suma: ",resultado)

//Especificando el tipo de datos unicamente en los parametros 
function multiplicar (a:number, b:number){
    return (a * b).toString();
}

const resultado2 = multiplicar(2,3);

console.log("Multiplicacion: ",resultado2)

//Arrow functions 
//Parametros y retorno de tipo any, inferencia de tipos
const sumarFlecha = (a, b) =>{
    return a + b;
}

//Parametros y retorno de tipo number, tipado estricto
const sumarFlecha2 = (a:number, b:number):number =>{
    return a + b;
}

//Parametros opcionales 
function calcularPotencia (numero:number, coeficiente?:number, base:number=8):number{
    return Math.pow(base,numero);
}

let potencia: number = calcularPotencia(2,6) //tercer atributo es definido en caso de no ser enviado
let potencia2: number = calcularPotencia(4) //segundo atributo es opcional
let potencia3: number = calcularPotencia(2,6,8) //si se quiere cambiar la base se debe enviar el coeficiente

console.log("El valor de la potencia es: ", potencia)
console.log("El valor de la potencia 1 es: ", potencia2)
console.log("El valor de la potencia 2 es: ", potencia3)

/* === Funciones con objetos como argumentos === */

interface PersonajeLOR{
    nombre: string;
    pv: number;
    curar: (puntosVida:number)=>void;
}

const hobbit: PersonajeLOR = {
    nombre: "Hobbit",
    pv: 100,
    curar(puntosVida:number):void{
        this.pv += puntosVida;
    }
}

hobbit.curar(20);
console.log("Los puntos de vida del personaje",hobbit.nombre, "son", hobbit.pv)