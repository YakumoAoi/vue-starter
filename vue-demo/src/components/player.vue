<template>
    <div class="player">
        <!-- <audio src="/static/TSUBAKI - Ocelot.flac" autoplay="auto">
            Your browser does not support the audio element.
        </audio> -->
        <div class="play-control">
            <div>
                <Iconsvg iconClass="diyiyeshouyeshangyishou"></Iconsvg>
            </div>
            <div>
                <Iconsvg :iconClass="playing?'stop':'bofang'"></Iconsvg>
            </div>
            <div>
                <Iconsvg iconClass="zuihouyiyemoyexiayishou"></Iconsvg>
            </div>
        </div>
        <ProgressBar :currentProgress="currentProgress" :totalTime="totalTime"></ProgressBar>
        <VolumeControl></VolumeControl>
        <div class="play-list-display">
            <Iconsvg iconClass="plist"></Iconsvg>
            <div>{{playlist}}</div>
        </div>
        <div class="play-setting">
            <Iconsvg :iconClass="playingRule"></Iconsvg>
            <div :class="lrcSwitch">
                <Iconsvg iconClass="lrc"></Iconsvg>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressBar from './child/player/progressBar.vue'
import VolumeControl from './child/player/volumeControl.vue'
export default {
    name:'Player',
    data(){
        return {
            playing:false,
            loopRule:0,    //0 no loop ; 1 single loop ; 2 list loop ; 3 random
            lrcOnDisplay:false,
            playlist:233,
            currentProgress:400,
            totalTime:400
        }
    },
    components:{
        ProgressBar,
        VolumeControl
    },
    computed:{
        lrcSwitch(){
            if(this.lrcOnDisplay) {
                return 'lrcOn'
            }else{
                return 'lrcOff'
            }
        },
        playingRule(){
            switch (parseInt(this.loopRule)) {
                case 1:
                    return 'icon'
                    break;
                case 2:
                    return 'danquxunhuan'
                    break;
                case 3:
                    return 'xunhuanbofang'
                    break;
                case 4:
                    return 'suijibofang'
                    break;
                default:
                    return 'xunhuanbofang'
                    break;
            }
        }
    }
}
</script>
<style scoped>
    .play-list-display{
        float: right;
        margin: 15px 14px 0 0;
    }
    .play-list-display::after{
        content: '';
        display: block;
        clear: both;
    }
    .play-list-display>div,.play-list-display>svg{
        float: left;
    }
    .play-list-display>svg{
        font-size: 19px;
    }
    .play-list-display>div{
        padding: 3px 13px 3px 5px;
        font-size: 9px;
        background-color: #ddd;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .play-setting{
        float: right;
        padding: 16px 0 0 0 ;
        margin-right: 13px;
    }
    .play-setting>svg,.play-setting>div{
        float: left;
    }
    .play-setting>div{
        margin-top: -3px;
        font-size: 22px;
    }
    .play-setting>svg{
        margin-right: 14px;
        font-size: 18px;
    }
    .play-setting:after{
        content: '';
        display: block;
        clear: both;
    }
    .play-control{
        float: left;
        margin: 7px 9px 0 6px;
    }
    .play-control:after{
        content: '';
        display: block;
        clear: both;
    }
    .play-control>div:first-of-type,.play-control>div:last-of-type{
        padding: 1px 3px;
        font-size: 24px;
        margin-top: 3px;
    }
    .play-control>div:nth-child(2){
        padding: 3px 4px 3px 7px;
        font-size: 24px;
    }
    .play-control>div{
        background-color: #e83c3c;
        border-radius: 50%;
        color: #fff;
        float: left;
        margin: 0 13px;
        cursor: pointer;
    }
    .player{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #f6f6f8;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .lrcOff{
        opacity: 0.7;
        color: #000;
    }
    .lrcOff:hover{
        opacity: 1;
    }
    .lrcOn{
        background-color:#555;
        color: #fff;
    }
    .lrcOn:hover{
        background-color: transparent;
        color: #000;
    }
</style>


