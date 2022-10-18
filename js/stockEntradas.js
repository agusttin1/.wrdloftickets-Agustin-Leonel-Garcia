 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    ///////////////////////////////uso de fetch y try para mostrar las entradas en conciertos.html///////////////////////////////

                    let allEntradas = [] /// array para almacenar todas las entradas del json
                    let carrito = [];/// array para almacenar todas las entradas a comprar 
                    let arrListaDeseos = [] /// array para almacenar la lista de deseo del usuario

                    
                    async function consularEntradasApi(){         ///function para mostrar todo el stock de entradas.Funcion llamado en conciertos.html

                        try {
                          const response = await fetch("https://633f27680dbc3309f3c5e1f3.mockapi.io/entradas")
                          const data = await response.json()
                          allEntradas = [...data]
                          entradasMostrar()
                          
                          
                        } catch (error) {
                            
                        }
                        
                    }



    

  
