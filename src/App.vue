<template>
<Header/>
<router-view v-on:completedLogIn="completedLogIn"
v-on:completedSignUp="completedSignUp"
v-on:logOut="logOut"/> 
</template>

<script>
import Header from './components/Header.vue'

export default {
  name:"App",

  components:{
      Header,
  }
  
}
</script>