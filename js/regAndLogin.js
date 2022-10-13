class users{
  constructor(user,Email,Password){
      this.user=user
      this.Email=Email
      this.Password=Password
  }
}
/* Array para almacenar todas las cuentas */
let arrCuentas=[]


/* Contenedores de los forms,para ir cambiando de form segun el contexto*/
const callContFormReg = document.getElementById(`cont-register`)
const callContFormLogin = document.getElementById(`cont-log`)

/* llamo a los forms, para despues aplicarles el evento .onsumbit */
const callFormReg = document.getElementById(`formregister`)
const callFormLogin = document.getElementById(`formLogin`)

/* llamo a los id de los inputs del form REGISTER, para obtener sus value */
let callUserReg = document.getElementById(`userReg`)
let callEmailReg = document.getElementById(`emailReg`)
let callPasswordReg = document.getElementById(`passwordReg`)

/* inputs del form LOGIN, para verificar si existe o no tal email y password */
let callEmailLog = document.getElementById(`emailLog`)
let callPasswordLog = document.getElementById(`pwdLog`)

/* contenedores de msj segun se cumpla x condicion a la hora de LOGIN o del REGISTER  */
const callContSuccesMsjReg = document.getElementById(`succesReg`)
const callContErrorMsjReg = document.getElementById(`errorReg`)
const callContErrorLog = document.getElementById(`errorLog`)


/* inicializador de eventos */
function iniciarEventos(){
  callFormReg.onsubmit = (e) => registro(e)
  callFormLogin.onsubmit =(e) => login(e)
  
}


/* function del registro */

function registro(e){

  let userReg = callUserReg.value
  let userEmailReg = callEmailReg.value
  let userPwdReg = callPasswordReg.value

  const checkUserReg = arrCuentas.some((usersInArr)=> usersInArr.user ==  userReg)
  const checkEmailReg = arrCuentas.some((emailsInArr)=> emailsInArr.Email == userEmailReg)

  

  if (checkUserReg || checkEmailReg){
    errorReg()
  }else{
  
      let newUser = new users(userReg,userEmailReg,userPwdReg)

      succesReg()
      callFormReg.reset()
      arrCuentas.push(newUser)
 /*      console.log(arrCuentas) */
      actualizarUsuariosStorage()
  
  
  
}
e.preventDefault()
}

/* function del login */
function login(e){
  let userPwdLog = callPasswordLog.value
  let userEmailLog = callEmailLog.value

  

  const checkEmailLog = arrCuentas.some((emailsInArr)=> emailsInArr.Email == userEmailLog)
  const checkPwdLog = arrCuentas.some((pwdsInArr)=> pwdsInArr.Password == userPwdLog)

  
  if (checkEmailLog && checkPwdLog){

  location.href="./page/inicio.html"

  }else{
  errorLog()

  }
  e.preventDefault()
}

/* functions para ir alternando entre los forms segun lo que necesitemos */
function redirigirLogin(){
  callContFormReg.classList.add(`hide`)
  callContFormLogin.classList.remove(`hide`)

}

function redirigirRegister(){
  callContFormReg.classList.remove(`hide`)
  callContFormLogin.classList.add(`hide`)
}

/* functions para lograr msj de error y succes, segun la situacion a la hora del registro y login */
function succesReg(){
  const pMsjSuccesReg = document.createElement(`p`)
  pMsjSuccesReg.className="succes-reg"
  pMsjSuccesReg.innerHTML=`<i class="fa-solid fa-check i"></i>Su cuenta fue registrada correctamente. Inicie sesion, apretando en el boton de abajo.`
  callContSuccesMsjReg.appendChild(pMsjSuccesReg)
  setTimeout(()=>{
    pMsjSuccesReg.style.display="none"
  },2000)
  }
  
  
  function errorReg(){
    const pMsjErrorReg = document.createElement(`p`)
    pMsjErrorReg.className="error-reg"
    pMsjErrorReg.innerHTML=`
    <i class="fa-solid fa-xmark  i"></i>Error al registrar la cuenta.Email o usuario ya usados, intente con otros datos.`
  
    callContErrorMsjReg.appendChild(pMsjErrorReg)
  
    setTimeout(()=>{
        pMsjErrorReg.style.display="none"
    },2000) 
    
  }
  
  function errorLog(){
  
    const pMsjErrorLog = document.createElement(`p`)
    pMsjErrorLog.className="error-log"
    pMsjErrorLog.innerHTML=`<i class="fa-solid fa-xmark  i"></i>Email o usuario incorrectos,intente de nuevo.`
  callContErrorLog.appendChild(pMsjErrorLog)
    setTimeout(()=>{
        pMsjErrorLog.style.display="none"
    },2000)
  }
  
  function sweetForIntro(){
    Swal.fire({
      title: 'Bienvenido/a, a nuestro sitio!',
      text: 'registrate o inicia sesion, si es que ya tienes una cuenta, para poder acceder a todas nuestras funciones.',
      imageUrl: './images/img-banner-inicio/sweetAlertImg.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
  
function actualizarUsuariosStorage(){
let usersJSON = JSON.stringify(arrCuentas)
localStorage.setItem(`usersKeys`, usersJSON)

}

function ObtenerUsuariosStorage(){
  let usersJSON = localStorage.getItem(`usersKeys`)
  if(usersJSON){
      arrCuentas = JSON.parse(usersJSON)

  }
  
}

// fnction a ejecutar en inicio.html



function mainLogReg(){
  iniciarEventos()
  sweetForIntro()
ObtenerUsuariosStorage()

}

mainLogReg()
