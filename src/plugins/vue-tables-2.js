import Vue from 'vue'
import {ClientTable} from 'vue-tables-2';
import VtGenericFilter from '@/components/vue-tables-2/VtGenericFilter.vue'

Vue.use(ClientTable, {}, false, 'bootstrap4', {
    genericFilter: VtGenericFilter,
})