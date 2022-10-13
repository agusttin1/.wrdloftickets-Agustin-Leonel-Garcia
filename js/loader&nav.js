/// Codigo para que funcione el loader en todas las pages

window.addEventListener(`load`, ()=>{
    document.getElementById(`loader-cont`).classList.toggle(`custom-loader-caract2`)
})


//// codigo para que funcione animacion del navbar

window.addEventListener(`scroll`, ()=>{
    let header = document.querySelector(`header`)
    header.classList.toggle(`sticky`, window.scrollY > 0)
})
