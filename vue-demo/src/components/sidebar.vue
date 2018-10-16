<template>
    <div class="sidebar">
        <GeminiScrollbar class="sidebar-scroll" :style="{'height':sidebarHeight}">
            <SideList :list='sideListAll'></SideList>
        </GeminiScrollbar>
    </div>
</template>

<script>
    import Vue from 'vue'
    import SideList from './child/sidebar/sideList.vue'

    export default {
        name:'SideBar',
        components:{
            SideList,
        },
        data(){
            return{
                sideListAll:[
                    {
                        title:'推荐',
                        modifiable:false,
                        retractable:false,
                        extended:true,
                        list:[
                            {icon:'musicbyinle',word:'发现音乐',url:'/index',onClick:true},
                            {icon:'radiowaves',word:'私人FM',url:'/private',onClick:false},
                            {icon:'ico-presetvideo-IJuv',word:'MV',url:'/mv',onClick:false},
                            {icon:'icon_friend',word:'朋友',url:'/friend',onClick:false}
                        ]
                    },
                    {
                        title:'我的音乐',
                        modifiable:false,
                        retractable:false,
                        extended:true,
                        list:[
                            {icon:'musicnot',word:'本地音乐',url:'/localmusic', onClick:false},
                            {icon:'download',word:'下载管理',url:'/download', onClick:false},
                            {icon:'cloud',word:'我的音乐云盘',url:'/musiccloud',onClick:false},
                            {icon:'follower',word:'我的歌手',url:'/follow',onClick:false}
                        ]
                    },
                    {
                        title:'创建的歌单',
                        modifiable:true,
                        retractable:true,
                        extended:true,
                        list:[                       
                            {icon:'heart1',word:'本地音乐',url:'/favouritelist', onClick:false},
                            {albumID:3,icon:'musicmenu',word:'歌单1',url:'/musiclist1', onClick:false},
                            {albumID:2,icon:'musicmenu',word:'歌单2',url:'/musiclist2',onClick:false},
                            {albumID:1,icon:'musicmenu',word:'歌单3',url:'/misiclist3',onClick:false}
                        ]
                    }
                ],
                sidebarHeight:null
            }
        },
        mounted() {            
            // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
            this.sidebarHeight = document.documentElement.clientHeight-100+'px';
            // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
            const app = this;
            window.onresize = function temp() {
                app.sidebarHeight = document.documentElement.clientHeight-100+'px';
            };
        },
    }
</script>

<style scoped>
    .sidebar{
        background: #f5f5f7;
        width: 200px;
        position: absolute;
        left: 0;
        top:50px;
        border-right: 1px solid #eee;
    }
    .gm-scrollbar.-vertical {
        background-color: #f0f0f0
    }
    
    /* horizontal scrollbar track */
    .gm-scrollbar.-horizontal {
        background-color: transparent;
    }
    
    /* scrollbar thumb */
    .gm-scrollbar .thumb {
        background-color: rebeccapurple;
    }
    .gm-scrollbar .thumb:hover {
        background-color: fuchsia;
    }
</style>


