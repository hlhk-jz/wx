<template>
  <div class="cj">
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-style="tableRowStyle"
    >
      <el-table-column
        prop="date"
        label="xj"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="mb"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="address"
        label="jz"
        align="center">
      </el-table-column>
    </el-table>

   <input type="button" @click="show()" value="提交"/>
  </div>
</template>

<script>
  export default {
    name: 'Cj',
    data () {
      return {
        tableData: [{
          date: '★★★★★',
          name: '王小虎',
          address: '5'
        }, {
          date: '★★★★',
          name: '王小虎',
          address: '4'
        }, {
          date: '★★★',
          name: '王小虎',
          address: '3'
        }, {
          date: '★★',
          name: '王小虎',
          address: '2'
        }],
      }
    },
    methods: {
      tableRowStyle({ row }) {
        if (row.date == localStorage.getItem("key")) {
          return { 'background-color': '#67c23a','color':'#fff' }
        }
      },
      show(){
        localStorage.setItem("key","★★")
        location.reload();
      }
    },
  }

</script>


<style>
  .ding {
    padding: 10px 0;
    background-color: #2a1414;
    width: 400px;
    height: 30px;
    text-align: center;
    margin: 0 auto;
  }

/*  .el-table--enable-row-hover .el-table__body tr:hover {
    background: rgb(184, 224, 250);
    border: 1px solid #313463;
  }*/

  /*表格鼠标悬停的样式（背景颜色）*/
 /* .el-table tbody tr:hover > td {
    background-color: #2cce34 !important;
  }*/
</style>
