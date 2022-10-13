function clickInTheOptionLogOut (){
    Swal.fire({
      title: 'Estas seguro que desea cerrar sesion?',
      text: `PERDERA,las entradas que selecciono`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesion de todas formas!'
    }).then((result) => {
      if (result.isConfirmed) {
      
          location.href="../index.html"
        localStorage.removeItem(`key-entrada`)
        carrito=[]
      }
    })
  }
