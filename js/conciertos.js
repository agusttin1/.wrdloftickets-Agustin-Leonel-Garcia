/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Inyeccion HTML desde js para mostrar las entradas disponibles Y evento en el boton de su card///////////////////////////////

let carrito = [];
const callBtnVaciar = document.getElementById(`btn-vaciar-modal`)

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
                <button id="btn-comprar-${datosEntrada.id}" class="btn btn-primary">Agregar tickets</button>
                </div>
                <span class="price-event">$ ${datosEntrada.precio}</span>
                <div class="pais-artist">
                <img src=${datosEntrada.paisArtistaImg} alt="">
                </div>
            </div>`;

    callElementEntradas.appendChild(columnsEntradas);

    let callBtnCompra = document.getElementById(
    `btn-comprar-${datosEntrada.id}`
    );

    callBtnCompra.addEventListener(`click`, () => {
    carrito.push({
        id: datosEntrada.id,
        img: datosEntrada.img,
        descripEntrada: datosEntrada.descripEntrada,
        precio: datosEntrada.precio,
        cantidad:datosEntrada.cantidad
    });
      //console.log(carrito)
    const callContadorCarrito = document.getElementById(`contador-carrito`);
    callContadorCarrito.innerText = carrito.length;

actualizarEntradaStorage()

    });
}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Filtrado de las entradas, en base a su categoria y pais del artista. funciones aplicadas en onclicks dentro del html ///////////////////////////////

function filtrosEntradas(value) {
let callButtonsCategoria = document.querySelectorAll(".button-value");

callButtonsCategoria.forEach((callButtonsARecorrer) => {
    if (value == callButtonsARecorrer.innerText) {
    callButtonsARecorrer.classList.add("active");
    } else {
    callButtonsARecorrer.classList.remove("active");
    }
});

let elements = document.querySelectorAll(".card-item");
elements.forEach((elemento) => {
    if (value == "All") {
    elemento.classList.remove("hide");
    } else {
    if (elemento.classList.contains(value)) {
        elemento.classList.remove("hide");
    } else {
        elemento.classList.add("hide");
    }
    }
});
}

//funcion anonima para que cargue automaticamente los productos a partir de los filtros
window.onload = () => {
filtrosEntradas("All");
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Carrito funcional mediante un onclick incorporado en el html , onclicks en el footer del modal y en el el body modal dentro de las cards///////////////////////////////


   
    

function carritoFuncional() {
    const callContModalCarrito = document.getElementById(`cont-modal-eventos`);


            callContModalCarrito.innerHTML = ``;

            callContModalCarrito.style.display = `block`;
        
            const headerModal = document.createElement(`div`);
            headerModal.innerHTML = `
                        <div class="cont-header-modal d-flex justify-content-between align-items-center">
                        <h1 class="title-modal">Bienvenido al Carrito</h1>
                        <span class="boton-salir-modal mr-2" id="boton-salir-x">X</span>
                    </div>
                        `;
            callContModalCarrito.appendChild(headerModal);
        
            const callXBotonSalir = document.getElementById(`boton-salir-x`);
            callXBotonSalir.addEventListener(`click`, () => {
            callContModalCarrito.style.display = `none`;
            });
        
            for (let dataOfCarrito of carrito) {
            let contInCarrito = document.createElement(`div`);
            contInCarrito.innerHTML = `
                            <div class="body-modal">
                            <div class="cont-img">
                            <img src=${dataOfCarrito.img} alt="">
                            </div>
                            <div class="body-info-modal">
                            <p class="card-text">${dataOfCarrito.descripEntrada}</p>
                        
                            </div>
                            <span class="price-event-modal">$ ${dataOfCarrito.precio}</span>
                            <button class="btn-eliminar-entrada" onclick="eliminarItem(${dataOfCarrito.id})"><i class="fas fa-trash-alt"></i></button>
                        
                            </div>
                            `;
        
            callContModalCarrito.appendChild(contInCarrito);
            }
            
            const callContadorCarrito = document.getElementById(`contador-carrito`);
            callContadorCarrito.innerText = carrito.length;
        
            const accTotalAPagar = carrito.reduce((acc, el) => acc + el.precio , 0);
        
            const totalForBuy = document.createElement(`div`);
            totalForBuy.innerHTML = `
                        <div class="footer-modal">
                        <div class="cont-total-modal">
                        <p>el total a pagar es: $${accTotalAPagar.toFixed(2)}</p>
                        </div>
                        <div class="cont-botones-modal mt-2">
                        <button id="btn-volver-modal" class="btn ">Volver</button>
                        <button id="btn-pagar-modal" class="btn "><a href="../page/finalizarCompra.html">Finalizar Compra</a></button>
                        <button id="btn-vaciar-modal" onclick="eliminarEntradaCarrito()"class="btn ">vaciar carrito</button>
                        </div>
                        </div>
                        `;
            callContModalCarrito.appendChild(totalForBuy);
        
            const callBtnVolver = document.getElementById(`btn-volver-modal`);
            callBtnVolver.addEventListener(`click`, () => {
            callContModalCarrito.style.display = "none";
            });



}



function eliminarEntradaCarrito(){
carrito.length=0
carritoFuncional()
actualizarEntradaStorage()
} 

const eliminarItem = (id)=>{
    let borrar = carrito.find((producto) => producto.id ===id)
    let inidce = carrito.indexOf(borrar)
    carrito.splice(inidce,1)
    carritoFuncional()
    actualizarEntradaStorage()
}

function actualizarEntradaStorage() {
    let productosJSON = JSON.stringify(carrito);
    localStorage.setItem("productos", productosJSON);
}

function obtenerEntradaStorage() {
    let productosJSON = localStorage.getItem("productos");
    if (productosJSON) {
    carrito = JSON.parse(productosJSON);
    carritoFuncional();
    }
}


function main() {
entradasMostrar();
obtenerEntradaStorage()

}

main();
