# Bases fundamentales de TypeScript :bookmark_tabs:
## Introducción

### Tipos básicos 
[Documentacion](https://www.typescriptlang.org/docs/handbook/basic-types.html) referente a los tipos de datos en TS:

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

### Arreglos, objetos e interfaces

#### Arreglos
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

#### Interfaces

Su funcionamiento es similar a las clases de Java, ya que permiten partir de una plantilla para crear objetos posteriormente.

``` TypeScript
interface Personaje {
    nombre: string,
    habilidades: string [],
    puebloNatal?: string, //atributo opcional
    edad: number
}
```

#### Objetos

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

### Funciones y sus argumentos

### Desestructuración de arreglos y objetos

### Importaciones y exportaciones

### Clases, constructores

### Tipos genéricos

### Decoradores

### Encadenamiento opcional

