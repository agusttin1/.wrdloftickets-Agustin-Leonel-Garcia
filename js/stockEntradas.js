//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    ///////////////////////////////Funcion constructora Y Arreglos para las cards de las entradas///////////////////////////////

                    class entradas{
                        constructor(id,descripEntrada,precio,categoria,pais,fecha,ciudad,img,paisArtistaImg,cantidad,nombreArtista){
                            this.id=id
                            this.descripEntrada=descripEntrada
                            this.precio=precio
                            this.categoria=categoria
                            this.pais = pais
                            this.fecha=fecha
                            this.ciudad = ciudad
                            this.img=img
                            this.paisArtistaImg=paisArtistaImg
                            this.cantidad=cantidad
                            this.nombreArtista=nombreArtista.toUpperCase()
                        }
                    }
                    let entradaUno = new entradas ( 1,`Concierto de Puma Blue en Los Ángeles`, 3447.04, `Alternativa/Independiente`,`Ingles`,`01 oct. 2022`,` Los Ángeles`,`../images/img-artista-inicio/puma-blue.jpg`, `../images/bandera-pais-artista/UK.jpg`,1,`Puma Blue` )
                    let entradaDos = new entradas ( 2,`Concierto de Puma Blue + Arlo Parks`, 7445.60, `Alternativa/Independiente`,`Ingles`, `06 oct. 2022`, ` Dallas`,`../images/img-artista-inicio/puma-blue.jpg`, `../images/bandera-pais-artista/UK.jpg`,1,`Puma Blue`)
                    let entradaTres = new entradas ( 3,`Concierto de 50 Cent en Icónica Sevilla Fest 2022`, 9358.17, `Hip-Hop/Rap`,`EEUU`, `22 sep. 2022 `,` Sevilla`,`../images/img-artista-inicio/50-cent.jpg`, `../images/bandera-pais-artista/EEUU.jpg`,1,`50 Cent`)
                    let entradaCuatro = new entradas(4,`Concierto de 50 Cent en la Icónica Viena`,11472.88,`Hip-Hop/Rap`,`EEUU`, `28 sep. 2022`,` Viena`,`../images/img-artista-inicio/50-cent.jpg`, `../images/bandera-pais-artista/EEUU.jpg`,1,`50 Cent`)
                    let entradaCinco = new entradas ( 5,`Concierto de Eminem en Amsterdam`, 10000.43 , `Hip-Hop/Rap`,`EEUU`,`01 sept. 2022`,` Amsterdam`,`../images/img-artista-inicio/eminem.jpg`, `../images/bandera-pais-artista/EEUU.jpg`,1,`Eminem`)
                    let entradaSeis = new entradas(6,`Concierto de Eminem en Icónica Sevilla Fest 2022`,9600.43,`Hip-Hop/Rap`,`EEUU`,`24 sept. 2022`,` Sevilla`, `../images/img-artista-inicio/eminem.jpg`, `../images/bandera-pais-artista/EEUU.jpg`,1,`Eminem`)
                    let entradaSiete = new entradas ( 7,`Concierto Imperdible de Snoop Dogg en Helsinki`, 17200.71, `Hip-Hop/Rap`,`EEUU`,`05 sep. 2022`,` Helsinki`, `../images/img-artista-inicio/snoop-doggy.jpg`, `../images/bandera-pais-artista/EEUU.jpg`,1,`Snoop Dogg`)
                    let entradaOcho  = new entradas(8,`Concierto Imperdible de Snoop Dogg en Oberhausen`,9260.86,`Hip-Hop/Rap`,`EEUU`,`13 sep. 2022`,` Oberhausen`, `../images/img-artista-inicio/snoop-doggy.jpg`, `../images/bandera-pais-artista/EEUU.jpg`,1,`Snoop Dogg`)
                    let entradaNueve = new entradas (9, `Concierto de Mala Junta Malandro`, 1800.43, `Trap`,`Argentino`,`15 oct. 2022`,` Capital Federal`,`../images/img-artista-inicio/malandro.jpg`, `../images/bandera-pais-artista/ARG.jpg`,1,`Malandro`)
                    let entradaDiez = new entradas (10, `Concierto de Mala Junta Malandro`, 2000.43, `Trap`,`Argentino`,`24 oct. 2022`,` Capital Federal`,`../images/img-artista-inicio/malandro.jpg`, `../images/bandera-pais-artista/ARG.jpg`,1,`Malandro`)
                    let entradaOnce = new entradas ( 11,`Concierto Lynyrd Skynyrd en Las Vegas Parkin Lots`, 12480.43, `Rock`,`EEUU`,`09 dec. 2022`,` Nevada`,`../images/img-artista-inicio/lynyrdskynyrd.jpg`, `../images/bandera-pais-artista/EEUU.jpg`,1,`Lynyrd Skynyrd`)
                    let entradaDoce = new entradas ( 12,`Concierto de Andres Calamaro el arena Peru`, 9526.84, `Rock`,`Argentino`,`15 oct. 2022`,` Lima Peru`, `../images/img-artista-inicio/calamaro.jpg`, `../images/bandera-pais-artista/ARG.jpg`,1,`Andres Calamaro`)
                    
                    const allEntradas = [entradaUno,entradaDos,entradaTres,entradaCuatro,entradaCinco,entradaSeis,entradaSiete,entradaOcho,entradaNueve,entradaDiez ,entradaOnce,entradaDoce]
                    
                    let carrito = [];
    
