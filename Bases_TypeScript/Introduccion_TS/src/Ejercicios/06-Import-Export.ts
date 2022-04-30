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