//////////////////////////////contenido a agregar/////////////////////////////////


const callContPayment = document.getElementById(`allContPayment`)
function inyeccionContPayment(){
  
    const formPayment = document.createElement(`form`)
    formPayment.className="cont-payment"
    formPayment.id="formm"
    formPayment.innerHTML=`
    <h1 class="titleFormPay">Informacion Personal</h1>
    <label>Nombre Y Apellido</label>
    <input type="text" id="name" value="Juan Dominguez" class="payInputCont" >
    <label>Numero de telefono</label>
    <input type="text" value="+54 11 4566 0875" class="payInputCont" id="numero" >
    <label>Email</label>
    <input type="email" value="jDOM@gmail.com" class="payInputCont" id="email">
    <h1 class="titleFormPay">Informacion de tarjeta</h1>
    <div class="cont-card-img">
    <img src="../png/features/visa.png" alt="VisaCard" width 40="" class="card-icon">
    <img src="../png/features/master.png" alt="masterCard" width 40="" class="card-icon">
    </div>
    <input type="text" class="payInputCont" value="123-123-124-124-456" id="numberCard">
    <div class="card-info">
    <input type="text" class="payInputCont sm" value="12/22" id="mm">
    <input type="text" class="payInputCont sm" value="12/26" id="yyy">
    <input type="text" class="payInputCont sm" value="444" id="cvv">
    </div>
    <button class="CheckOutPay" id="payChek">CheckOut</button>
    </form>
    
    `
callContPayment.appendChild(formPayment)


}




inyeccionContPayment()




const callbtnchk=document.getElementById(`payChek`)
const callSectionAfterCompra = document.getElementById(`cont-section`)


callbtnchk.addEventListener(`click`,(e)=>{
    e.preventDefault()
    callContPayment.classList.add(`hide`)
    callSectionAfterCompra.classList.remove(`hidepay`)
})
