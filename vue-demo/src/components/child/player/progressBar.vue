<template>
    <div class="progress-bar" :style="'width:'+progressBarLen.wrap">
        <span>{{playertime.current}}</span>
        <div class="bar" :style="'width:'+progressBarLen.bar">
            <div class="completed-part">
                <div class="completed-bar"></div>
                <div class="progress-point">
                    <div></div>
                </div>
            </div>
        </div>
        <span>{{playertime.total}}</span>
    </div>
</template>
<script>
export default {
    name:'ProgressBar',
    data(){
        return {
            clientWidth:document.documentElement.clientWidth
        }
    },
    props:{
        currentProgress:{
            type:Number,
            required:true
        },
        totalTime:{
            type:Number,
            required:true
        }
    },
    computed:{
        progressBarLen(){
            return {
                    wrap:(this.clientWidth-489)+'px',
                    bar:(this.clientWidth-627)+'px'
                }
        },
        playertime(){
            function timeStandrad(input){
                if(isNaN(parseInt(input))) {
                    console.log("输入错误")
                    return "00:00"
                }
                let time=parseInt(input)
                let second=''
                let restSecond=time%60
                let minute=''
                let restMinute=Math.floor(time/60)
                if(restSecond<10) {
                    second='0'+restSecond
                }else{
                    second=restSecond
                }
                if(restMinute<10){
                    minute='0'+restMinute
                }else{
                    minute=restMinute
                }
                console.log(minute)
                console.log(second)
                return minute+':'+second 
            }
            return {
                total:timeStandrad(this.totalTime),
                current:timeStandrad(this.currentProgress)
            }
        },
        completeBar(){
            return Math.round(this.currentProgress/this.totalTime * 100)+'%'
        }
    },
    mounted:function(){
        let app=this
        window.onresize=function(){
            app.clientWidth=document.documentElement.clientWidth
        }
    }
}
</script>
<style scoped>
    .progress-bar{
        width: 600px;
        float: left;
        padding: 18px 10px 15px 10px;
    }
    .progress-bar:after{
        content: '';
        display: block;
        clear: both;
    }
    .progress-bar>span{
        display: block;
        font-size: 13px;
        color: #222;
        float: left;
    }
    .bar{
        float: left;
        margin: 5px 21px 0 13px;
        width: 450px;
        height: 4px;
        background-color: #ccc;
        position: relative;
        border-radius: 3px;
        cursor: pointer;
    }
    .completed-part{
        position: relative;
    }
    .completed-bar{
        background-color: #e83c3c;
        height: 4px;
        border-radius: 4px;
    }
    .progress-point{
        position: absolute;
        right: -7px;
        top: -5px;
        width: 14px;
        height: 14px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        padding: 4px;
    }
    .progress-point:hover{
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1)
    }
    .progress-point div{
        width: 4px;
        height:4px;
        background-color: #e83c3c;
        border-radius: 50%;
    }
</style>


