<template>
  <div class="zj">
    <div class="bt" style="background-color: #2d2a32;">
      <div style="width: 151px;float:left; margin-top: 5px;color: #7793af; font-weight: bold;" >星级</div>
      <div style="width: 151px;float:left; margin-top: 5px;color: #7793af; font-weight: bold;" >目标</div>
      <div style="width: 151px;float:left; margin-top: 5px;color: #7793af; font-weight: bold;" >价值</div>
    </div>

    <div class="wu" id="wu_id">
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">★★★★★</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">段铁心</div>
      </div>
      <div style="width: 94px;float:left;text-align: right;">
        <div style="margin-top: 15px;">约4亿文</div>
      </div>
      <div id="wu_id_cs" style="width: 99px;float:left;display: none;">
        <div style="margin-top: 7px;">
          <a style="color: azure;font-size: 13px;" href="#" @click="transmit(1,11)">收下葫芦</a><br>
          <a style="color: azure;font-size: 13px;" href="#" @click="transmit(2,11)">收下珍玩</a>
        </div>
      </div>
    </div>

    <div class="si" id="si_id">
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">★★★★</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">夏总兵</div>
      </div>
      <div style="width: 94px;float:left;text-align: right;">
        <div style="margin-top: 15px;">约8000万文</div>
      </div>
      <div id="si_id_cs" style="width: 99px;float:left;display: none;">
        <div style="margin-top: 7px;">
          <a style="color: azure;font-size: 13px;" href="#" @click="transmit(1,8)">收下葫芦</a><br>
          <a style="color: azure;font-size: 13px;" href="#" @click="transmit(2,8)">收下珍玩</a>
        </div>
      </div>
    </div>

    <div class="san" id="san_id">
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">★★★</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">贾师爷</div>
      </div>
      <div style="width: 94px;float:left;text-align: right;">
        <div style="margin-top: 15px;">约1000万文</div>
      </div>
      <div id="san_id_cs" style="width: 99px;float:left;display: none;">
        <div style="margin-top: 7px;">
          <a style="color: azure;font-size: 13px;" href="#" @click="transmit(1,5)">收下葫芦</a><br>
          <a style="color: azure;font-size: 13px;" href="#" @click="transmit(2,5)">收下珍玩</a>
        </div>
      </div>
    </div>

    <div class="er" id="er_id">
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">★★</div>
      </div>
      <div style="width: 152px;float:left;">
        <div style="margin-top: 15px;">百晓通</div>
      </div>
      <div style="width: 94px;float:left;text-align: right;">
        <div style="margin-top: 15px;">约500万文</div>
      </div>
      <div id="er_id_cs" style="width: 99px;float:left;display: none;">
        <div style="margin-top: 7px;">
          <a style="color: azure;font-size: 13px;" href="#" @click="transmit(1,2)">收下葫芦</a><br>
          <a style="color: azure;font-size: 13px;" href="#" @click="transmit(2,2)">收下珍玩</a>
        </div>
      </div>
    </div>

    <div id="zon" style="height: 50px">
      <div style="width: 250px;height: 50px;float: left;">
        <p style="color: #709b9b;">当前：{{ this.userData.num }} 文</p>
      </div>
      <div style="width: 155px;height: 50px;float: left;">
        <input type="button" @click="obtain" style="width: 50px;height: 30px;margin-top: 10px" disabled="true" value="预留"></input>
      </div>
      <div style="width: 50px;height: 50px;float: left;">
        <input id="an" type="button"  @click="startApp" style="width: 50px;height: 30px;margin-top: 10px" value="开始"></input>
      </div>
    </div>

    <!--!!!!!!!!!!!!!!!!!下方区域!!!!!!!!!!!!!!!!!!!!!!!!!!-->
    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: darkgreen;">
        白珍珠: {{ this.userData.bzzNum }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id1"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(1,userData.bzzNum,'id1')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: darkgreen;">
        可获得：约50万文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: rgb(56 53 149);">
        云珍珠: {{ this.userData.yzzNum }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id2"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(2,userData.yzzNum,'id2')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: rgb(56 53 149);">
        可获得: 约500万文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: rgb(61 126 112);">
        虹珍珠: {{ this.userData.hzzNum }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id3"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(3,userData.hzzNum,'id3')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: rgb(61 126 112);">
        可获得: 约1000万文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: rgb(167 120 70);">
        白盘: {{ this.userData.fp3Num }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id4"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(4,userData.fp3Num,'id4')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: rgb(167 120 70);">
        可获得: 约300万文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: #1d5289;">
        玉盘: {{ this.userData.fp2Num }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id5"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(5,userData.fp2Num,'id5')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: #1d5289;">
        可获得: 约1000万文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: #6e3535;">
        云盘: {{ this.userData.fp1NUm }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id6"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(6,userData.fp1NUm,'id6')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: #6e3535;">
        可获得: 约1亿文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: rgb(142 60 143);">
        白凤樽: {{ this.userData.cfzNum }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id7"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(7,userData.cfzNum,'id7')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: rgb(142 60 143);">
        可获得：约800万文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: rgb(107 62 135);">
        云凤樽: {{ this.userData.bfzNum }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id8"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(8,userData.bfzNum,'id8')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: rgb(107 62 135);">
        可获得: 约8000万文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: #3067a1;">
        金凤樽: {{ this.userData.jfzNum }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id9"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(9,userData.jfzNum,'id9')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: #3067a1;">
        可获得: 约4亿文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: #4f9f27;">
        紫晶: {{ this.userData.zjNum }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id10"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(10,userData.zjNum,'id10')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: #4f9f27;">
        可获得: 约4000万文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: #f1b505;">
        紫帝: {{ this.userData.zdNum }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id11"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(11,userData.zdNum,'id11')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: #f1b505;">
        可获得: 约4亿文
      </div>
    </div>

    <div style="height: 50px;float:left;">
      <div style="height: 50px;float:left;width: 80px;margin-top: 6px;text-align: left;margin-left: 10px;color: rgb(31 241 243);">
        紫帝晶: {{ this.userData.zdjNum }}
      </div>
      <div style="height: 50px;float:left;width: 130px;margin-top: 6px;">
        数量：<input style="width:50px" type="number" id="id12"/>
      </div>
      <div style="height: 50px;float:left;width: 50px;margin-top: 7px;">
        <input type="button" @click="sell(12,userData.zdjNum,'id12')" value="出售"/>
      </div>
      <div style="height: 50px;float:left;width: 200px;margin-top: 7px;text-align: left;color: rgb(31 241 243);">
        可获得: 20亿文
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Zj',
    data () {
      return {
        num: 0,
        id: null,
        testNum: 0,
        userData: {
          num: 0,
          zdjNum: 0,zdNum: 0,zjNum: 0,jfzNum: 0,bfzNum: 0,cfzNum: 0,
          fp1NUm: 0,fp2Num: 0,fp3Num: 0,hzzNum: 0,yzzNum: 0,bzzNum: 0,
        }
      }
    },
    created(){
      this.queryCount(true);
    },
    methods:{
      //传送
      transmit(a,b){
        this.$axios.post('http://localhost:9001/wuxing/hulu',{"aType":a,"bType":b,"userName":this.$api.getUserName()}).then(response => (
          this.transmitRep(response.data)
        )).catch(error => (
          console.log(error)
        ))
      },
      transmitRep(data){
        if(data.code === 200){
          this.$message({
            message: data.msg,
            type: 'success'
          })
        }else{
          this.$message.error(data.msg);
        }
        //设置按钮取消置灰
        document.getElementById('an').removeAttribute("disabled");
        this.queryCount();
      },
      //chu
      sell(type,zNum,id){
        const num = document.getElementById(id).value;
        if(num === "" || parseInt(num) <= 0 || parseInt(num) > zNum ){
          this.$message.error('填写有误');
          return;
        }
        const use = {"type":type,"userName":this.$api.getUserName(),"sellNum":num}
        this.$axios.post('http://localhost:9001/wuxing/sell',use).then(response => (
          this.sellRep(response)
        )).catch(error => (
          console.log(error)
        ))
      },
      sellRep(response){
        this.$message({
          message: response.data.msg,
          type: 'success'
        })
        this.queryCount();
      },
      queryCount(isTrue){
        const userName = sessionStorage.getItem("wx_userName");
        //初始化页面查询数据
        this.$axios.post('http://localhost:9001/wuxing/data',{"userName":userName}).then(response => (
          this.userData = response.data
        )).catch(error => (
          console.log(error)
        ))

        if(!isTrue){
          //将边框都重置白色
          const wu_div = document.getElementById('wu_id');
          const si_div = document.getElementById('si_id');
          const san_div = document.getElementById('san_id');
          const er_div = document.getElementById('er_id');
          wu_div.style.border="1px solid #e5e6d8"
          si_div.style.border="1px solid #e5e6d8"
          san_div.style.border="1px solid #e5e6d8"
          er_div.style.border="1px solid #e5e6d8"

          //将传送隐藏
          const er_id_cs = document.getElementById('er_id_cs');
          const san_id_cs = document.getElementById('san_id_cs');
          const si_id_cs = document.getElementById('si_id_cs');
          const wu_id_cs = document.getElementById('wu_id_cs');
          er_id_cs.style.display="none";
          san_id_cs.style.display="none";
          si_id_cs.style.display="none";
          wu_id_cs.style.display="none";
        }
      },
      obtain(){
        const userName = sessionStorage.getItem("wx_userName");
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
        if(parseInt(this.userData.num) < 20000000 ){
          this.$message.error('数量不足');
          return;
        }
        let num = Number(this.userData.num);
        this.userData.num = num - 20000000;
        document.getElementById('an').disabled="true";
        //设置500毫秒调用一次，一直循环
        this.id = setInterval(() => {
          this.yanShi()
        }, 500)
        //调用后端获取数据
        this.$axios.post('http://localhost:9001/wuxing/count',{"page":2,"userName":sessionStorage.getItem("wx_userName")}).then(response => (
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
      }

    },
  }

</script>

<style>
  .zj {
    background-color: #1a1919;
    width: 500px;
    height: 890px;
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
