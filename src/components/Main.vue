<template>
  <div class="main" :class="{open: navClose}">
    <div class="wrapper">
      <transition name="fade" mode="out-in">
         <router-view />
      </transition>
    </div>
  </div>
</template>

<script>


export default {
  name: 'main',
  props:{
      navClose:{
          type: Boolean
      }
  }
}
</script>

<style scoped>
.main{
    margin-right: 250px;
    transition: margin .5s ease;
}
.open{
    margin-right: 0;
}
.wrapper{
    max-width: 850px;
    margin: 0 auto;
    margin-top: 2rem;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .5s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
@media screen and (max-width: 997px) {
  .main{
    margin-right: 0;
  }
}
</style>
