<template>
    <div class="search-bar">
        <input type="text" :placeholder="inputTip"  autocomplete="off" v-model.trim="keyword" @focus='toggleTip(false)' @blur="toggleTip(true)" @input="inputHandle()" >
        <a href="/">
            <Iconsvg :iconClass='searchIcon'></Iconsvg>
        </a>
        <Autocomplete :keyword='keyword' :relateList="relateList"></Autocomplete>
    </div>
</template>

<script>
import Autocomplete from './autocomplete.vue'
export default {
    name:'searchBar',
    data(){
        return {
            searchIcon:'searchamagnifyingglass',
            keyword:'',
            inputTip:'搜索音乐，歌曲，歌手，用户',
            timer:null,
            relateList:null,
            requestToken:null
        }
    },
    components:{
        Autocomplete
    },
    methods:{
        resolveResult(data){
            let relateList=[
                {id:1,category:'歌手',categoryIcon:'user',list:[
                    {word:'歌手1',lid:101},
                    {word:'歌手2',lid:102},
                    {word:'歌手3',lid:103}
                ]},
                {id:2,category:'单曲',categoryIcon:'musicnot',list:[
                    {word:'曲目11',lid:101},
                    {word:'曲目21',lid:102},
                    {word:'曲目31',lid:103}
                ]},
                {id:3,category:'专辑',categoryIcon:'music',list:[
                    {word:'专辑11',lid:101},
                    {word:'专辑21',lid:102},
                    {word:'专辑31',lid:103}
                ]},
                {id:4,category:'MV',categoryIcon:'ico-presetvideo-IJuv',list:[
                    {word:'MV11',lid:101},
                    {word:'MV21',lid:102},
                    {word:'MV31',lid:103}
                ]},
            ]
            data=relateList
            this.relateList=data
            this.requestToken=null
        },
        clearTimer () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
        },
        cancelRequest(){
            if(this.requestToken) this.requestToken.close()
        },
        inputHandle (event) {
            // cancelRequest()
            // let CancelToken = this.$axios.CancelToken;
            // this.requestToken = CancelToken.source();
            this.clearTimer()
            this.timer = setTimeout(() => {
                // this.$axios.post('/searchKeywordAll',{
                //     cancelToken: this.requestToken.token
                // }).then(res => {
                //     console.log(res.data.data)
                //     this.resolveResult(res.data.data)
                // }).catch(thrown => {
                // if (this.$axios.isCancel(thrown)) {
                //     console.log('Request canceled', thrown.message);
                //   } else {
                    // 处理错误
                //   }
                this.resolveResult()
            }, 1000)
        },
        toggleTip(ifDisplayTip){
            if(ifDisplayTip) {
                this.inputTip='搜索音乐，歌曲，歌手，用户'
            }else {
                this.inputTip=''
            }
        }
    }
}
</script>

<style scoped>
    .search-bar{
        float: left;
        position: relative;
        background-color: rgba(0,0,0,0.1);
        border-radius: 10px;
        margin: 14px 0;
        padding: 3px 10px 1px 10px;
    }
    .search-bar>div{
        position: absolute;
        left:0;
        top:36px;
        display: none;
        z-index:50;
    }
    input{
        color:#fff;
        background-color:transparent;
        border: 0 !important;
        font-size: 12px;
        float: left;
        width: 180px;
        margin-right: 5px;
        font-family: Arial, Helvetica, sans-serif,"微软雅黑";
        white-space: nowrap;
    }
    input::-webkit-input-placeholder{
        color:rgba(255,255,255,0.4);
    }
    input:-ms-input-placeholder{
        color:rgba(255,255,255,0.4);
    }
    input::-moz-placeholder{
        color:rgba(255,255,255,0.4);
    }
    input:-moz-placeholder{
        color:rgba(255,255,255,0.4);
    }
    .search-bar>a{
        float: left;
    }
    input:focus{
        outline: 0 !important;
    }
    input:focus + a .searchamagnifyingglass{
        color: rgba(255,255,255,0.8)
    }
    input:focus + a + div{
        display: block !important;
        outline: 0;
    }
    .searchamagnifyingglass{
        font-size: 12px;
        color:rgba(255,255,255,0.4);
        vertical-align: 0em;
    }
    .search-bar>a:hover .searchamagnifyingglass{
        color:rgba(255,255,255,0.8)
    }
</style>

