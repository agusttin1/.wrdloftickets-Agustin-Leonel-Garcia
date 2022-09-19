
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

              ///////////////////////////////Inyeccion HTML desde js para mostrar las entradas disponibles Y evento en el boton de su card///////////////////////////////

let carrito = []


function entradasMostrar (){

    const callElementEntradas = document.getElementById(`contenedor-productos`)

for (const datosEntrada of allEntradas) {
    let columnsEntradas = document.createElement(`div`)
    columnsEntradas.id += `entrada-${datosEntrada.id}`
    columnsEntradas.className = `${datosEntrada.categoria} ${datosEntrada.pais}`
    columnsEntradas.innerHTML = `
    <div class="card " style="width: 18rem;">
    <img src=${datosEntrada.img} class="card-img-top" alt="...">
    <div class="card-body">
    <p>
        <span>${datosEntrada.fecha}</span>
        <span>· ${datosEntrada.ciudad}Los Ángeles</span>
    </p>
    <p class="card-text">${datosEntrada.descripEntrada} </p>
    <button id="btn-comprar-${datosEntrada.id}" class="btn btn-primary">Agregar tickets</button>
    </div>
    <span class="price-event">$ ${datosEntrada.precio}</span>
    <div class="pais-artist">
    <img src=${datosEntrada.paisArtistaImg} alt="">
    </div>
</div>`

    callElementEntradas.appendChild(columnsEntradas)

    
    let callBtnCompra = document.getElementById(`btn-comprar-${datosEntrada.id}`)

    callBtnCompra.addEventListener(`click`,()=>{
        carrito.push({
            id:datosEntrada.id,
            img:datosEntrada.img,
            descripEntrada:datosEntrada.descripEntrada,
            precio:datosEntrada.precio

        })
        //console.log(carrito)
        const callContadorCarrito = document.getElementById(`contador-carrito`)
        callContadorCarrito.innerText=carrito.length
    })
 
}
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

              ///////////////////////////////Inyeccion HTML desde js para mostrar las entradas disponibles seleccionadas en el carrito Y evento para hacer funcional el carrito///////////////////////////////
              


function carritoFuncional (){
const callCarrito = document.getElementById(`carrito`)
const callContModalCarrito = document.getElementById(`cont-modal-eventos`)


callCarrito.addEventListener(`click`,()=>{

    callContModalCarrito.innerHTML=``

    callContModalCarrito.style.display=`block`

    const headerModal = document.createElement(`div`)
    headerModal.innerHTML=`
    <div class="cont-header-modal d-flex justify-content-between align-items-center">
    <h1 class="title-modal">Bienvenido al Carrito</h1>
    <span class="boton-salir-modal mr-2" id="boton-salir-x">X</span>
    </div>
    `
    callContModalCarrito.appendChild(headerModal)

    const callXBotonSalir = document.getElementById(`boton-salir-x`)
    callXBotonSalir.addEventListener(`click`, ()=>{
        callContModalCarrito.style.display=`none`
        
    })


    for(let dataOfCarrito of carrito){
        let contInCarrito = document.createElement(`div`)
        contInCarrito.innerHTML = `
        <div class="body-modal">
        <div class="cont-img">
        <img src=${dataOfCarrito.img} alt="">
        </div>
        <div class="body-info-modal">
        <p class="card-text">${dataOfCarrito.descripEntrada}</p>
        </div>
        <span class="price-event-modal">$ ${dataOfCarrito.precio}</span>
    
        </div>
        `

        callContModalCarrito.appendChild(contInCarrito)

    }
    
    const accTotalAPagar = carrito.reduce((acc,el) => acc + el.precio,0)

    const totalForBuy = document.createElement(`div`)
    totalForBuy.innerHTML=`
    <div class="footer-modal">
    <div class="cont-total-modal">
    <p>el total a pagar es: $${accTotalAPagar.toFixed(2)}</p>
    </div>
    <div class="cont-botones-modal">
    <button id="btn-volver-modal" class="btn ">Volver</button>
    <button id="btn-pagar-modal" class="btn ">Ir a pagar</button>
    </div>
    </div>
    `
    callContModalCarrito.appendChild(totalForBuy)

    const callBtnVolver = document.getElementById(`btn-volver-modal`)
    callBtnVolver.addEventListener(`click`, ()=>{
        callContModalCarrito.style.display="none"
        
    })


})

}


function main(){
    entradasMostrar()
    carritoFuncional()
}

main()
