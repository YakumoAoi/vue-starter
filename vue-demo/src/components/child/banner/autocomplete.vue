<template>
    <div class="autocomplete">
        <div class="triangle"></div>
        <div class="no-input" v-if="!keyword">
            <div>热门推荐</div>
            <ul class="recommand-list">
                <li v-for="word of related" :key="word.id">{{word.content}}</li>
            </ul>
        </div>
        <div class="has-input" v-if="!!relateList&&!!keyword">
            <div class="search-user"><a href="">搜 “<span class="keyword-in-result">{{keyword}}</span>” 相关用户 ></a></div>
            <div class="result-list" v-for="singleList of relateList" :key="singleList.id" v-if="singleList.list.length>0">
                <a :href="searchUrl">
                    <Iconsvg :iconClass="singleList.categoryIcon"></Iconsvg>
                    <span class="category-name">{{singleList.category}}</span>
                </a>
                <ul>
                    <li v-for="item of singleList.list" :key="item.lid">
                        <a href="">
                            <span v-for="(singleLetter,index) in item.word" :key="index">
                                <span :class="getClass(singleLetter)">{{singleLetter}}</span>
                            </span>
                        </a>
                    </li>
                </ul> 
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'Autocomplete',
    props:{
        keyword:{
            type:String,
        },
        relateList:{
            type:Array
        }
    },
    computed:{
        searchUrl(){
            return '/search/'+this.relateList.category+'?keyword='+this.keyword
        }
    },
    methods:{
        getClass(letter){
            if(letter===this.keyword) {
                return 'keyword-in-result'
            }else{
                return 
            }
        }
    },
    data(){
        return {
            related:[
                {
                    content:'S.H.E',id:1
                },
                {
                    content:'周杰伦',id:2
                },
                {
                    content:'蔡依林',id:3
                },
                {
                    content:'周华建',id:4
                },
                {
                    content:'陈奕迅',id:5
                },
                {
                    content:'ladyGAGA',id:6
                },
                {
                    content:'张韶涵',id:7
                },
                {
                    content:'五月天',id:8
                },
                {
                    content:'刀郎',id:9
                },
                {
                    content:'刘德华',id:10
                }
            ]
        }
    },
}
</script>

<style scoped>
.category-name{
    margin-left: 5px;
}
 .has-input ul{
    padding-left:0;
    margin: 0 0 6px 0;
}
.search-user a{
    display: block;
    padding: 10px;
}
.has-input a{
    display: block;
}
.result-list>a{
    padding: 6px 15px;
    background-color: #f5f5f7;
}
.result-list li>a{
    padding: 6px 12px 6px 36px;
}
.triangle{
    border-top: 13px solid transparent;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-bottom: 13px solid #fafafa;
    position:absolute;
    top:-26px;
    left:95px;
}
.keyword-in-result{
    color:#00f;
}
.has-input a{
    color:#000;
}
.autocomplete{
    background-color: #fafafa;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    width: 220px;
    font-size: 13px;
}
.no-input>div{
    padding: 10px;
    color: #5c5c5c;
    border-bottom: 1px solid #dfdfdf;
}
.recommand-list{
    padding-left:0;
    margin-top: 0;
    margin-bottom:10px;
}
.recommand-list li{
    padding: 7px 13px;
    text-overflow: ellipsis;
    white-space:nowrap;
}
</style>

