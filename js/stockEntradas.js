//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    ///////////////////////////////Funcion constructora Y Arreglos para las cards de las entradas///////////////////////////////

                    class entradas{
                        constructor(id,descripEntrada,precio,categoria,pais,fecha,ciudad,img,paisArtistaImg){
                            this.id=id
                            this.descripEntrada=descripEntrada
                            this.precio=precio
                            this.categoria=categoria
                            this.pais = pais
                            this.fecha=fecha
                            this.ciudad = ciudad
                            this.img=img
                            this.paisArtistaImg=paisArtistaImg
                        }
                    }
                    let entradaUno = new entradas ( 1,`Concierto de Puma Blue en Los Ángeles`, 3447.04, `Alternativa/Independiente`,`Inglaterra`,`01 oct. 2022`,` Los Ángeles`,`../images/img-artista-inicio/puma-blue.jpg`, `../images/bandera-pais-artista/UK.jpg` )
                    let entradaDos = new entradas ( 2,`Concierto de Puma Blue + Arlo Parks`, 7445.60, `Alternativa/Independiente`,`Inglaterra`, `06 oct. 2022`, ` Dallas`,`../images/img-artista-inicio/puma-blue.jpg`, `../images/bandera-pais-artista/UK.jpg`)
                    let entradaTres = new entradas ( 3,`Concierto de 50 Cent en Icónica Sevilla Fest 2022`, 9358.17, `Hip/Hop`,`Estados Unidos`, `22 sep. 2022 `,` Sevilla`,`../images/img-artista-inicio/50-cent.jpg`, `../images/bandera-pais-artista/EEUU.jpg`)
                    let entradaCuatro = new entradas(4,`Concierto de 50 Cent en la Icónica Viena`,11472.88,`Hip/Hop`,`Estados Unidos`, `28 sep. 2022`,` Viena`,`../images/img-artista-inicio/50-cent.jpg`, `../images/bandera-pais-artista/EEUU.jpg`)
                    let entradaCinco = new entradas ( 5,`Concierto de Eminem en Amsterdam`, 10000.43 , `Hip/Hop`,`Estados Unidos`,`01 sept. 2022`,` Amsterdam`,`../images/img-artista-inicio/eminem.jpg`, `../images/bandera-pais-artista/EEUU.jpg`)
                    let entradaSeis = new entradas(6,`Concierto de Eminem en Icónica Sevilla Fest 2022`,9600.43,`Hip/Hop`,`Estados Unidos`,`24 sept. 2022`,` Sevilla`, `../images/img-artista-inicio/eminem.jpg`, `../images/bandera-pais-artista/EEUU.jpg`)
                    let entradaSiete = new entradas ( 7,`Concierto Imperdible de Snoop Dogg en Helsinki`, 17200.71, `Hip/Hop`,`Estados Unidos`,`05 sep. 2022`,` Helsinki`, `../images/img-artista-inicio/snoop-doggy.jpg`, `../images/bandera-pais-artista/EEUU.jpg`)
                    let entradaOcho  = new entradas(8,`Concierto Imperdible de Snoop Dogg en Oberhausen`,9260.86,`Hip/Hop`,`Estados Unidos`,`13 sep. 2022`,` Oberhausen`, `../images/img-artista-inicio/snoop-doggy.jpg`, `../images/bandera-pais-artista/EEUU.jpg`)
                    let entradaNueve = new entradas (9, `Concierto de Mala Junta Malandro`, 1800.43, `Trap`,`Argentina`,`15 oct. 2022`,` Capital Federal`,`../images/img-artista-inicio/malandro.jpg`, `../images/bandera-pais-artista/ARG.jpg`)
                    let entradaDiez = new entradas (10, `Concierto de Mala Junta Malandro`, 2000.43, `Trap`,`Argentina`,`24 oct. 2022`,` Capital Federal`,`../images/img-artista-inicio/malandro.jpg`, `../images/bandera-pais-artista/ARG.jpg`)
                    let entradaOnce = new entradas ( 11,`Concierto de Puma Blue + Arlo Parks`, 6480.43, `Alternativa/Independiente`,`Inglaterra`,`08 oct. 2022`,` Houston`,`../images/img-artista-inicio/puma-blue.jpg`, `../images/bandera-pais-artista/UK.jpg`)
                    let entradaDoce = new entradas ( 12,`Concierto de 50 Cent en la Icónica Rotterdam`, 10526.84, `Hip/Hop`,`Estados Unidos`,`22 oct. 2022`,` Rotterdam`, `../images/img-artista-inicio/50-cent.jpg`, `../images/bandera-pais-artista/EEUU.jpg`)
                    
                    const allEntradas = [entradaUno,entradaDos,entradaTres,entradaCuatro,entradaCinco,entradaSeis,entradaSiete,entradaOcho,entradaNueve,entradaDiez ,entradaOnce,entradaDoce]
                    