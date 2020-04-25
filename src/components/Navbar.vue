<template>
  <div class="navbar" :class="{close: navClose}" @click="handleClick">
    <div class="navbar__heading">
        <img src="@/assets/images/logo.svg" alt="">
    </div>
    <ul class="list">
        <li 
        v-for="navItem in navItems" 
        v-bind:key="navItem.title">
            <router-link :to="navItem.route">
                <div class="list__item">
                    <span class="list__item__icon">
                        <v-icon scale="1" name="bars"/>
                    </span>
                    <div class="list__item__title">
                        {{navItem.title}}
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'Navbar',
  props:{
      navClose:{
          type: Boolean
      }
  },
  data(){
      return{
          navItems:[
              {title:'داشبورد',icon:'',route:'/'},
              {title:'درخواست های همکاری',icon:'',route:'/requests'}
          ]
      }
  },
  methods:{
      handleClick(e){
          console.log(e)
          let tagName = e.target.tagName
          if(tagName === 'LI'){
              this.$emit('toggleNav')
          }
      }
  }
  
}
</script>

<style scoped>
.navbar{
    position: fixed;
    width: 250px;
    padding-top: 1rem;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #019288;
    color: white;
    z-index: 3;
    transition: transform .5s ease;
}
.close{
    transform: translateX(300px);
}
.navbar__heading{
    width: 150px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 3rem;
}
.navbar__heading img {
    width: 100%;
}
ul{
    padding-right: 1rem;
}
.list__item{
    display: flex;
    padding: .5rem 0;
    padding-right: .9rem;
    background-color: none;
    color: white;
    border-radius: 0 .5rem .5rem 0;
    font-size: 14px;
    margin: .5rem 0;
}
.list__item__icon{
    display: flex;
    align-items: center;
}
.list__item__title{
    padding-right: .8rem;
}
.active > .list__item {
    background-color: #f3f4f8;
    color: #019288;
}
</style>
