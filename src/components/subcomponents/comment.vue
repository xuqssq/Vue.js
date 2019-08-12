<template>
    <div class="com-container">
        <h3>发表评论</h3>
        <textarea placeholder="请输入要bb的内容（最多bb 120字）" maxlength='120' v-model="msg"></textarea>
        <mt-button type='primary' size='large' @click="postComment">发表评论</mt-button>
        <div class="com-list">
            <div class="com-item" v-for="(item,i) in comments" :key="item.id">
                <div class="com-title">
                   <div> 第{{i+1}}楼&nbsp;&nbsp;<span>用户：{{item.username}}</span>&nbsp;&nbsp;获取时间：{{item.ctime|dateFormat}}</div>
                </div>
                <div class="com-body">
                    {{item.text}}
                </div>
            </div>
        </div>
        <mt-button type='danger' size='large' plain @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
import{Toast}from'mint-ui'
import { ok } from 'assert';
export default {
    data(){
        return{
            page:2,
            comments:[],
            msg:''
        }
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            this.$http.get("https://www.apiopen.top/satinGodApi?type=1&page="+this.page).then(result=>{
                // +this.id+"?pageindex="+this.pageindex
                if(result.body.code===200){
                    // this.comments=result.body.data
                    this.comments=this.comments.concat(result.body.data)                    
                }else{
                    Toast('获取评论失败~');
                }
            })
        },
        getMore(){
            this.page++
            this.getComments()
        },
        postComment(){
           Toast('发表评论功能程序员大大正在拼命完善中~')
        }
    },
    props:['id']
}
</script>
<style lang="scss" scoped>
    .com-container {
        h3{
            font-size: 18px
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .com-list{
            margin: 10px 0;
            .com-item{
                font-size: 13px;
                .com-title{
                    
                    div{
                        width: 100%;
                        height: 30px;
                        line-height: 30px;
                        background-color: #eee;
                        padding: 0;
                        margin: 0;
                    };
                    span{
                        width: 100px;
                        height: 20px;
                        line-height: 30px;
                        display: inline-block;
                        overflow: hidden;
                        text-overflow : ellipsis;
                        white-space : nowrap;
                        font-size: 12px;
                    }
                }
                .com-body{
                    line-height: 35px;
                }
            }
        }
    }
</style>
