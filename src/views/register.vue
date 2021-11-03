<template>
<body id="register"> 
    <section id="contenedoryl">
        <div id="contenedorregister">
            <div class="tituloformulario">
                <h1>Registrate!</h1>
            </div>
            <form v-on:submit.prevent="processSignUp">
                <br>
                <label for="nombre">Nombre.</label><br>
                <input type="text" v-model="user.name" name="nombre" id="nombre" placeholder="Ingresa tu nombre"><br>
                <label for="nuip">Nuip.</label><br>
                <input type="text" v-model="user.nuip" name="nuip" id="nuip" placeholder="Ingresa tu Nuip"><br>
                <label for="email">Email.</label><br>
                <input type="text" v-model="user.email" name="email" id="email" placeholder="Ingresa tu email"><br>
                <label for="contraseña">Contraseña.</label><br>
                <input type="password" v-model="user.password" name="contraseña" id="contraseña" placeholder="Ingresa tu contraseña"><br>
                <input type="submit" value="Registrarse" id="enviarbtn">
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
import axios from 'axios';

export default {
  name: 'register',

  data(){
    return{
      user: {
        name: "",
        password: "",
        email: "",
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
    processSignUp: function(){
      axios.post(
        "https://register-nomina.herokuapp.com/user/",
        this.user,
        {headers:{}}
      )
      .then((result)=>{
        let dataSignUp={
          email:this.user.email,
          token_access: result.data.access,
          token_refresh: result.data.refresh,
        }
        this.$emit('completedSignUp', dataSignUp)
      })
      .cath((error)=>{
        console.log(error)
        alert("ERROR: Fallo en el registro");
      });
    }
  }
}
</script>