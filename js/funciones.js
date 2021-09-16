

const stockDisponible = (cantidad,stock) => {
    if(cantidad > stock){
    alert(`No hay cantidad suficiente en stock, el disponible es ${stock}`);
    return false;
    }
    else return true
}
const CanastaDeCompras = (productos ,cantidad) => {
    switch(productos){
        case 1:
            if(stockDisponible(cantidad,stockRemeras)){
                total += (cantidad*precioRemeras)
                stockRemeras -= cantidad
                alert('Remera agregada a la compra')
            }
            break;
        
        case 2:
            if(stockDisponible(cantidad,stockPantalones)){
                total += (cantidad*stockPantalones)
                stockPantalones -= cantidad
                alert('Pantalon agregado a la compra')
            }
            break;

        case 3:
            if(stockDisponible(cantidad,stockZapatillas)){
                total += (cantidad*stockZapatillas)
                stockZapatillas -= cantidad
                alert('Zapatillas agregadas a la compra')
            }
            break;

        default:
            alert('Opcion no valida')
    }
}
