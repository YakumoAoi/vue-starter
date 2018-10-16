<template>
    <div class="volume-control">
        <div class="volume-icon">
            <Iconsvg :iconClass="volume===0?'volume-mute':'volume-up'"></Iconsvg>
        </div>
        <div class="bar-wrap">
            <div class="bar">
                <div class="volume-bar-wrap" :style="'width:'+volumeLevel">
                    <div class="volume-bar"></div>
                    <div class="volume-point">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'VolumeControl',
    data(){
        return{
            volume:10
        }
    },
    computed:{
        volumeLevel(){
            return this.volume+'%'
        }
    }
}
</script>
<style scoped>
    .volume-icon{
        color: #777;
        font-size: 20px;
    }
    .volume-icon:hover{
        color: #000;
    }
    .volume-bar-wrap{
        position: relative;
        width: 100%;
    }
    .volume-bar-wrap::after{
        content: '';
        display: block;
        clear: both;
    }
    .volume-bar{
        float: left;
        background-color: #e83c3c;
        width: 100%;
        height: 4px;
        border-radius: 4px;
    }
    .volume-point{
        position: absolute;
        right: -7px;
        top: -5px;
        width: 14px;
        height: 14px;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        padding: 4px;
        opacity: 0;
    }
    .bar-wrap:hover .volume-point{
        opacity: 1;
    }
    .volume-point div{
        width: 4px;
        height:4px;
        background-color: #e83c3c;
        border-radius: 50%;
    }
    .volume-control{
        float: left;
        width: 150px;
        padding: 14px 10px 12px 10px;
        margin-right: 10px;
    }
    .volume-control:after{
        content: '';
        display: block;
        clear: both;
    }
    .volume-control>div{
        float: left;
    }
    .bar{
        width: 100%;
        height: 4px;
        background-color: #ddd;
        position: relative;
        border-radius: 3px;
    }
    .bar-wrap{
        margin: 3px 0 0 5px;
        float: left;
        width: 100px;
        padding: 6px 0;
        cursor: pointer;
    }

</style>


