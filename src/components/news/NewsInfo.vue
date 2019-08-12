<template>
    <div class="newsinfo-container">
        <h3 class="title">{{newsInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newsInfo.ptime | dateFormat}}</span>
            <span>点击：{{newsInfo.tcount}}次</span>
        </p>
        <hr>
        <div class="content">
             {{newsInfo.source}}
        </div>

        <comment-box :docid="this.docid"></comment-box>
    </div>
    
</template>
<script>
import{Toast}from'mint-ui'
import comments from '../subcomponents/comment.vue'
export default {
    data(){
        return{
            docid:this.$route.params.docid,
            newsInfo:{},
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){
            this.$http.get('https://www.apiopen.top/journalismApi').then(result=>{
                if(result.body.code===200){
                    this.newsInfo=result.body.data.ent[0]
                    console.log(this.newsList)
                    
                }else{
                    Toast('获取新闻失败~');
                }
            })
            // .catch(function(error){
            //     console.log('error');
            //     this.errMsg=error;
            // })
        },
    },
    components:{
        'comment-box':comments      
    }
}
</script>
<style lang="scss" scoped>
    .newsinfo-container{
        padding:  0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin:  15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between
        }
    }
</style>
