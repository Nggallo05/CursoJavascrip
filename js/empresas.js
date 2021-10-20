const empresas = [
{nombre: 'Zion S.R.L', cuit:30-52539008-6, direccion: 'Av.Libertador 1247'},
{nombre: 'Superlogico S.A', cuit:30-45879800-3, direccion: 'Pueyrredon 1558'},
{nombre: 'Finisterre S.A.S', cuit:30-25147565-5, direccion: 'Belgrano 237'},
{nombre: 'Bambi S.R.L', cuit:30-12489754-1, direccion: 'Pellegrini 635'},
];

/*let verEmpresas = document.getElementById("mostrarEmpresas");
verEmpresas.addEventListener("click",listaEmpresas)*/


/*function listaEmpresas() {
    document.querySelector("#verEmpresas").classList.toggle("oculto");
}*/

for (const empresa of empresas) {
    $('#verEmpresas').append(`
    <div>
        <h2> Nombre: ${empresa.nombre}</h2>
        <b> Cuit: ${empresa.cuit} </b>
        <p> Direccion ${empresa.direccion} </p>
        
    </div>`)
}

$('#mostrarEmpresas').click (() => {
    $('#verEmpresas').toggle('slow');
} )

