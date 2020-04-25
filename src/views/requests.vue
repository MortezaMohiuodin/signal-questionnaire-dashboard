<template>
  <div>
    <h4 class="page-title">درخواست های همکاری</h4>
    <div class="card">
       <v-client-table :data="tableData" :columns="columns" :options="options">
        <span 
        slot="status" 
        slot-scope="props"
        class="status"
        :class="statusClass(props.row.status)">
          <v-icon scale=".4" name="circle"/>
          {{statusText(props.row.status)}}
        </span>
        <span 
        slot="action">
          <v-icon scale="1" name="eye" color="#a7a7a7"/>
        </span>

        <template slot="h__selected">
          <label class="checkbox-container">
            <input type="checkbox" @click="selectAll()">
            <span class="checkmark"></span>
          </label>
        </template>

        <template slot="selected" slot-scope="props">
          <label class="checkbox-container">
            <input type="checkbox" v-model="props.row.isChecked">
            <span class="checkmark"></span>
          </label>
        </template>

       </v-client-table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'requests',
  components:{
  },
  data(){
    return{
        columns: ['selected','name', 'status', 'sex','age','request_job','action'],
        tableData: [
            { name: "مرتضی",status:1, sex: "20",age:'22', request_job: "حسابداری"},
            { name: "مرتضی",status:2, sex: "20",age:'22', request_job: "حسابداری"},
            { name: "مرتضی",status:3, sex: "20",age:'22', request_job: "حسابداری"},
            { name: "مرتضی",status:4, sex: "20",age:'22', request_job: "حسابداری"},
            { name: "مرتضی",status:5, sex: "20",age:'22', request_job: "حسابداری"},
        ],
        options: {
            pagination:{
              show:false
            },
            headings:{
              name: 'نام',
              status:'وضعیت',
              sex: 'جنسیت',
              age: 'سن',
              request_job: 'شغل درخواستی',
              action:''
            },
        },
        isSelected:false
    }
  },
  methods:{
    statusText(status){
      let text = null
      switch (status){
        case 1:
          text = 'مشاهده نشده '
          break;
        case 2:
          text = 'در حال بررسی'
          break;
        case 3:
          text = 'دعوت به مصاحبه'
          break;
        case 4:
          text = 'رد شده'
          break;
        default:
          text = 'مشاهده نشده'
      }
      return text
    },
    statusClass(status){
      let statusCls = null
      switch (status){
        case 1:
          statusCls = 'notViewd'
          break;
        case 2:
          statusCls = 'pending'
          break;
        case 3:
          statusCls = 'interview'
          break;
        case 4:
          statusCls = 'failed '
          break;
        default:
          statusCls = 'notViewd'
      }
      return statusCls
    },
    selectAll() {
      console.log(this.tableData)
      this.isSelected = !this.isSelected
      let length = this.tableData.length
      for (let i = 0; i < length; i++) {
          this.tableData[i].isChecked=this.isSelected;
      }
}
  }
}
</script>

<style scoped>
.status{
  font-size: 10px;
  border-radius: 1rem;
  padding: 0px 4px;
}
.notViewd{
  color: #757575;
  background-color: #d2d2d2;
}
.pending{
  color: #ffb202;
  background-color: #fff5de;
}
.interview{
  color: #02b2ff;
  background-color: #d1edfc;
}
.failed{
  color: #f55968;
  background-color: #fdd5d9;
}
</style>
