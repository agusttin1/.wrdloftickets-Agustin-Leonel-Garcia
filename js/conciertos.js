

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////Filtrado de las entradas, en base a su categoria y pais del artista. funciones aplicadas en onclicks dentro del html Y estructura con DOM de los filtros ///////////////////////////////

const callContAllFiltros = document.getElementById(`entradas`)

function contenedorFiltros (){
    let estructuraFiltros = document.createElement(`div`)
    estructuraFiltros.innerHTML=`
    
    <div class="titulo-filtros">
        <h3>Filtros Por Categoria</h3>
        </div>
        <div class="row cont-buttons">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 allFiltrosCont " >
        <button class="button-value" onclick="filtrosEntradas('All')">All</button>
        <button class="button-value" onclick="filtrosEntradas('Trap')">Trap</button>
        <button class="button-value" onclick="filtrosEntradas('Hip-Hop/Rap')">Hip-Hop/Rap</button>
        <button class="button-value" onclick="filtrosEntradas('Alternativa/Independiente')">Alternativa/Independiente</button>
        <button class="button-value" onclick="filtrosEntradas('Rock')">Rock</button>
        </div>
        <div class="col-sm-1"></div>
        </div>
        <div class="titulo-filtros">
        <h3>Filtros Por Pais del Artista</h3>
        </div>
        <div class="row cont-buttons">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 allFiltrosCont " >
        <button class="button-value" onclick="filtrosEntradas('All')">All</button>
        <button class="button-value" onclick="filtrosEntradas('Ingles')">Ingles</button>
        <button class="button-value" onclick="filtrosEntradas('Argentino')">Argentino</button>
        <button class="button-value" onclick="filtrosEntradas('EEUU')">EEUU</button> 
        
        </div>

        <div class="col-sm-1"></div>
        </div>
        </div>
        
    `
    callContAllFiltros.appendChild(estructuraFiltros)
}

function filtrosEntradas(value) {
let callButtonsCategoria = document.querySelectorAll(".button-value");

callButtonsCategoria.forEach((callButtonsARecorrer) => {
    (value == callButtonsARecorrer.innerText) ? callButtonsARecorrer.classList.add(`active`) : callButtonsARecorrer.classList.remove(`active`)

});

let elements = document.querySelectorAll(".card-item");
elements.forEach((elemento) => {
    (value == `All`) ? elemento.classList.remove(`hide`) : (elemento.classList.contains(value)) ? elemento.classList.remove(`hide`) : elemento.classList.add(`hide`)

/* value == `All`) ? elemento.classList.remove(`hide`) : (elemento.classList.contains(value)) ? elemento.classList.remove(`hide`) : elemento.classList.add(`hide`) */

});
}

//funcion anonima para que cargue automaticamente los productos a partir de los filtros
window.onload = () => {
filtrosEntradas("All");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Inyeccion HTML desde js para mostrar las entradas disponibles Y evento en el boton de su card///////////////////////////////


function entradasMostrar() {
    const callElementEntradas = document.getElementById(`contenedor-productos`);
    
    for (const datosEntrada of allEntradas) {
        let columnsEntradas = document.createElement(`div`);
        columnsEntradas.id += `entrada-${datosEntrada.id}`;
        columnsEntradas.className = `${datosEntrada.categoria}  hide card-item ${datosEntrada.pais}`;
        columnsEntradas.innerHTML = `
                    <div class="card"  style="width: 18rem;">
                    <img src=${datosEntrada.img} class="card-img-top" alt="...">
                    <div class="card-body">
                    <p>
                        <span>${datosEntrada.fecha}</span>
                        <span>· ${datosEntrada.ciudad}</span>
                    </p>
                    <p class="card-text">${datosEntrada.descripEntrada} </p>
                    <button  id="columna-${datosEntrada.id}" class="btn btn-primary">Agregar tickets</button>
                    </div>
                    <span class="price-event">$ ${datosEntrada.precio}</span>
                    <div class="pais-artist">
                    <img src=${datosEntrada.paisArtistaImg} alt="">
                    </div>
                </div>`;
    
        callElementEntradas.appendChild(columnsEntradas);
    
        let callBtnAgregar = document.getElementById(`columna-${datosEntrada.id}`)
    
        callBtnAgregar.addEventListener(`click`,()=>{
        
            guardarEntradasEnCarrito(datosEntrada.id)
            actualizarEntradaStorage()
            mostrarToastConfirmacion(`Se ha agregado una entrada para ver a ${datosEntrada.nombreArtista} al carrito`,`ticketAgregado`)
        })
    
        callContadorCarrito.innerText=carrito.length
    }
    }


function guardarEntradasEnCarrito(entradaId){

    const existeEntrada = carrito.some(entradaIdRecorrer => entradaIdRecorrer.id === entradaId)

    if(existeEntrada){
        carrito.map(encontrarId =>{
            if(encontrarId.id === entradaId){
                encontrarId.cantidad ++
            }
        })
    }else{
        const itemEntrada = allEntradas.find((entrada)=> entrada.id === entradaId)
        carrito.push(itemEntrada)
    } 


carritoFuncional()
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////MODAL + CARRITO FUNCIONAL(ONCLICKS DENTRO DEL CARRITO) ///////////////////////////////

const callContAllModal = document.getElementsByClassName(`modal-contenedor`)[0]
const callBtnCerrarModal = document.getElementById(`carrito-cerrar`)
const callBtnAbrirModal = document.getElementById(`carrito`)
const callModalCarrito = document.getElementsByClassName(`modal-carrito`)[0]
const callBtnVaciarCarrito = document.getElementById(`vaciar-carrito`)

const callBtnComprar = document.getElementById(`compra-carrito`)

callBtnAbrirModal.addEventListener(`click`, ()=>{
    callContAllModal.classList.toggle(`nohide`)
})
callBtnCerrarModal.addEventListener(`click`, ()=>{
    callContAllModal.classList.toggle(`nohide`)
})
callContAllModal.addEventListener(`click`, ()=>{
    callContAllModal.classList.toggle(`nohide`)

})
callBtnVaciarCarrito.addEventListener(`click`,()=>{

if(carrito.length){

Swal.fire({
icon:'question',
title: 'Estas seguro que deseas vaciar el carrito?',
showCancelButton: true,
confirmButtonText: 'Vaciar Carrito',
cancelButtonText:'Cancelar'
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
if (result.isConfirmed) {
    carrito.length=0
    carritoFuncional()
    actualizarEntradaStorage()
    mostrarToastConfirmacion(`Se ha vaciado todo el carrito`,`ticketAgregado`)
} 
})
}else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El carrito esta vacio agregue al menos una entrada, para poder vaciarlo.'
        
    })
}  

})

