<template>
    <div class="setting-msg">
        <ul>
            <li>
                <a href="javascript:void(0)" @click="openDropDown('appearance')">
                    <Iconsvg iconClass="clothing"></Iconsvg>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" @click="openDropDown('messageBox')">
                    <Iconsvg iconClass="icmessage"></Iconsvg>
                </a>
            </li>
            <li>
                <a href="./setting">
                    <Iconsvg iconClass="setting"></Iconsvg>
                </a>
            </li>
        </ul>
        <div class="split-line"></div>
    </div>
</template>

<script>
export default {
    name:'SettingAndMessage',
    // data(){
    //     return {}
    // },
    methods:{
        openDropDown(component){
            if(component==='appearance'){

            }
        }
    }
}
</script>

<style scoped>
    .split-line{
        margin:15px 14px 0 0;
        height: 20px;
        width: 1px;
        background-color: rgba(0, 0, 0, 0.15);
        float: right;
    }
    .setting-msg{
        float: left;
    }
    .setting-msg:after{
        content: '';
        display: block;
        clear: both;
    }
    .setting-msg>ul{
        margin:0;
        padding-left: 0;
        float: left;
    }
    .setting-msg>ul>li{
        float: left;
        width: 40px;
        padding-top: 14px;
    }
    .setting-msg>ul>li:first-of-type{
        width: 52px;
        padding-left: 12px;
    }
    .setting-msg>ul>li:last-of-type{
        width: 45px;
        padding-right: 5px;
    }
    .setting-msg>ul>li>a{
        font-size: 20px;
        display: block;
        text-align: center;
        color: #fff
    }
    .setting-msg>ul>li>a>svg{
        opacity: 0.7;
    }
    .setting-msg>ul>li>a:hover svg{
        opacity: 1;
    }
</style>

