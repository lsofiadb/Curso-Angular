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

### Desestructuración de arreglos y objetos :wrench::hammer:

#### Desestructuración de objetos :mag:

``` TypeScript
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
```
El problema surge cuando se quiere acceder a las propiedades del objeto:


``` TypeScript
//Para evitar repetir tantas veces el nombre del objeto, como se observa a continuación, es conveniente realizar la desestructuración
console.log("El volumen es", reproductor.volumen)
console.log("El segundo es", reproductor.segundo)
console.log("La cancion es", reproductor.cancion)
console.log("El autor es", reproductor.detalles.autor)
console.log("El año de lanzamiento es", reproductor.detalles.anio)
```

Al solucionar el problema:

``` TypeScript
//Surge la desestructuración de objetos, en donde a través de constantes
//se almacenan los valores que toman las propiedades de los objetos
//con el fin de poder utilizarlas directamente, teniendo un codigo más limpio
const {volumen, segundo, cancion, detalles} = reproductor
const {autor, anio} = detalles
console.log("El volumen es", volumen)
console.log("El segundo es", segundo)
console.log("La cancion es", cancion)
console.log("El autor es", autor)
console.log("El año de lanzamiento es", anio)
//este metodo es el más claro y conveniente
```

Sin embargo existen otras alternativas:

``` TypeScript
//es posible realizarlo en una sola linea
const {volumen, segundo, cancion, detalles:{autor,anio}} = reproductor
//const {autor, anio} = detalles
console.log("El volumen es", volumen)
console.log("El segundo es", segundo)
console.log("La cancion es", cancion)
console.log("El autor es", autor)
console.log("El año de lanzamiento es", anio)
//sin embargo este método puede generar confusiones al pensar que por ejemplo detalles de tipo autor o anio
```
Otra alternativa en caso de presentar posibles conflictos:

``` TypeScript
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
```

**NOTA** :microscope: el orden de los parametros en la desestructuración de objetos NO importa, ya que se maneja con el nombre exacto de las propiedades. 

#### Desestructuración de arreglos :mag:

``` TypeScript
const dbz: string [] = ["Goku", "Vegeta", "Trunks", "Goten"]
const [p1, p2, p3, p4] = dbz

console.log("El personaje 1 es", p1)
console.log("El personaje 2 es", p2)
console.log("El personaje 3 es", p3)
console.log("El personaje 4 es", p4)
```

``` TypeScript
//si solo se necesita una posicion en especifico
const [, p2, , ] = dbz
console.log("El personaje 2 es", p2)
```

**NOTA** :microscope: el orden de los parametros en la desestructuración de arreglos SI importa, ya que se esta haciendo una asignación por cada posición consecutiva del arreglo. 

#### Desestructuración de argumentos :mag:

``` TypeScript
//partiendo de una interfaz
interface Producto{
    descripcion: string;
    precio: number;
}

const telefono:Producto = {
    descripcion: "Samsung Galaxy S21",
    precio: 250
}

const tableta: Producto = {
    descripcion: "iPad Air",
    precio: 320
}

//calcular Impuesto sobre venta
function calcularISV(productos: Producto []){

    let total = 0;
    productos.forEach( (producto) => {
        total += producto.precio; //nuevamente se esta repitiendo código innecesariamente
    });
    return total*0.15;
}

const articulos = [telefono, tableta];

const isv = calcularISV(articulos);

console.log('ISV',isv)
```

La manera de resolver el caso anterior es a través de desestructuación de argumentos, lo cual permite acceder a los atributos de cada elemento del array directamente al invocar el nombre de la propiedad


``` TypeScript
function calcularISV(productos: Producto []):[number,number]{

    let total = 0;
    productos.forEach( ({precio}) => { //callback
        total += precio; //se soluciona el problema a través de desestructuracion
    });
    return [total, total*0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calcularISV(articulos);

console.log('Total',total)
console.log('ISV',isv)
```

### Importaciones y exportaciones

Las exportaciones permiten hacer una interface o elemento de un archivo como una función, visible para los demás, de tal forma que es posible importarlo en donde sea necesario, beneficiando la estructura  y reusabilidad del código fuente. 

Para realizar la exportación:

``` TypeScript
export interface Producto{
    descripcion: string;
    precio: number;
}
```

``` TypeScript
export function calcularISV(productos: Producto []):[number,number]{

    let total = 0;
    productos.forEach( ({precio}) => { //callback
        total += precio; //se soluciona el problema a través de desestructuracion
    });
    return [total, total*0.15];
}

```

Mientras que para la importación:

``` TypeScript
CTRL + . //Permite que VSC sugiera la importación del elemento que se necesita a través de desestructuración

import { Producto, calcularISV } from './05-Desesctructuracion-Argumentos';

const carritoCompras: Producto [] =[
    {
        descripcion:"iPhone 11",
        precio: 1000
    },
    {
        descripcion:"Xiaomi redmi note 7",
        precio:200
    }
]

const [total, isv] = calcularISV(carritoCompras);

console.log("Total", total);
console.log("ISV", isv);
```

**NOTA** :dart: algo importante a considerar para el ejemplo trabajado en clase, es que al importar una interfaz, únicamente se ejecutará esa sección de código del archivo en donde se encontraba definida, caso distinto si se trata de una función ya que en esa situación se ejecutará todo el código fuente que se encuentre despues. 

### Clases, constructores

Si bien las clases son similares a las interfaces, su principal diferencia consiste en que en las clases a parte de definir las propiedades que tendrá un objeto, tambien permiten definir e implementar métodos, mientras que en las interfaces únicamente se puede establecer su firma. 

``` TypeScript
class Heroe {
    private alterEgo: string; //atributo accesible dentro de esta clase
    public edad: number; //atributo accesible fuera de la clase
    static nombreReal: string; //atributo accesible sin necesidad de crear una instancia
}

const spiderman = new Heroe(); //instancia de Heroe sin constructor
```

El constructor es una función que se va a llamar cuando se crea una instancia de una clase con el fin de inicializar los valores de los atributos:

``` TypeScript
class Heroe {
    alterEgo: string; 
    edad: number; 
    nombreReal: string; //atributo sin modificador de acceso, por defecto es público

    constructor(alterEgo:string, edad:number, nombreReal:string){
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
}
const spiderman = new Heroe("Spiderman", 25, "Peter Parker"); 

console.log(spiderman)
```

Sin embargo cuando aumenta la cantidad de atributos se vuelve una tarea tediosa inicializar uno a uno dentro del constructor, por ello existe una alternativa más rápida:

``` TypeScript
class Heroe {
    
    constructor(
        public alterEgo:string, 
        private edad:number,
        private nombreReal?:string)
        {}
}
const ironman = new Heroe("Iron Man", 50, "Tony Stark"); 

console.log(ironman)

```

Para extender de una clase el procedimiento es similar a la programación OO en lenguajes como Java:

``` TypeScript
class Persona {
    constructor(public nombre: string, public direccion: string){

    }
}

class Heroe extends Persona{
    
    constructor(
        public alterEgo:string, 
        private edad:number,
        private nombreReal?:string)
        {
            super(nombreReal, "NY, USA"); //llamado al constructor de la clase padre
        }
}
const ironman = new Heroe("Iron Man", 50, "Tony Stark"); 

console.log(ironman)
```


### Tipos genéricos

``` TypeScript

```

### Decoradores

``` TypeScript

```

### Encadenamiento opcional

``` TypeScript

```