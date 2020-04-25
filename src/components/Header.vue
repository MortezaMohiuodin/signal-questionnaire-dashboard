<template>
  <div class="header" :class="{open: navClose}">
    <div class="toolbar">
        <div class="d-flex">
            <button class="nav-icon" @click.prevent="$emit('toggleNav')">
                <v-icon color="#019288" scale="1.5" name="bars"/>
            </button>
        </div>
        <div>
            نام کاربر
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  props:{
      navClose:{
          type: Boolean
      }
  }
}
</script>

<style scoped>
.header{
    background: white;
    margin-right: 250px;
    transition: margin .5s ease;
}
.toolbar{
    display: flex;
    justify-content: space-between;
    padding: .8rem;
}
.nav-icon{
    display: flex;
    justify-content: center;
    background: none;
    border:none;
    cursor: pointer;
}
.nav-icon > *{
    align-self: center;
}
.open{
    margin-right: 0;
}
@media screen and (max-width: 997px) {
  .header{
    margin-right: 0;
  }
}
</style>
