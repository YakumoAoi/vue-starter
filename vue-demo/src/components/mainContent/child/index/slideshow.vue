<template>
    <div class="slideshow-wrap">
        <ul class="slideshow" @mouseover="autoSwitchPause(true)" @mouseout="autoSwitchPause(false)">
            <li v-for="(item,index) in list" :key="index" :class="displayStyle(index)">
                <a href="" class="item">
                    <div>
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div :class="tagStyle(index)">{{tag(index).name}}</div>
                </a>
            </li>
        </ul>
        <ul class="indicate">
            <li v-for="(item,index) in list" :key="index" @mouseover="autoSwitchPause(true);changeColumn(index)" @mouseout="autoSwitchPause(false)" :class="onDisplay===index?'ondisplay-button':''"></li>
        </ul>
        <div class="pervious button" @click="changeColumn(false)" @mouseover="autoSwitchPause(true)" @mouseout="autoSwitchPause(false)">
            <Iconsvg iconClass="left"></Iconsvg>
        </div>
        <div class="next button" @click="changeColumn(true)" @mouseover="autoSwitchPause(true)" @mouseout="autoSwitchPause(false)">
            <Iconsvg iconClass="right"></Iconsvg>
        </div>
    </div>
</template>

<script>
export default {
    name:'Slideshow',
    data(){
        return{
            onDisplay:0,
            autoSwitch:false
        }
    },
    props:{
        list:{
            type:Array,
            required:true
        }
    },
    methods:{
        changeColumn(index){
            if(index===true){
                if(this.onDisplay===this.list.length-1){
                    this.onDisplay=0
                }else{
                    this.onDisplay+=1
                }
            }
            if(!index){
                if(this.onDisplay===0){
                    this.onDisplay=this.list.length-1
                }else{
                    this.onDisplay-=1
                }
            }
            if(typeof index==='number'){
                this.onDisplay=index
            }
        },
        autoSwitchPause(bool){
            this.autoSwitch=bool
        },
        displayStyle(index){
            let style=''
            if(this.onDisplay===index){
                return'center middle-display'
            }
            if((this.onDisplay===0&&index===this.list.length-1)||(this.onDisplay!==0&&index===this.onDisplay-1)){
                return 'left-side'
            }
            if((this.onDisplay===this.list.length-1&&index===0)||(this.onDisplay!==this.list.length-1&&index===this.onDisplay+1)){
                return 'right-side'
            }        
        },
        tagStyle(index){
            let tagStyle=this.tag(index).style
            tagStyle+=this.onDisplay===index?' tag-ondisplay':''
            return tagStyle
            
        },
        tag(index){
            switch (this.list[index].type) {
                case 1:
                    return {
                        style:'tag red',
                        name:'VIP专享'
                    }
                    break;
                case 2:
                    return {
                        style:'tag blue',
                        name:'独家'
                    }
                    break;
                case 3:
                    return {
                        style:'tag blue',
                        name:'独家策划'
                    }
                    break;
                case 4:
                    return {
                        style:'tag blue',
                        name:'演出'
                    }
                    break;
                case 5:
                    return {
                        style:'tag red',
                        name:'新碟首发'
                    }
                    break;
                case 6:
                    return {
                        style:'tag red',
                        name:'新歌首发'
                    }
                    break;
                case 7:
                    return {
                        style:'tag blue',
                        name:'商城'
                    }
                    break;
            
                default:
                    break;
            }
        }
    },
    mounted:function(){
        let app=this
        let timer
        setInterval(function(){
            if(app.autoSwitch) {
                clearTimeout(timer)
                return
            }
            timer=setTimeout(function(){
                if(app.onDisplay!==app.list.length-1){
                    app.onDisplay+=1
                }else{
                    app.onDisplay=0
                }
            },0)
        },3000)
    }
}
</script>

<style scoped>
    .indicate{
        width: 198px;
        margin: 13px auto 13px auto;
        padding-left: 0;
    }
    .indicate:after{
        content: '';
        display: block;
        clear: both;
    }
    .indicate>li{
        cursor: pointer;
        float: left;
        width: 17px;
        height: 2px;
        margin: 0 3px;
        background-color: #bbb;
    }
    .indicate .ondisplay-button{
        background-color: #cc4a4a;
    }
    .button{
        position: absolute;
        top: 0;
        font-size: 20px;
        height: 200px;
        color:rgba(255, 255, 255, 0.5);
        opacity: 0;
    }
    .button>svg{
        margin: 90px 0;
    }
    .slideshow:hover ~ .button{
        opacity: 1;
    }
    .pervious{
        left: 0;
    }
    .next{
        right: 0;
    }
    .item{
        display: block;
        width: 100%;
        height: 100%;
        background-color: #333
    }
    .item img{
        width: 100%;
        height: auto;
        opacity: 0.5;
    }
    .item>div:first-of-type{
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .slideshow-wrap{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        height: 250px;
        position: relative;
    }
    .button:hover{
        opacity: 1;
        color: rgba(255, 255, 255, 1);
    }
    .slideshow{
        position: relative;
        width: 100%;
        height: 200px;
        padding-left: 0;
    }
    .slideshow:after{
        content: '';
        display: block;
        clear: both;
    }
    .slideshow>li{
        position: absolute;
        height: 200px;
        width:542px;
        z-index: -1;
        transform: scale(0.83);
        transform-origin: center;
        left: 50%;
        margin-left: -271px;
        transition: 0.5s all ease-in-out;
    }
    .slideshow img{
        opacity: 0.3;
    }
    .slideshow .middle-display img{
        opacity: 1;
    }
    .slideshow .right-side{
        transform:translateY(5px) scale(0.95);
        left: 101.2%;
        margin-left: -542px;
        transition: 0.5s all ease-in-out;
    }
    .slideshow .left-side{
        transform: translateY(5px) scale(0.95);
        left: -1.2%;
        margin-left: 0;
        transition: 0.5s all ease-in-out;
    }
    .slideshow .middle-display{
        left: 50%;
        margin-left: -271px;
        transform: scale(1);
        opacity: 1;
        z-index: 10;
        transition: 0.5s all ease-in-out;
    }
    .left-side,.right-side{
        z-index: 2;
    }
    .tag{
        position: absolute;
        bottom: 10px;
        right:-3px;
        font-size: 12px;
        color: #fff;
        padding: 3px 7px 3px 12px;
        border-top-left-radius: 11px;
        border-bottom-left-radius: 11px;
        transform: scale(1.05);
    }
    .tag-ondisplay{
        transform: scale(1) !important;
    }
    .red{
        background-color: #cc4a4a
    }
    .blue{
        background-color: #4a79cc;
    }
</style>

