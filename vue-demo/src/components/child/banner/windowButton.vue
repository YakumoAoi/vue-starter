<template>
    <div class="window-button">
        <ul>
            <li>
                <a href="javascript:void(0)">
                    <img src="../../../assets/minimize.png" alt="" width="12px" height="auto">
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <Iconsvg iconClass="MINUS"></Iconsvg>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <Iconsvg iconClass="zuidahua"></Iconsvg>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <Iconsvg iconClass="i-close"></Iconsvg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'WindowButton',
}
</script>

<style scoped>
    .window-button{
        float: left;
        margin-top: 16px;
    }
    .window-button>ul:after{
        content: '';
        display: block;
        clear: both;
    }
    .window-button>ul{
        padding-left: 0;
        margin: 0;
    }
    .window-button>ul>li{
        float: left;
        width: 23px;
    }
    .window-button>ul>li:first-of-type>a{
        padding-top: 2px;
    }
    .window-button>ul>li>a{
        display: block;
        font-size: 14px;
    }
    .window-button>ul>li>a>svg{
        color: #fff;
        opacity: 0.7;
    }
    .window-button>ul>li>a:hover svg{
        opacity: 1;
    }
</style>


