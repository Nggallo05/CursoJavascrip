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

let titulo = document.createElement("h1");

titulo.textContent = "BIENVENIDOS A NUESTRA TIENDA ONLINE!";

document.body.appendChild(titulo);

mostrarProductos(datos); { 
    const mercaderia = document.createElement("div")
    mercaderia.classList.add("mercaderia");

    const nombreMercaderia = document.createElement("h3");
    nombreMercaderia.textContent = `${articulos.nombre}`
    mercaderia.body.appendChild(mercaderia)
}
