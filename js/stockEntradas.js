 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    ///////////////////////////////uso de fetch y try para mostrar las entradas en conciertos.html///////////////////////////////

                    let allEntradas = [] /// array para almacenar todas las entradas del json
                    let carrito = [];/// array para almacenar todas las entradas a comprar 

                    
                    async function consularEntradasJson(){         ///function para mostrar todo el stock de entradas.Funcion llamado en conciertos.html

                        try {
                          const response = await fetch("../json/jsonEntradas.json")
                          const data = await response.json()
                          allEntradas = [...data]
                          
                        } catch (error) {
                            
                        }
                        entradasMostrar()
                    }



    

  
