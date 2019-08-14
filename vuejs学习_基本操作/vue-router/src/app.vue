<template>
    <div>
        <h1>这里是一个app组件</h1>

        <mt-button type="default" @click="show()">木槿</mt-button>

        <mt-button type="danger">按钮</mt-button>

        <button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">goodsList</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            toastInstanse:null
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            this.show()
            setTimeout(()=>{
                this.toastInstanse.close();
            },3000)
        },
        show(){
            // Toast('提示信息');
             this.toastInstanse=Toast({
  message: '操作成功',
  position: 'middle',
  duration: -1,
  iconClass: 'glyphicon glyphicon-ok',
  className:'mytoast'//自定义toast的样式，需要自己提供一个类名
});
        }
    }
}
</script>
<style>

</style>
