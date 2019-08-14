<template>
    <div class="one">
        <h1>登录组件，用.vue创建出来的-----{{msg}}</h1>
    </div>
</template>

<script>
   export default{//向外暴露的成员，可以用任意变量来接收
       data:function(){
           return{
               msg:'66666'
           }
       },
       methods:{
           show:function(){
               console.log('oooooookkkkkkkk')
           }
       }
   }
</script>

<style>
    .one
    {
        color: red;
    }
</style>


