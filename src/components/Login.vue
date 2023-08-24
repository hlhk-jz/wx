<template>
  <div>
    <div style="margin: 20px;"></div>

    <div id="login" style="display:none">
      <div style="margin: 20px;"></div>
      <h1>{{ formData.userName }}  欢迎！</h1>
    </div>

    <el-form id="elForm" style="display:block" label-width="80px" ref="formData" :model="formData" status-icon :rules="rules" >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="formData.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="formData.passWord" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button type="primary" @click="onSubmit">创建</el-button>
      </el-form-item>
    </el-form>

    <el-form id="formSubmit" style="display:none" label-width="80px" ref="formData" :model="formData" status-icon :rules="rules" >
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="formData.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="formData.passWord" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitPost">提交</el-button>
      </el-form-item>
    </el-form>

    <div style="margin-left: 100px;"><h1 id="msg"></h1></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        userName: '',
        passWord: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger:  'blur' }
        ],
        passWord: [
          { required: true, message: '请输入用密码', trigger:  'blur' }
        ],
      },
      repData: {},
    }
  },
  //该声明周期可以操作dom
  mounted() {
    if(this.$api.getAllLocal().token_wx){
      const login = document.getElementById("login");
      const elForm = document.getElementById("elForm");
      login.style.display = "block";
      elForm.style.display = "none";
      this.formData.userName = this.$api.getAllLocal().token_wx.split("-")[0];
    }
  },
  methods: {
    onLogin(){
      this.$axios.post('http://localhost:9001/wuxing/login',this.formData).then(response => (
        this.login(response.data)
        )).catch(function (error) {
          console.log(error);
        });
    },
    login(response){
      if(response.code == 501){
        document.getElementById("msg").innerText="用户名或密码错误！"
      }else{
        const login = document.getElementById("login");
        const elForm = document.getElementById("elForm");
        login.style.display = "block";
        elForm.style.display = "none";
        this.$api.setLocal(response.token)
      }
    },
    onSubmit(){
      const login = document.getElementById("login");
      const elForm = document.getElementById("elForm");
      const formSubmit = document.getElementById("formSubmit");
      login.style.display = "none";
      elForm.style.display = "none";
      formSubmit.style.display = "block";
      document.getElementById("msg").innerText=""
      this.formData={}
    },

    submitPost(){
      console.log("提交："+this.formData)
      this.$axios.post('http://localhost:9001/wuxing/save',this.formData).then(response => (
        this.submitPostTwe(response.data)
      )).catch(function (error) {
        console.log(error);
      });
    },

    submitPostTwe(res){
      if(res.code != 200){
        document.getElementById("msg").innerText=res.msg
      }else{
        const login = document.getElementById("login");
        const elForm = document.getElementById("elForm");
        const formSubmit = document.getElementById("formSubmit");
        login.style.display = "block";
        elForm.style.display = "none";
        formSubmit.style.display = "none";
        document.getElementById("msg").innerText=""
      }
    },

  }
}
</script>

<style>
  .el-form-item__label {
    color: #c7cdd9;
  }
</style>