/* EVENTO PARA EVITAR QUE AL HACER CLICK DENTRO DEL MODAL, DESAPAREZCA */
callModalCarrito.addEventListener(`click`, (e)=>{
e.stopPropagation()
})


const callContInModalCarrito=document.getElementById(`carrito-contenedor`)

const callContadorCarrito = document.getElementById(`contador-carrito`)

const callPrecioTotal = document.getElementById(`precioTotalEntradas`)

const carritoFuncional = () =>{

callContInModalCarrito.innerHTML=``

    carrito.forEach((dataOfCarrito)=>{
        let contInCarrito = document.createElement(`div`);
        contInCarrito.className=(`entradas-in-carrito`)
            contInCarrito.innerHTML = `
            
                            <div class="cont-img">
                            <img src=${dataOfCarrito.img} alt="">
                            </div>
                            <div class="body-info-modal">
                            <p class="card-text">${dataOfCarrito.descripEntrada}</p>
                            <p class="cantidad-entrada">Cantidad: ${dataOfCarrito.cantidad}</p>
                            </div>
                            <span class="price-event-modal">$ ${dataOfCarrito.precio}</span>
                            <button class="btn-eliminar-entrada" onclick="eliminarItem(${dataOfCarrito.id})"><i class="fas fa-trash-alt"></i></button>
                            `;

                            callContInModalCarrito.appendChild(contInCarrito)
                            actualizarEntradaStorage()

    })
    console.log(carrito)

callContadorCarrito.innerText=carrito.length
callPrecioTotal.innerText = carrito.reduce((acc,el)=> acc + el.cantidad * el.precio,0).toFixed(2)

}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////POP UP PARA MOSTRAR CUANDO SE AGREGA UNA ENTRADA AL CARRITO , CUANDO SE ELIMINA Y CUANDO SE VACIA EL CARRITO ///////////////////////////////

function mostrarToastConfirmacion(msj,classAAgregar){
    Toastify({
        text:msj,
        duration: 3000, 
        close: true,
        gravity: "bottom", 
        position: "right", 
        className: classAAgregar
    }).showToast();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////FUNCION PARA PODER ELIMINAR ENTRADAS DENTRO DEL CARRITO + LOCALSTORAGE DE LAS ENTRADAS ///////////////////////////////

const eliminarItem = (id)=>{
    let borrarEntrada = carrito.find((entrada) => entrada.id ===id)
    let indiceABorrar = carrito.indexOf(borrarEntrada)
    carrito.splice(indiceABorrar,1)
carritoFuncional()
actualizarEntradaStorage() 
mostrarToastConfirmacion(`Se ha eliminado una entrada`,`ticketEliminado`)

}

function actualizarEntradaStorage() {
    let entradasJSON = JSON.stringify(carrito);
    localStorage.setItem("key-entrada", entradasJSON);
}

function obtenerEntradaStorage() {
    let entradasJSON = localStorage.getItem("key-entrada");
      if (entradasJSON) {
    carrito = JSON.parse(entradasJSON);
carritoFuncional()
    }  

}  

function main() {
consularEntradasJson()/// funcion traida desde stockEntradas.js
contenedorFiltros()
obtenerEntradaStorage() 

}

main();
