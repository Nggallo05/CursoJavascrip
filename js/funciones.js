

const stockDisponible = (cantidad,stock) => {
    if(cantidad > stock){
    alert(`No hay cantidad suficiente en stock, el disponible es ${stock}`);
    return false;
    }
    else return true
}

const mostrarCatalogo = () =>{
    let catalogo = "Nuestros productos: \n"
    articulos.forEach((articulos) => {
        catalogo += + articulos.id + "-" + articulos.nombre + "\n";
    });
    catalogo += + (articulos.length + 1) + "-Salir";
    return parseInt(prompt(catalogo));
};


const CanastaDeCompras = (productos,cantidad) => {
    const found = articulos.find(articulos => articulos.id === productos)
    if(stockDisponible(cantidad, found.stock)){
        total += (cantidad * found.precio);
                articulos[productos-1].stock -= cantidad;
                alert(`${found.nombre} ha sido agregado a la compra`)
    }
}