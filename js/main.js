alert(" Bienvenido a nuestra tienda !")

do{
    let productos = mostrarCatalogo();
    if(productos === articulos.length +1){
        verCompra()
    } else{    
        if(productos === articulos.length + 2) break;
        let cant = parseInt(prompt(cantidad));
        
        canastaDeCompras(productos,cant);
    }
    
    respuesta = prompt('¿Quiere agregar mas productos?')


}while(respuesta === 'Si' || respuesta === "si");


realizarCompra();


alert('Muchas gracias por su compra!')

const arrayProductos = JSON.parse(datos)

let contenedor = document.createElement('div');

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    arrayProductos.forEach((p) => {
        let contenedorArticulos = document.createElement('div')
        contenedorArticulos.innerHTML = `
                    <h1>${p.nombre}</h1>
                    <h2> Precio $ ${p.precio}</h3>
                    <h3> Stock ${p.stock}</h3>
        `;
        contenedor.appendChild(contenedorArticulos);
    });

    document.body.appendChild(contenedor);
})