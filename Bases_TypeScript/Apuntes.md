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

### Objetos, arreglos e interfaces

### Funciones y sus argumentos

### Desestructuración de arreglos y objetos

### Importaciones y exportaciones

### Clases, constructores

### Tipos genéricos

### Decoradores

### Encadenamiento opcional

