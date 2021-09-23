const cantidad = '¿Que cantidad desea comprar?';

let articulos = [
    {id:1, nombre: "Remeras", precio: 1900, stock: 20},
    {id:2, nombre: "Pantalones", precio: 2700, stock: 10},
    {id:3, nombre: "Zapatillas", precio: 4100, stock: 9},
    {id:4, nombre: "Accesorios", precio: 700, stock: 25},
];


const descuentoContado = articulos.map(articulos => articulos.precio -=200);

function comparar (a,b){
    return a - b;
}

console.log(descuentoContado.sort(comparar));


let total = 0;
let respuesta = 'Si';



