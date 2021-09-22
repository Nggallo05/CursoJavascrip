
const catalogo = `Que producto desea comprar : 
1- Remeras
2- Pantalones
3- Zapatillas
4- Accesorios
5- Ninguno, salir
`;

const cantidad = '¿Que cantidad desea comprar?';


class Articulos {
    constructor (nombre,precio,stock){
        this.nombre = nombre.toUpperCase();
        this.precio = parseInt(precio);
        this.stock = stock; 
    }
    CalculoPrecio() {
        this.precio = this.precio*cantidad;
    }
    
    CalculoStock() {
        this.stock = this.stock - cantidad;
    }
}

let remeras = new Articulos ('Remeras',1900,10);
let pantalones = new Articulos ('Pantalones',2700,8);
let zapatillas = new Articulos ('Zapatillas',4100,6);
let accesorios = new Articulos ('Accesorios',500,20);

console.log(remeras,pantalones,zapatillas,acceso)

/*Lista de precios de los productos */

const precioRemeras = 1900;
const precioPantalones = 2700;
const precioZapatillas = 4100;

/*Stock de los productos */

let stockRemeras = 10;
let stockPantalones = 8;
let stockZapatillas = 6;

let total = 0;
let respuesta = 'Si';



