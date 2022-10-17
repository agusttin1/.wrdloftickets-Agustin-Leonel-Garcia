
const callAllContPayment = document.getElementById(`allContPayment`)

//////////////////////////////llamo a los id de cada input del formulario para poder usarlos dentro de la funcion contAfterBuy/////////////////////////////////

let callNameValue = document.getElementById(`name`)
let callTelefono = document.getElementById(`numero`)
let callEmail = document.getElementById(`email`)

//////////////////////////////Llamada  a los id del contenedor a mostrar despues de completar el form y al contenedor del form/////////////////////////////////
const callSectionAfterCompra = document.getElementById(`cont-section`)
const callContForm = document.getElementById(`contenedor-form`)

//////////////////////////////llamada a los id para usar en la funcion estructuraEntradasInFC/////////////////////////////////
let callPrecioTotal = document.getElementById(`precioTotalAPagar`);
let callCarritoId = document.getElementById(`allEntradasMostrar`)
let callMainContCarrito = document.getElementsByClassName(`contCarritoPay`)[0]



//////////////////////////////array para almacenar las entradas seleccionadas y mostrarlas en un contenedor/////////////////////////////////
let arrCarritoCont 
//////////////////////////////array donde estan almacenadas las cuotas disponibles a la hora de pagar/////////////////////////////////
let optionsCuotas = [1,3,6,12]

//////////////////////////////Funcion para guardar el llamado al localStorage y usarlo para mostrar la info de la compra/////////////////////////////////



function obtenerEntradas (){

    let callEntradasJson = localStorage.getItem(`key-entrada`)
    let EntradasToBuy = JSON.parse(callEntradasJson)
    
if(callEntradasJson){
    arrCarritoCont=[...EntradasToBuy]
}



}



//////////////////////////////Funcion que contiene estructura a mostrar la informacion de la compra /////////////////////////////////

function estrucutraEntradasInFC(){

    callCarritoId.innerHTML=``

    arrCarritoCont.forEach((dataOfCarrito)=>{
        let dvCarrito = document.createElement(`div`);
    dvCarrito.className = `entradas-in-carrito`;
    dvCarrito.innerHTML = `
            
                            <div class="cont-img">
                            <img src=${dataOfCarrito.img} alt="">
                            </div>
                            <div class="body-info-modal">
                            <p class="card-text">${dataOfCarrito.descripEntrada}</p>
                            <p class="cantidad-entrada">Cantidad: ${dataOfCarrito.cantidad}</p>
                            </div>
                            <span class="price-event-modal">$ ${dataOfCarrito.precio}</span>
                            `;

                            callCarritoId.appendChild(dvCarrito)
                            

    })
    callPrecioTotal.innerText = arrCarritoCont.reduce((acc, el) => acc + el.cantidad * el.precio, 0).toFixed(2);
}


//////////////////////////////Funcion contenedora de una estructura que aparece luego de completar el formulario/////////////////////////////////
function contAfterBuy(){

callSectionAfterCompra.classList.remove(`hide`)

let callDivsAfterCompra = document.createElement(`div`)
callDivsAfterCompra.className = "section-after-compra mt-auto "
callDivsAfterCompra.id="contAfterBuy"
callDivsAfterCompra.innerHTML=`
<i class="fa-solid fa-circle-check icono"></i>
    <h1 class="after-compra-title">Muchas Gracias,Por su compra! <span class="dataAResaltar">${callNameValue.value}</span></h1>
    <p class="after-compra-text">Tus datos fueron verificados correctamente.Pronto le llegara un comprobante de su compra al correo de  <span class="dataAResaltar">${callEmail.value}.</span> </p>
    <p class="after-compra-text">Si llegase a surgir algun incoveniente lo estaremos contactando por dicho email o por su numero de telefono <span class="dataAResaltar">${callTelefono.value}.</span> </p>
    <button class="after-btn-compra" id="btnContAfterBuy" "><a href="./inicio.html">Continuar</a></button>
`

callSectionAfterCompra.appendChild(callDivsAfterCompra)

}


//////////////////////////////Funcion para ocultar contenido del formulario y del contenedor de la info de compras/////////////////////////////////
function ocultarContAfterCheck(){
    callMainContCarrito.classList.add(`hidepay`)
    callContForm.classList.add(`hide`)
}




//////////////////////////////Variables para utilizar en la funcion chequeoDeData/////////////////////////////////

let callBtnPay = document.getElementById(`payChek`)
const callForm = document.getElementById(`form-payment`)


//////////////////////////////Funcion que hace funcional el formulario, chequeando datos y enviando email usando una api/////////////////////////////////

function chequeoDeData(){

callForm.addEventListener('submit', function(event) {
event.preventDefault();

/// Incluyo un sweet alert con un intervalo de tiempo para que simule un la espera de los chequeos de datos
let timerInterval
Swal.fire({
title: 'Procesando su compra',
html: 'Espere unos segundos.',
timer: 2000,
timerProgressBar: true,
didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
    b.textContent = Swal.getTimerLeft()
    }, 100)

},willClose: () => {
    clearInterval(timerInterval)

}}).then((result) => {

if (result.dismiss === Swal.DismissReason.timer) {
        
    ocultarContAfterCheck()
    contAfterBuy()

    /// codigo a ejecutar para la funcion de la api de emailJs.
    callBtnPay.value = 'Checking...';

    const serviceID = 'default_service';
    const templateID = 'template_y57vnxr';
    
    emailjs.sendForm(serviceID, templateID, this).then(() => {
        callBtnPay.value = 'CheckOut';
        localStorage.removeItem(`key-entrada`)
        carrito=[]
        arrCarritoCont=[]
        }, 
        (err) => {
        callBtnPay.value = 'CheckOut';
        alert(JSON.stringify(err));
        });
}
})

});
} 

//////////////////////////////llamada del nodo selector para despues inyectarle las options/////////////////////////////////
let callSelector = document.getElementById(`selector`)
function cuptas(){
   let precioTotal = callPrecioTotal.innerText
    let enUnaCuota =(precioTotal/optionsCuotas[0]).toFixed(2)
    let enTresCuotas =(precioTotal/optionsCuotas[1]).toFixed(2)
    let enSeisCuotas =(precioTotal/optionsCuotas[2]).toFixed(2)
    let enDoceCuotas =(precioTotal/optionsCuotas[3]).toFixed(2)

    callSelector.innerHTML=`
    <option class="option" >1 Pago de <span id="priceCuotas">${enUnaCuota}</span></option>
    <option class="option">3 Pagos de <span id="priceCuotas">${enTresCuotas}</span></option>
    <option class="option">6 Pagos de <span id="priceCuotas">${enSeisCuotas}</span></option>
    <option class="option">12 Pagos de <span id="priceCuotas">${enDoceCuotas}</span></option>

    `
}

function main(){
obtenerEntradas()
chequeoDeData()
estrucutraEntradasInFC()
cuptas()


}

main()
