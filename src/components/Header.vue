<template>
<header class="headerconfondo">
  <div class="contenedor">
      <div id="menu">
          <img class="imgheader" :src="imglista" alt="menu" v-on:click="aparecermenu()" >
      </div> 
      <div id="logo">
          <img  class="imgheader" :src="logoapp" alt="logo">
          <h1>NOMINEE</h1>
      </div>
      <div id="login">
          <img class="imgheader" :src="imglogin" alt="Logeate" v-on:click="aparecerryl()">
      </div>
  </div>
  <section id="menudesplegable" class="fondomenu">
      <div>
          <ul>
              <a href="/">
                  <li><h2>Inicio</h2></li>
              </a>
              <a href="#">
                  <li><h2>Conoce sobre nosotros</h2></li>
              </a>
          </ul>
      </div>
  </section>
  <section id="registerylogin" class="fondomenuryl">
      <div v-if="is_auth">
          <a href="/">
              <img :src="imgloginbtn" alt="logueate!" v-on:click="logOut">
              <h3>Cerrar Sesion!</h3>
          </a>
      </div>
      <div v-if="is_auth">
          <a href="/UserHome">
          <img :src="icononomina" alt="Registrate!">
              <h3>Mis Nominas!</h3>
          </a>
      </div>
      <div v-if="is_auth">
          <a href="/Account">
          <img :src="see" alt="Mira tu cuenta!">
              <h3>Cuenta</h3>
          </a>
      </div>
      <div v-if="!is_auth">
          <a href="/login">
              <img :src="imgloginbtn" alt="logueate!">
              <h3>Logueate!</h3>
          </a>
      </div>
      <div v-if="!is_auth">
          <a href="/register">
          <img :src="imgregisterbtn" alt="Registrate!">
              <h3>Registrate!</h3>
          </a>
      </div>
  </section>
</header>
</template>

<script>
import listaimg from '../assets/icons/lista.png'
import loginimg from '../assets/icons/login.png'
import loginbtn from "../assets/icons/loginbtn.png" 
import registerbtn from "../assets/icons/register.png" 
import iconomina from "../assets/icons/iconomina.png"
import iconosee from '../assets/icons/see.png'
import logonomiee from '../assets/icons/iconosinfondo.png'

export default {
  name:"Header",

  data(){
    return{
      logoapp:logonomiee,
      see: iconosee,
      imglista:listaimg,
      imglogin:loginimg,
      imgloginbtn:loginbtn,
      imgregisterbtn:registerbtn,
      icononomina:iconomina,
      clicks:0,
      is_auth:true
    }
  },
  
  methods:{
      verifyAuth: function() {
        this.is_auth = localStorage.getItem("isAuth") || false;
        if (this.is_auth == false)
        this.$router.push({ name: "login" });
        else
        this.$router.push({ name: "UserHome" });
      },

      created: function(){
        this.verifyAuth()
      },

      completedLogIn: function(data) {
            localStorage.setItem("isAuth", true);
            localStorage.setItem("email", data.email);
            localStorage.setItem("token_access", data.token_access);
            localStorage.setItem("token_refresh", data.token_refresh);
            alert("Autenticación Exitosa");
            this.verifyAuth();
      },
      completedSignUp: function(data) {
            alert("Registro Exitoso");
            this.completedLogIn(data);
      },

      logOut: function () {
            localStorage.clear();
            alert("Sesión Cerrada");
            this.verifyAuth();
            },logOut: function () {
                localStorage.clear();
                alert("Sesión Cerrada");
                this.verifyAuth();
        },

      aparecermenu(){
          this.clicks+=1;
            if(this.clicks==2){
                document.getElementById('menudesplegable').style.left='-100%';
                setTimeout(()=>{
                    document.getElementById('menudesplegable').style.display='none';
                },200)
                this.clicks=0;
            }else{
                document.getElementById('menudesplegable').style.display='flex';
                setTimeout(()=>{
                    document.getElementById('menudesplegable').style.left='2%';
                    document.getElementById('menudesplegable').style.opacity='100%';
                },2)
            }
      },

      aparecerryl(){
          this.clicks+=1;
            if(this.clicks==2){
                document.getElementById('registerylogin').style.right='-100%';
                setTimeout(()=>{
                    document.getElementById('registerylogin').style.display='none';
                },200)
                this.clicks=0;
            }else{
                document.getElementById('registerylogin').style.display='flex';
                setTimeout(()=>{
                    document.getElementById('registerylogin').style.right='4%';
                    document.getElementById('registerylogin').style.opacity='100%';
                },2)
            }
      }
  },

  props: {
    msg: String
  }
}
</script>

