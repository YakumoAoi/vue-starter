<template>
    <div class="index">
        <div class="tab-wrap">
            <ul class="tab">
                <li :class="onDisplay===index?'on-display':''" v-for="(item,index) in tab" :key="index" @click="display(index)">{{item}}</li>
            </ul>
        </div>
        <div class="seperate-line"></div>
        <div>
            <Recommond></Recommond>
        </div>

    </div>
</template>
<script>
import Recommond from './child/index/recommond.vue'
export default {
    name:'index',
    data(){
        return {
            tab:[
                '个性推荐',
                '歌单',
                '主播电台',
                '排行榜',
                '歌手',
                '最新音乐'
            ],
            onDisplay:0
        }
    },
    methods:{
        display(index){
            this.onDisplay=parseInt(index)
        }
    },
    components:{
        Recommond
    }
}
</script>
<style scoped>
    .index{
        margin-left: 200px;
        padding: 0 30px;
    }
    .tab{
        width: 530px;
        height: 48px;
        margin: 0 auto;
        padding-left:0;
        clear: both;
    }
    .seperate-line{
        margin: -1px 0 20px 0;
        position: relative;
        height: 1px;
        width: 100%;
        background-color: #ccc;
        z-index: -1;
    }
    .tab:after{
        content: '';
        display: block;
        clear: both;
    }
    .tab>li{
        float:left;
        width: 60px;
        text-align: center;
        font-size: 15px;
        margin: 0 14px;
        padding: 14px 0 12px 0;
        border-bottom: 2px solid transparent; 
        cursor: pointer;
    }
    .tab .on-display{
        color: #c62f2f;
        border-bottom:2px solid #c62f2f; 
    }
</style>
