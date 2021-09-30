const articulos = JSON.parse(datos);



const mostrarCatalogo = () =>{
    let catalogo = "Nuestros productos: \n"
    articulos.forEach((articulos) => {
        catalogo += + articulos.id + "-" + articulos.nombre + "\n";
    });
    catalogo += (articulos.length + 1) + "-Ver carrito" + "\n";
    catalogo += (articulos.length + 2) + "-Salir";
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
    
    if(stockDisponible(cantidad,found.stock)){
        
        
        carrito = localStorage.getItem('carrito');
    
        if(!carrito){
            carrito = [];
        }else{
            carrito = JSON.parse(carrito);
        }

        let items = {cant:cantidad, precio: cantidad * found.precio, found};

        carrito.push(items);
        carrito = JSON.stringify(carrito)
        localStorage.setItem('carrito',carrito)
    
        articulos[productos-1].stock -= cantidad;
        alert(`${found.nombre} ha sido agregado a la compra`)
    }
}


const realizarCompra = () =>{
        let verCarrito = localStorage.getItem('carrito');
        verCarrito = JSON.parse(verCarrito)
        if(!verCarrito){
            return false;
        }else{
            let mostrarDatos = "";
            let compraTotal = 0;
            verCarrito.forEach(item =>{
                mostrarDatos += `Producto: ${item.found.nombre} Cantidad ${item.cant} Precio ${item.precio} \n`
                compraTotal += item.precio;
            });
            mostrarDatos += `El precio total es ${compraTotal}`
            alert(mostrarDatos)
        }
        localStorage.clear();

    }; 


const verCompra = () =>{
        let verCarrito = localStorage.getItem('carrito');
        verCarrito = JSON.parse(verCarrito);
        if(!verCarrito){
            alert("Aun no tienes productos agregados al carrito");
        }else{
            let mostrarDatos = "";
            verCarrito.forEach(item =>{
                mostrarDatos += `Producto: ${item.found.nombre} Cantidad ${item.cant} Precio ${item.precio} \n`
            });
            alert(mostrarDatos);
        }
    };