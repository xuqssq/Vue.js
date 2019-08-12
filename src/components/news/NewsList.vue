<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.docid">
                <router-link :to="'/home/newsInfo' + item.docid">
                    <img class="mui-media-object mui-pull-left" :src="item.picInfo.url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.ptime | dateFormat}}</span>
                            <span>点击：{{item.tcount}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import{Toast}from'mint-ui'
export default {
    data(){
        return{
            newsList:[

            ]
        }
    },
     created(){
        this.getNewsList();
        },
    methods:{
        getNewsList(){//获取新闻列表
            this.$http.get('https://www.apiopen.top/journalismApi').then(result =>{
                if (result.body.code===200){
                    this.newsList=result.body.data.ent
                }else{
                    Toast('获取新闻列表失败~');
                }
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    .mui-table-view h1{
        font-size: 14px;
        overflow: hidden;
        text-overflow : ellipsis;
        white-space : nowrap;
    }
    .mui-ellipsis{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        color: #226aff;
    }
</style>

