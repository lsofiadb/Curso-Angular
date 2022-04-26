# Bases fundamentales de TypeScript :bookmark_tabs:
## Introducción :beginner:

### Tipos básicos :white_check_mark:
[Documentacion](https://www.typescriptlang.org/docs/handbook/basic-types.html) referente a los tipos de datos en TS.

Para la declaración de variables con tipado:

``` TypeScript
let nombre: string = 'Laura';
nombre = 'Laura Sofia';
let aprendiendo: boolean = true; //no se puede usar binarios 
const apellido = 'Dueñas'; //este valor nunca va a cambiar
let edad: number | string; //permite dos tipos de datos a partir de un "or"
edad = 22;
edad = 'Veintidos años';
```
Para inferencia de tipos como se suele hacer en JS:
``` TypeScript
let nombre = 'Laura';
nombre = 'Laura Sofia';
let aprendiendo = true;
const apellido = 'Dueñas';
let edad;
edad = 22;
edad = 'Veintidos años';
```

**NOTA**:pushpin: al momento de ejecutar el código fuente el navegador hace una transformación del código correspondiente de TS a JS, con el fin de que el navegador pueda comprenderlo, a través de un archivo llamado Bundle.js (el cual es creado por Webpack) en donde se integran todos los ficheros de JS, por ello al unificar este conjunto de archivos en uno solo pueden presentarse conflictos si se tienen variables con el mismo nombre en distintos ficheros, ya que pasan a ser "globales" porque hacen parte del mismo scope de JS, esto sucede para este ejemplo al utilizar Webpack, más no para Angular.

### Arreglos, objetos e interfaces :mag:

#### Arreglos :checkered_flag:
Declaración y asignación con inferencia de tipos:

``` TypeScript
let array = [] //array de tipo any, se considera una mala practica
array.push(2.5)
array.push("Amarillo")
array.push(false)
let datos = ["Laura", true, "Dueñas"] //TS infiere el tipo del array
datos.push(false)
datos.push("true")
let saludo = ["Hola", "que", "tal"]
saludo.push(":)")
```

Declaración y asignación con tipado estricto:

``` TypeScript
let letras: string [] = ["A","B","C","D"]
letras.push("E")
let colores: (string | number |string []) [] = ["blanco", ["255","255","255"]]
colores.push("azul")
colores.push("230,230,250")
```

**RECOMENDACIÓN**: SIEMPRE poner el tipo de dato en la declaración de las variables. 

#### Interfaces :o:

Su funcionamiento es similar a las interfaces de Java, ya que permiten partir de una plantilla, tanto de variables como métodos, para crear objetos posteriormente, implementando las funciones de acuerdo a la necesidad. 

``` TypeScript
interface Personaje {
    nombre: string,
    habilidades: string [],
    puebloNatal?: string, //atributo opcional
    edad: number
}
```

#### Objetos :white_circle::red_circle::large_blue_circle:

Los objetos se definen a partir de una interfaz.

``` TypeScript
const nuevoPersonaje: Personaje = {
    nombre: "Ash",
    habilidades: ["agilidad", "velocidad"],
    puebloNatal: "Pueblo paleta",
    edad:13
}

console.table( nuevoPersonaje ) //HACK!! Visualizar el objeto en formato de tabla
```

**NOTA**: al observar el navegador y analizar la conversión que se encuentra en el archivo Bundle.js, se podrá analizar que las interfaces no se muestran, es decir se ignoran, esto se debe a que NO existen en JS. 

### Funciones y sus argumentos :mailbox::love_letter:
Especificando el tipo de datos en parametros y retorno:
``` TypeScript
function sumar (a:number, b:number) : number{
    return a + b;
}

const resultado = sumar(2,3);

console.log("Suma: ",resultado)
```

Especificando el tipo de datos unicamente en los parametros:
``` TypeScript
function multiplicar (a:number, b:number){
    return (a * b).toString();
}

const resultado2 = multiplicar(2,3);

console.log("Multiplicacion: ",resultado2)
```

Arrow functions :twisted_rightwards_arrows:

``` TypeScript
//Parametros y retorno de tipo any, inferencia de tipos
const sumarFlecha = (a, b) =>{
    return a + b;
}

//Parametros y retorno de tipo number, tipado estricto
const sumarFlecha2 = (a:number, b:number):number =>{
    return a + b;
}
```

Funciones con parametros opcionales :black_square_button::white_square_button:
``` TypeScript 
function calcularPotencia (numero:number, coeficiente?:number, base:number=8):number{
    return Math.pow(base,numero);
}

let potencia: number = calcularPotencia(2,6) //tercer atributo es definido en caso de no ser enviado
let potencia2: number = calcularPotencia(4) //segundo atributo es opcional
let potencia3: number = calcularPotencia(2,6,8) //si se quiere cambiar la base se debe enviar el coeficiente

console.log("El valor de la potencia es: ", potencia)
console.log("El valor de la potencia 1 es: ", potencia2)
console.log("El valor de la potencia 2 es: ", potencia3)
```

### Funciones con objetos como argumentos

``` TypeScript
//Se parte de una interfaz
interface PersonajeLOR{
    nombre: string;
    pv: number;
}

//se recomienda el uso de constantes en objetos que no cambian de valor, lo cual
//permite hacerlas variables más livianas para JS

const hobbit: PersonajeLOR = {
    nombre: "Hobbit",
    pv: 100
}

function curarPersonaje(personaje:PersonajeLOR, puntosVida:number): void{
    personaje.pv += puntosVida;
    console.log(personaje)
}

curarPersonaje(hobbit,20);
```

Sin embargo una mejor opción es definir la función curarPersonaje() en el interior de la interfaz:

``` TypeScript
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
```

### Tarea sobre interfaces y objetos resuelta :white_check_mark:

Alternativa :one:

``` TypeScript
interface SuperHeroe{
    nombre:string,
    edad:number,
    direccion:{
        calle:string,
        pais:string,
        ciudad:string
    },
    mostrarDireccion: () => string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais:'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direcccion = superHeroe.mostrarDireccion();
console.log("La dirección de", superHeroe.nombre, "es",direcccion);
```

Alternativa :two: (más interesante) :bulb:

``` TypeScript
interface Direccion{
    calle:string,
    pais:string,
    ciudad:string
}

interface SuperHeroe{
    nombre:string,
    edad:number,
    direccion:Direccion,
    mostrarDireccion: () => string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais:'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direcccion = superHeroe.mostrarDireccion();
console.log("La dirección de", superHeroe.nombre, "es",direcccion);

```



### Desestructuración de arreglos y objetos

### Importaciones y exportaciones

### Clases, constructores

### Tipos genéricos

### Decoradores

### Encadenamiento opcional

