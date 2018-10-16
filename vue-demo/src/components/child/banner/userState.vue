<template>
    <div class="user-state">
        <div class="user-banner">
            <a href="/userinfo" class="avatar-bg banner-avatar">
                <img src="" alt="">
            </a>
            <div :class="dropDownButton" @click="dropDownMenu()">
                <span class="username">{{user?user.name:'未登录'}}</span>
                <iconsvg iconClass='down'></iconsvg>
            </div>
        </div>

        <div :class="'drop-down '+dropDownDisplay" v-if="user">
            <div class="triangle"></div>
            <div class="check-in">
                <a href="" class="user-info-page">
                    <div href="/userinfo" class="avatar-bg">
                        <img src="" alt="">
                    </div>
                    <span class="username">{{user?user.name:'未登录'}}</span>
                </a>
                <a href="/checkin" class="check-in-button">
                    <iconsvg iconClass="coins-"></iconsvg>
                    <span>签到</span>
                </a>
            </div>
            <ul class="user-subscribe">
                <li v-for="(item,index) in this.user.states" :key="index">
                    <a :href="item.url">
                        <span class="state-data">{{item.stateLength}}</span>
                        <span class="state-name">{{item.stateName}}</span>
                    </a>
                </li>
            </ul>
            <ul class="user-data">
                <li v-for="(item,index) in this.user.detail" :key="index">
                    <a :herf="item.urls" target="_blank" rel="noopener norefferrer">
                        <Iconsvg :iconClass='item.icon'></Iconsvg>
                        <span>{{item.stateName}}</span>
                        <Iconsvg iconClass='right'></Iconsvg>
                        <span v-if="item.VIPClass">{{item.VIPClass}}</span>
                        <span v-if="item.level">Lv {{item.level}}</span>
                        <span v-if="item.points">{{item.points}} 积分</span>
                    </a>
                </li>
            </ul>
            <ul class="user-data user-setting">
                <li v-for="(item,index) in this.user.setting" :key="index">
                    <a :herf="item.urls">
                        <Iconsvg :iconClass='item.icon'></Iconsvg>
                        <span>{{item.stateName}}</span>
                        <Iconsvg iconClass='right'></Iconsvg>
                        <ul v-if="item.otherplatformAccount" class="other-platform">
                            <li v-for="(it,inx) in item.otherplatformAccount" :key="inx">
                                <Iconsvg :iconClass='it.icon' :class="ifBind(it.ifBind)" :title="it.platform"></Iconsvg>
                            </li>
                        </ul>
                    </a>
                </li>
            </ul>
            <ul class="user-data user-action">
                <li v-for="(item,index) in this.user.control" :key="index">
                    <a :herf="item.urls">
                        <Iconsvg :iconClass='item.icon'></Iconsvg>
                        <span>{{item.move}}</span>
                        <Iconsvg iconClass='right'></Iconsvg>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'Userstate',
    data(){
        return { 
            user:null,
            dropDownMenuToggle:false,
            loginPage:false
        }
    },
    computed:{
        dropDownButton(){
            let menuToggle=this.dropDownMenuToggle?'drop-down-click':''
            let dropDownButton='drop-down-button '+menuToggle
            return dropDownButton
        },
        dropDownDisplay(){
            let menuToggle=this.dropDownMenuToggle?'drop-down-display':''
            let dropDownDisplay='inital-style '+menuToggle
            return dropDownDisplay
        }
    },
    created:function(){
        let userToken=window.localStorage.getItem('userToken')
        if(!userToken||userToken==='') {
            console.log("执行关键词搜索")
            return this.loginResolve(null)
        }
        // this.$axios('/userinfo',{
        //     userToken:userToken
        // }).then(res=>{
        //     console.log(res)
        //     return loginResolve(res)
        // }).catch(res=>{
        //     console.log(res)
        //     console.log('request fail')
        //     return loginResolve(null)
        // })
    },
    methods:{
        dropDownMenu(){
            console.log('click')
            if(!this.user&&!this.loginPage) {
                this.loginResolve=true
            }
            if(!this.dropDownMenuToggle){
                this.dropDownMenuToggle=true
            }else{
                this.dropDownMenuToggle=false
            }
        },
        loginResolve(loginInfo){
            // if(!loginInfo) return
            // this.user=loginInfo
            let userInfo={
                avatar:'',
                name:'路人甲',
                loginIn:false,
                states:[
                    {stateName:'动态',stateLength:10},
                    {stateName:'关注',stateLength:5},
                    {stateName:'粉丝',stateLength:15}
                ],
                detail:[
                    {stateName:'会员中心',VIPClass:'未订购',icon:'shenqingchengweiVIP'},
                    {stateName:'等级',level:7,icon:'award'},
                    {stateName:'积分商城',points:144,icon:'30'}
                ],
                setting:[
                    {stateName:'个人信息设置',icon:'setting'},
                    {stateName:'绑定社交账号',icon:'caigoutonggerenbangaobaozhenzhucedenglu20',otherplatformAccount:[
                        {platform:'新浪微博',icon:'unie653',ifBind:false},
                        {platform:'豆瓣',icon:'douban0',ifBind:true}
                    ]},
                    {stateName:'导入歌单',icon:'file-add'}
                ],
                control:[
                    {move:'退出登录',icon:'power'}
                ]
            }
            this.user=userInfo
            console.log(this.user)
        },
        ifBind(ifbind){
            if(ifbind){
                return 
            }else {
                return ' noBind'
            }
        }
    },
}
</script>

