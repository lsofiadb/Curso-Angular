/*=======DESESTRUCTURACION DE ARGUMENTOS=======*/
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

