import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'

// Plugins & libraries
import '@/plugins/vueAwesome'
import '@/plugins/vue-tables-2'
// import {ClientTable} from 'vue-tables-2';
// Vue.use(ClientTable);
// Css
import '@/assets/css/table.css'
import '@/assets/css/style.css'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