<style scoped>
    ul{
        margin:0;
    }
    .other-platform{
        float:right;
    }
    .other-platform li{
        float: left;
        font-size: 17px;
        color: #999;
        margin-right: 4px;
    }
    .other-platform:after{
        display: block;
        content: '';
        clear: both;
    }
    .user-data>li>a>svg:first-of-type{
        margin-top: 2px;
    }
    .user-data>li>a>span:nth-child(2),.user-data>li>a>svg:first-of-type{
        float: left;
    }
    .user-data>li>a>span:nth-child(4),.user-data>li>a>svg:nth-child(3){
        float: right;
    }
    .user-data>li>a>svg:nth-child(3){
        font-size: 8px;
        margin-left: 6px;
        margin-top: 3px;
        color:#ddd;
    }
    .user-data>li>a{
        display: block;
        line-height: 20px;
    }
    .user-data>li>a:after{
        content: '';
        display: block;
        clear: both;
    }
    .user-data{
        font-size: 14px;
        border-top: 1px solid #e9e9e9;
        padding-left: 0;
    }
    .user-data:after{
        content: '';
        display: block;
        clear: both;
    }
    .bigger-icon{
        font-size: 22px !important;
    }
    .user-data>li{
        padding: 11px 6px 11px 18px;
    }
    .state-data{
        font-weight: bold;
    }
    .user-data>li>a>svg:first-of-type{
        font-size: 17px;
        margin-right:12px;
        color: #777;
    }
    .state-name{
        color:#222;
        font-size: 12px;
    }
    .user-subscribe{
        padding: 0 2px 22px 2px;
    }
    .user-subscribe:after{
        content: '';
        display: block;
        clear:both;
    }
    .user-subscribe li{
        float: left;
        padding: 0 32px;
        border-right: 1px solid #e9e9e9;
    }
    .user-subscribe li:last-of-type{
        border:0;
    }
    .user-subscribe span{
        display: block;
        text-align: center;
    }
    .user-info-page{
        float: left;
    }
    .check-in-button{
        background-color: #fff;
        border: 1px solid #e1e1e1;
        border-radius: 4px;
        font-size: 12px;
        padding: 5px 11px 5px 9px;
        float: right;
        margin-top:5px; 
    }
    .check-in-button svg{
        color: #555;
    }
    .check-in-button span{
        color:#222;
        margin-left: 3px;
    }
    .user-info-page .username{
        font-size: 13px;
        line-height: 45px;
    }
    .check-in{
        padding: 0 14px 18px 20px;
    }
    .check-in:after{
        content: '';
        clear: both;
        display: block;
    }
    .user-state{
        margin-top: 14px;
        position: relative;
        float: left;
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

    .drop-down{
        position: absolute;
        top: 36px;
        left: -57px;
        background-color: #fafafa;
        width: 275px;
        padding: 20px 0 2px 0;
        border: 1px solid #ccc;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        z-index:50;
    }
    .avatar-bg,.user-info-page span{
        float: left;
    }
    .user-info-page .avatar-bg{
        height: 45px;
        width: 45px;
    }
    .user-info-page span{
        margin-left: 10px;
        color: #000;
        line-height: 38px;
    }
    .user-info-page:after{
        content:'';
        display: block;
        clear: both;
    }
    .user-banner:after{
        content: '';
        display: block;
        clear: both;
    }
    .inital-style{
        display: none;
    }
    .drop-down-display{
        display: block
    }
    .unie653{
        color:#f00; /*新浪icon*/
        margin-top: 3px;
    }
    .douban0{
        color:#0f0;
        font-size: 19px;
        margin-top: 1px;
    }
    .noBind{
        color:#bbb !important;
    }
    .avatar-bg{
        width: 24px;
        height: 24px;
        background: url('../../../assets/notLogin.jpg') 0 0 no-repeat;
        background-position: center;
        background-size: cover;
        display: block;
        border-radius: 50%;
    }
    .banner-avatar{
        float: left;
    }
    .drop-down-button{
        float: left;
        margin-left: 8px;
        font-size: 10px;
        line-height: 24px;
        cursor: pointer;
        color: rgba(255,255,255,0.7);
        letter-spacing: 1px;
    }
    .drop-down-button svg{
        opacity: 0.7;
    }
    .drop-down-button:hover,.drop-down-click{
        color:rgba(255,255,255,1)
    }
    .drop-down-button:hover svg,.drop-down-click svg{
        opacity: 1;
    }
    .drop-down-button svg{
        margin-left: 4px;
    } 
</style>
