/*==========TIPOS GENERICOS=========*/
function deQueTipoSoy <T> (parametro: T){
    return parametro;
}

let soyUnNumero = deQueTipoSoy(100)
let soyUnaCadena = deQueTipoSoy("Hola")
let soyUnArray = deQueTipoSoy([1,2,3,4,5,6,7])
let soyExplicito = deQueTipoSoy<boolean>(true)