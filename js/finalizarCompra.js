//////////////////////////////contenido a agregar/////////////////////////////////



let callNameValue = document.getElementById(`name`)
let callTelefono = document.getElementById(`numero`)
let callEmail = document.getElementById(`email`)
const callSectionAfterCompra = document.getElementById(`cont-section`)
const callForm = document.getElementById(`form-payment`)
const callContForm = document.getElementById(`contenedor-form`)
let callBtnPay = document.getElementById(`payChek`)

function contAfterBuy(){
    callContForm.classList.add(`hide`)
callSectionAfterCompra.classList.remove(`hide`)

let callDivsAfterCompra = document.createElement(`div`)
callDivsAfterCompra.className = "section-after-compra mt-auto "
callDivsAfterCompra.id="contAfterBuy"
callDivsAfterCompra.innerHTML=`
<i class="fa-solid fa-circle-check icono"></i>
    <h1 class="after-compra-title">Muchas Gracias,Por su compra! <span class="dataAResaltar">${callNameValue.value}</span></h1>
    <p class="after-compra-text">Tus datos fueron verificados correctamente.Pronto le llegara un comprobante de su compra al correo de  <span class="dataAResaltar">${callEmail.value}.</span> </p>
    <p class="after-compra-text">Si llegase a surgir algun incoveniente lo estaremos contactando por dicho email o por su numero de telefono <span class="dataAResaltar">${callTelefono.value}.</span> </p>
    <button class="after-btn-compra"><a href="./inicio.html">Continuar</a></button>
`

callSectionAfterCompra.appendChild(callDivsAfterCompra)

}



document.getElementById('form-payment')
.addEventListener('submit', function(event) {
event.preventDefault();

callBtnPay.value = 'Checking...';

const serviceID = 'default_service';
const templateID = 'template_y57vnxr';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    callBtnPay.value = 'CheckOut';
    contAfterBuy()
    localStorage.removeItem(`key-entrada`)
    carrito=[]
    }, (err) => {
    callBtnPay.value = 'CheckOut';
    alert(JSON.stringify(err));
    });
});
    




    

 