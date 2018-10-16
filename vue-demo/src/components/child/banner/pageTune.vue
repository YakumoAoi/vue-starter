<template>
    <div class="indicator">
        <div class="backward">
            <Iconsvg :iconClass='iconlist[0]'></Iconsvg>
        </div>
        <div class="forward">
            <Iconsvg :iconClass='iconlist[1]'></Iconsvg>
        </div>
    </div>
</template>

<script>
export default {
    name:'PageTune',
    data(){
        return{
            iconlist:[
                'left',
                'right'
            ]
        }
    },
    components:{
        
    }
}
</script>

<style scoped>
    .indicator{
        float: left;
        border: 1px solid #a82828;
        border-radius: 4px;
        margin: 15px 10px 14px 49px;
    }
    .forward,.backward{
        float: left;
        color: #fff;
    }
    .indicator .forward{
        border-left: 1px solid #a82828;
    }
    .forward,.backward{
        padding: 1px 6px;
    }
    .left,.right{
        width: 0.9em;
        height: 0.8em;
        vertical-align: -0.07em;
    }
</style>



