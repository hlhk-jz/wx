<template>
  <div class="cj">

      <div class="bt">
         <div style="width: 151px;float:left; margin-top: 5px" >标题</div>
         <div style="width: 151px;float:left; margin-top: 5px" >标题</div>
         <div style="width: 151px;float:left; margin-top: 5px" >标题</div>
      </div>

    <div class="wu" id="wu_id">
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题5</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题5</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题5</div>
      </div>
      <div id="wu_id_cs" style="width: 40px;float:left;display: none">
        <div style="margin-top: 15px;">
          <a style="color: azure" href="#" @click="transmit">标题</a>
        </div>
      </div>
    </div>

    <div class="si" id="si_id">
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题4</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题4</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题4</div>
      </div>
      <div id="si_id_cs" style="width: 40px;float:left;display: none">
        <div style="margin-top: 15px;">
          <a style="color: azure" href="#" @click="transmit">标题</a>
        </div>
      </div>
    </div>

    <div class="san" id="san_id">
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题3</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题3</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题3</div>
      </div>
      <div  id="san_id_cs" style="width: 40px;float:left;display: none">
        <div style="margin-top: 15px;">
          <a style="color: azure" href="#" @click="transmit">标题</a>
        </div>
      </div>
    </div>

    <div class="er" id="er_id">
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题2</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题2</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">标题2</div>
      </div>
      <div id="er_id_cs" style="width: 40px;float:left;display: none">
        <div style="margin-top: 15px;">
          <a style="color: azure" href="#" @click="transmit">标题</a>
        </div>
      </div>
    </div>

    <div id="zon" style="height: 50px">
      <div style="width: 250px;height: 50px;float: left;">
        <p>备注：{{ count }} </p>
      </div>
      <div style="width: 155px;height: 50px;float: left;">
        <input type="button" @click="obtain" style="width: 50px;height: 30px;margin-top: 10px" value="重置"></input>
      </div>
      <div style="width: 50px;height: 50px;float: left;">
        <input id="an" type="button"  @click="startApp" style="width: 50px;height: 30px;margin-top: 10px" value="开始"></input>
      </div>
    </div>

    <div id="tests">

      <div style="height: 50px;float:left;">

        <div style="height: 50px;float:left;width: 100px">
          zd:
        </div>
        <div style="height: 50px;float:left;width: 100px">
          <input type="text"/>
        </div>
        <div style="height: 50px;float:left;width: 100px">
          <input type="button" value="按钮"/>
        </div>
        <div style="height: 50px;float:left;width: 100px">
          zd:
        </div>

      </div>

      <div style="height: 50px">bbbbb</div>
      <div style="height: 50px">ccccc</div>
      <div style="height: 50px">ddddd</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Cj',
    data () {
      return {
        num: 0,
        id: null,
        testNum: 0,
        count: 0
      }
    },
    created(){
      this.queryCount();
    },
    methods:{
      //传送
      transmit(){

        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });

      },
      queryCount(){
        const userName = localStorage.getItem("token_wx");
        //初始化页面查询数据
        this.$axios.post('http://localhost:9001/wuxing/count',{"userName":userName}).then(response => (
          this.count = response.data
        )).catch(error => (
          console.log(error)
        ))
      },
      obtain(){
        const userName = localStorage.getItem("token_wx");
        this.$axios.post('http://localhost:9001/wuxing/obtain',{"userName":userName}).then(response => (
          this.queryCount()
        )).catch(error => (
          console.log(error)
        ))
      },
      //随机数方法
      rand(m,n){
        return Math.ceil(Math.random() * (n-m+1) + m-1)
      },
      yanShi(){
        const wu_div = document.getElementById('wu_id');
        const si_div = document.getElementById('si_id');
        const san_div = document.getElementById('san_id');
        const er_div = document.getElementById('er_id');

        //将边框都重置白色
        wu_div.style.border="1px solid #e5e6d8"
        si_div.style.border="1px solid #e5e6d8"
        san_div.style.border="1px solid #e5e6d8"
        er_div.style.border="1px solid #e5e6d8"

        //判断设置边框颜色
        this.num=this.rand(2,5);
        if(this.num - 2=== 0){
          er_div.style.border="1px solid #e8fa21"
        }
        if(this.num - 3=== 0){
          san_div.style.border="1px solid #e8fa21"
        }
        if(this.num - 4=== 0){
          si_div.style.border="1px solid #e8fa21"
        }
        if(this.num - 5=== 0){
          wu_div.style.border="1px solid #e8fa21"
        }

      },

      //开启定时
      startApp(){
        let num = Number(this.count);
        this.count = num - 2000000;
        document.getElementById('an').disabled="true";
        //设置500毫秒调用一次，一直循环
        this.id = setInterval(() => {
          this.yanShi()
        }, 500)
        //调用后端获取数据
        this.$axios.get('http://localhost:9001/wuxing/test').then(response => (
          this.testNum = response.data
        )).catch(error => (
          console.log(error)
        ))
        setTimeout(this.stop, 4000 )
      },

      //停止定时,设置选中后的颜色
      stop(){
        clearInterval(this.id)

        const wu_div = document.getElementById('wu_id');
        const si_div = document.getElementById('si_id');
        const san_div = document.getElementById('san_id');
        const er_div = document.getElementById('er_id');

        const er_id_cs = document.getElementById('er_id_cs');
        const san_id_cs = document.getElementById('san_id_cs');
        const si_id_cs = document.getElementById('si_id_cs');
        const wu_id_cs = document.getElementById('wu_id_cs');

        //将边框都重置白色
        wu_div.style.border="1px solid #e5e6d8"
        si_div.style.border="1px solid #e5e6d8"
        san_div.style.border="1px solid #e5e6d8"
        er_div.style.border="1px solid #e5e6d8"

        //设置选中后的值底色
        if(this.testNum - 2=== 0){
          er_div.style.border="1px solid #e8fa21"
          er_id_cs.style.display="block";
        }
        if(this.testNum - 3=== 0){
          san_div.style.border="1px solid #e8fa21"
          san_id_cs.style.display="block";
        }
        if(this.testNum - 4=== 0){
          si_div.style.border="1px solid #e8fa21"
          si_id_cs.style.display="block";
        }
        if(this.testNum - 5=== 0){
          wu_div.style.border="1px solid #e8fa21"
          wu_id_cs.style.display="block";
        }
        //设置按钮取消置灰
        document.getElementById('an').removeAttribute("disabled");
      }

    },
  }

</script>

<style>
  .cj {
    background-color: #1a1919;
    width: 500px;
    height: 500px;
  }
  .bt {
    background-color: #05070c;
    width: 496px;
    height: 30px;
    border-style:ridge;
    border-top-color: #e5e6d8;
    border-width:2px;
  }

  .wu {
    background-color: #05070c;
    width: 497px;
    height: 50px;
    border-style:ridge;
    border-color: #e5e6d8;
    border-width:1px;
  }
  .si {
    background-color: #05070c;
    width: 497px;
    height: 50px;
    border-style:ridge;
    border-color: #e5e6d8;
    border-width:1px;
  }
  .san {
    background-color: #05070c;
    width: 497px;
    height: 50px;
    border-style:ridge;
    border-color: #e5e6d8;
    border-width:1px;
  }

  .er {
    background-color: #05070c;
    width: 497px;
    height: 50px;
    border-style:ridge;
    border-color: #e5e6d8;
    border-width:1px;
  }

  div{
    color: antiquewhite;
  }


</style>
