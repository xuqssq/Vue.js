<template>
    <div>
        <!-- //首页轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.album_1000_1000" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
                    <img src="../../images/新闻资讯.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photos">
                   <img src="../../images/图片分享.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shopping">
                    <img src="../../images/商品.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/message">
                    <img src="../../images/留言.png" alt="">
                    <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/video">
                    <img src="../../images/视频.png" alt="">
                    <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/about">
                    <img src="../../images/关于我们.png" alt="">
                    <div class="mui-media-body">关于我们</div></router-link></li>
        </ul> 
    </div>
</template>

<script>
import{Toast}from'mint-ui'
export default {
    data(){
        return {
            lunbotuList:[

            ]//保存轮播图的数组
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            //这是获取轮播图数据的方法
            this.$http.get('https://api.apiopen.top/musicRankingsDetails?type=1').then(result=>{
                if (result.body.code===200){
                    this.lunbotuList=result.body.result
                }else{
                    Toast('加载轮播图失败~');
                }
            });
        }
    },

}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 350px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: blue;
            }
            &:nth-child(2){
                background-color: red;
            }
            &:nth-child(3){
                background-color: yellow;
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
    .mui-grid-view.mui-grid-9{
            background-color: #fff;
            border: none;

            img{
                width:60px;
                height: 60px;
            }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
            border: none;

            .mui-media-body{
                font-size: 13px;
            }
    }

</style>

