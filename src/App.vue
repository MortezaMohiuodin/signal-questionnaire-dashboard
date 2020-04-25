<template>
  <div id="app">
    <div v-if="!navClose" class="dark-layout" @click="navClose = !navClose"></div>
    <Header :navClose="navClose" v-on:toggleNav="navClose = !navClose"/>
    <Navbar :navClose="navClose" v-on:toggleNav="navClose = !navClose"/>
    <Main :navClose="navClose"/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Main
  },
  data(){
    return{
      navClose: false
    }
  },
  methods:{
     
  }
}
</script>

<style scoped>
@media screen and (max-width: 997px) {
  .dark-layout{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #00000057;
    z-index: 1;
  }
}

</style>
