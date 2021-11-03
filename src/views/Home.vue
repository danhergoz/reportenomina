<template>
<body id="pag1">
    <section  class="slide1">
        <div>
            <h1>NOMINEE</h1><br>
            <h2>Haz tus reportes de nomina, manejala de la manera más sencilla y intuitiva.</h2>
            <div class="arrow"></div>
            <div><h3>See More</h3></div>
        </div>
    </section>
    <section class="secondC">
        <div id="infosecond">
            <div class="textoslide2">
                <h2>Nominee, Funciona como un cotizador de nomina
                    se hace la cotizacion de la misma mediante la norma ya disponible
                    segun cargos, los valores legales y todas las lineaciones escenciales
                    para lograr una cotizacion real sobre cuanto van a valer los empleados de
                    la empresa que utilice.
                </h2>
            </div>
            <div class="contbtnslide2">
                <a href="/register"><button class="botonslide2">Registrate</button></a>
                <a href="/login"><button class="botonslide2">Inicia Sesion</button></a>
                <a href="#"><button class="botonslide2">Mira una prueba</button></a>
            </div>
        </div>
        <div class="divimg">
            <img :src="imgnomin2" alt="">
        </div>
    </section>
    <section class="thirdC">
        <div class="info">
            <img :src="logonomiee" alt="imagen_nomina">
            <h1>NOMINEE.</h1>
        </div>
        <div id="tarjetas">
            <div class="tarjeta">
                <div class="texttrgt">
                    <h1>Genera la cotizacion de tu nomina</h1>
                </div>
                <div class="imgtrg">
                    <img :src="imgnomin1" alt="imagen_nomina">
                </div>
            </div>
            <div class="tarjeta">
                <div class="texttrgt">
                    <h1>Maneja y conoce el gasto que tienes con tus empleados</h1>
                </div>
                <div class="imgtrg">
                    <img :src="imgnomin1" alt="imagen_nomina">
                </div>
            </div>
            <div class="tarjeta">
                <div class="texttrgt">
                    <h1>Facil uso y creacion de nomina</h1>
                </div>
                <div class="imgtrg">  
                    <img  :src="imgnomin1" alt="">
                </div>
            </div>
        </div>  
        
    </section>
    <footer>
        <h3>Developed By: Equipo Mintic3</h3>
    </footer>
</body>
</template>

<script>
import nomin1 from '../assets/img/nomin1.png'
import nomin2 from '../assets/img/nomina2.png'
import listaimg from '../assets/icons/lista.png'
import loginimg from '../assets/icons/login.png'
import loginbtn from "../assets/icons/loginbtn.png" 
import registerbtn from "../assets/icons/register.png" 
import iconomina from "../assets/icons/iconomina.png"
import logonomiee from '../assets/icons/iconosinfondo.png'

export default {
  name:"Home",

  data(){
    return{
      imgnomin1:nomin1,
      imgnomin2:nomin2,
      imglista:listaimg,
      imglogin:loginimg,
      imgloginbtn:loginbtn,
      imgregisterbtn:registerbtn,
      icononomina:iconomina,
      logonomiee
    }
  },
  
  props: {
    msg: String
  }
}
</script>

