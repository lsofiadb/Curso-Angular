/*======CLASES BASICAS======*/

class Heroe {
    
    constructor(
        public alterEgo:string, 
        private edad:number,
        private nombreReal?:string)
        {}
}
const ironman = new Heroe("Iron Man", 50, "Tony Stark"); 

console.log(ironman)
