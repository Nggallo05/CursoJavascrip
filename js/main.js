alert(" Bienvenido a nuestra tienda !")

do{
    let productos = mostrarCatalogo();
    if(productos === articulos.length + 1) break;
    let cant = parseInt(prompt(cantidad))

    CanastaDeCompras(productos,cant);

    respuesta = prompt('¿Quiere agregar mas productos?')


}while(respuesta === 'Si' || respuesta === "si");

if(total > 0){
alert(`El precio de su compra es de $${total}`);
}

alert('Muchas gracias por su compra!')
