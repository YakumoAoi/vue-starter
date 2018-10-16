<template>
    <div @click="inputNewList(false)">
        <div v-for="(eachList,index) of list" :key="index">
            <div v-if="eachList.retractable" class="list-title">
                <a href="javascript:void(0)" class="controlable-list">
                    <span>{{eachList.title}}</span>
                    <div>
                        <Iconsvg v-if="eachList.retractable" iconClass="down1" :class="eachList.extended?'extended':''"></Iconsvg>
                    </div>
                    <div @click.stop="inputNewList(true)">
                        <Iconsvg v-if="eachList.modifiable" iconClass="add" ></Iconsvg>
                    </div>
                </a>
            </div>
            <div v-else class="list-title">
                <span>{{eachList.title}}</span>
            </div>
            <ul class="submenu" v-if="eachList.extended">
                <li v-for="(list,inx) of eachList.list" :key="inx" >
                    <input class="list-name-input" @click.stop v-if="listNameInput&&inx===1&&eachList.title==='创建的歌单'" v-model="listName" type="text" @keypress="createNewList(e,index)" @blur="createNewList(index)" placeholder="歌单名称">
                    <a href="javascript:void(0)" :class="list.onClick?'onclick-list':''" @click="pageSwitch(index,inx)" >
                        <Iconsvg :iconClass="list.icon"></Iconsvg>
                        <span>{{list.word}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
        name:'SideList',
        props:['list'],
        data(){
            return {
                listNameInput:false,
                listName:'',

            }
        },
        computed:{
            albumAmount(){
                let lastList=this.list[this.list.length-1].list
                return lastList[lastList.length-1].albumID
            }
        },
        methods:{
            pageSwitch(categoryIndex,listIndex){
                console.log(categoryIndex)
                console.log(listIndex)
                this.list.forEach(eachCategory => {
                    eachCategory.list.forEach(list=>{
                        list.onClick=false
                    })
                });
                this.list[categoryIndex].list[listIndex].onClick=true
            },
            toggleList(index){
                if(this.list[index].extended){
                    this.list[index].extended=false
                }else{
                    this.list[index].extended=true
                }
            },
            inputNewList(boolean){
                if(boolean){
                    console.log('shurukuang')
                    this.listNameInput=true
                }else{
                    this.listNameInput=false
                }
            },
            createNewList(index){
                if(this.listName==='') return
                let newList={
                    albumID:this.albumAmount+1,icon:'musicmenu',word:this.listName,url:`/musiclist?listID=${this.albumAmount+1}`, onClick:false
                }
                this.list[index].list.splice(1,0,newList)
                this.listName=''
                this.listNameInput=false
            }
        },
        beforemount:function(){

        }
    }
</script>

<style scoped>
    *{
        line-height: 16px;
        font-family: "微软雅黑"
    }
    .list-name-input{
        width: 130px;
        margin: 5px 0 5px 44px;
        border: 1px solid #bbb;
        outline: 0 !important;
        padding: 2px;
    }
    .extended{
        transform: rotate(-90deg);
    }
    .list-title{
        padding: 10px;
    }
    .list-title span{
        font-size: 13px;
        color: #666;
    }
    .submenu{
        padding: 0;
        margin: 0;
    }
    .submenu li a{
        padding: 10px 19px 10px 16px;
        border-left: 3px solid transparent;
        color: #5c5c5c;
        display: block;
    }
    .submenu li a:after{
        content: '';
        display: block;
        clear: both;
    }
    .submenu li a span{
        float: left;
        font-size: 13px;
        margin-top: 1px;
    }
    .submenu li a svg{
        float: left;
        font-size: 18px;
        margin-right: 9px;
    }
    .submenu .onclick-list{
        background-color: rgba(0, 0, 0, 0.04);
        border-left: 3px solid #c62f2f;
    }
    .submenu .onclick-list a{
        color: #000;
    }
    .controlable-list{
        display: block;
        color:#ccc;
        font-size: 17px;
    }
    .controlable-list svg{
        float:right;
        margin-left: 3px;
    }
    .controlable-list:after{
        content: '';
        display: block;
        clear:both;
    }
    .controlable-list span{
        float: left;
    }

</style>
