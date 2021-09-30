const mostrarCatalogo = () =>{
    let catalogo = "Nuestros productos: \n"
    articulos.forEach((articulos) => {
        catalogo += + articulos.id + "-" + articulos.nombre + "\n";
    });
    catalogo += + (articulos.length + 1) + "-Ver carrito" + "\n";
    catalogo += + (articulos.length + 2) + "-Salir";
    return parseInt(prompt(catalogo));
};


const stockDisponible = (cantidad,stock) => {
    if(cantidad > stock){
    alert(`No hay cantidad suficiente en stock, el disponible es ${stock}`);
    return false;
    }
    else return true
}


const canastaDeCompras = (productos,cantidad) => {
    const found = articulos.find(articulos => articulos.id === productos)
    
    carrito = localStorage.getItem('total')
    
    if(!carrito){
        carrito = []
    }else{
        carrito = JSON.parse(total);
    }

    let items = {cant:cantidad, precio: cantidad * found.precio, found};

    carrito.push(items);
    carrito = JSON.stringify(total)
    localStorage.setItem('total',total)
    
    articulos[productos-1].stock -= cantidad;
    alert(`${found.nombre} ha sido agregado a la compra`)
    }


    const mostrarCompra = () =>{
        let verCarrito = localStorage.getItem('total');
        verCarrito = JSON.parse(verCarrito)
        if(!verCarrito){
            return false;
        }else{
            let mostrarDatos = "";
            let compra = 0;
            verCarrito.forEach(item =>{
                mostrarDatos+= `Producto: ${item.found.nombre} Cantidad ${item.cant} Precio ${item.precio} \n`
                compra += item.precio;
            });
            verCarrito += `El precio total es ${total}`
            alert(verCarrito)
        }
        localStorage.clear();

    }; 


    const verCompra = () =>{
        let verCarrito = localStorage.getItem('total');
        verCarrito = JSON.parse(verCarrito)
        if(!verCarrito){
            alert("Aun no tienes productos agregados al carrito");
        }else{
            let mostrarDatos = "";
            
            verCarrito.forEach(item =>{
                mostrarDatos+= `Producto: ${item.found.nombre} Cantidad ${item.cant} Precio ${item.precio} \n`
            });
            alert(verCarrito)
        }
    }; 