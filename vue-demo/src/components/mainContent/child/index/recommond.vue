<template>
    <div>
        <div>
            <Slideshow :list="slideshow"></Slideshow>
        </div>
        <!-- <div>
            <div>
                <span>推荐歌单</span>
                <a href="/playlist">
                    <span>更多</span>
                    <Iconsvg iconClass="right1"></Iconsvg>
                </a>
            </div>
            <ul>
                <li>
                    <a href="javascript:void(0)">
                        <p>根据您的音乐口味生成每日更新</p>
                        <div>
                            <span>{{localWeekString}}</span>
                            <h1>{{date.day}}</h1>
                        </div>
                    </a>
                    <a href="javascript:void(0)">
                        <p>每日歌曲精选</p>
                    </a>
                </li>
                <li v-for="(item,index) in playList" :key="index">
                    <a href="javascript:void(0)">
                        <div>
                            <Iconsvg iconClass='erjiheadphones381'></Iconsvg>
                            <span>{{playList.palyTime}}</span>
                        </div>
                        <div>
                            <Iconsvg iconClass="bofang"></Iconsvg>
                        </div>
                        <img :src="imgUrl" alt="">
                        <p>{{playList.introduce}}</p>
                    </a>
                    <a href="javascript:void(0)">
                        <p>{{playList.name}}</p>
                    </a>
                </li>
            </ul>
        </div> -->
    </div>
</template>
<script>
import Slideshow from './slideshow.vue'
export default {
    name:'Recommond',
    data(){
        return {
            slideshow:[
                {type:1,imgUrl:'/static/listImage.jpg',destUrl:'/'},       // 1  VIP专享； 2 独家； 3独家策划； 4 演出； 5 新碟首发；6 新歌首发； 7 商城
                {type:2,imgUrl:'/static/listImage.jpg',destUrl:'/'},
                {type:1,imgUrl:'/static/listImage.jpg',destUrl:'/'},
                {type:3,imgUrl:'/static/listImage.jpg',destUrl:'/'},
                {type:4,imgUrl:'/static/listImage.jpg',destUrl:'/'},
                {type:5,imgUrl:'/static/listImage.jpg',destUrl:'/'},
                {type:6,imgUrl:'/static/listImage.jpg',destUrl:'/'},
                {type:7,imgUrl:'/static/listImage.jpg',destUrl:'/'}
            ],
            playList:[
                {playlistID:1000001,name:'list 1',playTime:100,introduce:'介绍播放列表1'},
                {playlistID:1000002,name:'list 2',playTime:200,introduce:'介绍播放列表2'},
                {playlistID:1000003,name:'list 3',playTime:300,introduce:'介绍播放列表3'},
                {playlistID:1000004,name:'list 4',playTime:400,introduce:'介绍播放列表4介绍播放列表4介绍播放列表4介绍播放列表4'},
                {playlistID:1000005,name:'list 5',playTime:500,introduce:'介绍播放列表5'},
                {playlistID:1000006,name:'list 6',playTime:600,introduce:'介绍播放列表6'},
                {playlistID:1000007,name:'list 7',playTime:700,introduce:'介绍播放列表7'},
                {playlistID:1000008,name:'list 8',playTime:800,introduce:'介绍播放列表8'},
                {playlistID:1000009,name:'list 9',playTime:900,introduce:'介绍播放列表9'}
            ],
            date:{
                week:new Date().getDay(),
                day:new Date().getDate()
            }
        }
    },
    computed:{
        localWeekString(){
            switch (this.date.week) {
                case 0:
                    return "星期天"
                    break;
                case 1:
                    return "星期一"
                    break;
                case 2:
                    return "星期二"
                    break;
                case 3:
                    return "星期三"
                    break;
                case 4:
                    return "星期四"
                    break;
                case 5:
                    return "星期五"
                    break;
                case 6:
                    return "星期六"
                    break;
                default:
                    break;
            }
        }
    },
    mounted:function(){
        console.log(this.date)
    },
    components:{
        Slideshow
    }
}
</script>

