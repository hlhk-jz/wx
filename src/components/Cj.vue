<template>
  <div class="cj">

      <div class="bt">
         <div style="width: 165px;float:left; margin-top: 5px" >标题1</div>
         <div style="width: 165px;float:left; margin-top: 5px" >标题1</div>
         <div style="width: 165px;float:left; margin-top: 5px" >标题1</div>
      </div>

    <div class="wu" id="wu_id">
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
    </div>

    <div class="si" id="si_id">
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
    </div>

    <div class="san" id="san_id">
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
    </div>

    <div class="er" id="er_id">
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
      <div style="width: 165px;float:left;">
        <div style="margin-top: 15px;">标题1</div>
      </div>
    </div>

    <div style="margin-top: 10px;">
      <div style="width: 100px; margin-left: 350px">
        <input type="button" @click="show" style="width: 50px;height: 30px;" value="按钮"></input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Cj',
    data () {
      return {
        num: 0,
      }
    },
    methods:{
      rand(m,n){
        return Math.ceil(Math.random() * (n-m+1) + m-1)
      },
      yanShi(){
        const wu_div = document.getElementById('wu_id');
        const si_div = document.getElementById('si_id');
        const san_div = document.getElementById('san_id');
        const er_div = document.getElementById('er_id');

        wu_div.style.border="1px solid #e5e6d8"
        si_div.style.border="1px solid #e5e6d8"
        san_div.style.border="1px solid #e5e6d8"
        er_div.style.border="1px solid #e5e6d8"

        this.num=this.rand(1,4);
        if(this.num - 1=== 0){
          er_div.style.border="1px solid #e8fa21"
        }
        if(this.num - 2=== 0){
          san_div.style.border="1px solid #e8fa21"
        }
        if(this.num - 3=== 0){
          si_div.style.border="1px solid #e8fa21"
        }
        if(this.num - 4=== 0){
          wu_div.style.border="1px solid #e8fa21"
        }

      },
      show(){
        setInterval(() => {
          this.yanShi()
        }, 500)
      },
    },
  }

</script>

<style>
  .cj {
    background-color: #1a1919;
    width: 500px;
    height: 400px;
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
