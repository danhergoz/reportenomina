<template>
<body id="register">
    <section id="contenedoryl">
        <div id="contenedorregister">
            <div class="tituloformulario">
                <h1>Logueate!</h1>
            </div>
            <form v-on:submit.prevent="processLogInUser">
                <br>
                <label for="email">Email.</label><br>
                <input type="text"  v-model="user.email" name="email" id="email" placeholder="Ingresa tu email"><br>
                <label for="contraseña">Contraseña.</label><br>
                <input type="password" v-model="user.password" name="contraseña" id="contraseña" placeholder="Ingresa tu contraseña"><br>
                <div class="checkestilos">
                    <label><input type="checkbox" name="sesion" value="si">Mantener mi sesion iniciada</label><br>
                </div>
                <input type="submit" value="Log in" id="enviarbtn">
            </form>
        </div>
    </section>
</body>
</template>

<script>
import nomin1 from '../assets/img/nomin1.png'
import nomin2 from '../assets/img/nomina2.png'
import listaimg from '../assets/icons/lista.png'
import loginimg from '../assets/icons/login.png'
import loginbtn from "../assets/icons/loginbtn.png" 
import registerbtn from "../assets/icons/register.png" 
import axios from 'axios'

export default {
  name: 'login',

  data(){
    return{
      user:{
        email:"",
        password:""
      },
      imgnomin1:nomin1,
      imgnomin2:nomin2,
      imglista:listaimg,
      imglogin:loginimg,
      imgloginbtn:loginbtn,
      imgregisterbtn:registerbtn,
    }
  },
  
  methods:{
    processLogInUser: function(){
      axios.post(
        "https://register-nomina.herokuapp.com/login/",
        this.user,
        {headers:{}}
      )
      .then((result)=>{
        let dataLogIn = {
          email: this.user.email,
          token_acces: result.data.acces,
          token_refresh: result.data.refresh
        }
        this.$emit('completedLogIn',dataLogIn)
      })
      .cath((error)=>{
        if(error.response.status == "401")
        alert("ERROR 401: Credenciales Incorrectas");
      });
    }
  }
}
</script>