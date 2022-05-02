/*======CLASES BASICAS======*/

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
            super(nombreReal, "NY, USA");
        }
}
const ironman = new Heroe("Iron Man", 50, "Tony Stark"); 

console.log(ironman)
