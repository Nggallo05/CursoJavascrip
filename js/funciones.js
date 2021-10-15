class articulo {
    constructor (genero,nombre,precio,stock){
        this.genero = genero;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

let mostrarCreador = document.getElementById("mostrarArt");
mostrarCreador.addEventListener("click", mostrarFormulario);

let formularioArticulos = document.getElementById("formularioArticulos");
formularioArticulos.addEventListener("submit",guardarArticulos)


function cargarArticulos(){
    let listadoArticulos = JSON.parse(localStorage.getItem("listadoArticulos"));
    if(listadoArticulos == null) {
        return [];
    }
    return listadoArticulos;
}

function guardarListado(listadoArticulos) {
    localStorage.setItem("listadoArticulos", JSON.stringify(listadoArticulos));
    mostrarListado(listadoArticulos);
}

function guardarArticulos(e) {
    e.preventDefault();
    let genero = document.querySelector("#genero").value;
    let nombre = document.querySelector("#nombre").value;
    let precio = document.querySelector("#precio").value;
    let stock = document.querySelector("#stock").value;

    let listadoArticulos = cargarArticulos();

    listadoArticulos.push(new articulos(genero, nombre, precio, stock));

    guardarListado(listadoArticulos);

    document.getElementById('formularioArticulos').reset();
}


function armarArticulo (elemento) {
    const articulo = document.createElement("div");
    articulo.classList.add("articulo");

    const genero = document.createElement("h3");
    genero.textContent = `${elemento.genero}`
    articulo.appendChild(genero);

    const nombreArticulo = document.createElement("h4");
    nombreArticulo.textContent = `${elemento.nombre}`
    articulo.appendChild(nombreArticulo);

    const precio = document.createElement("div");
    precio.textContent = `$ ${elemento.precio}`
    articulo.appendChild(precio);

    const stock = document.createElement("div");
    stock.textContent = `Stock ${elemento.stock}`
    articulo.appendChild(stock);
    return articulo;
}

function mostrarFormulario() {
    document.querySelector("#menuCreador").classList.toggle("oculto");
}

function mostrarListado (listadoArticulos) {
    let listado = document.getElementById ("listado");
    listado.textContent = "";
    listadoArticulos.map (elemento => {
        listado.appendChild(armarArticulo(elemento))
    });
}

mostrarListado(cargarArticulos())