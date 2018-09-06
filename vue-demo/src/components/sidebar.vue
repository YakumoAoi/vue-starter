<template>
    <div class="tryTitle">
        <h1>{{message}}</h1>
    </div>
</template>

<script>
export default {
    name:'firstTry',
    data(){
        return{
            message:'首次尝试'
        }
    }
}
</script>

<style>
    .tryTitle{
        height:200px;
        color:#fff;
        background-color: rgb(255, 157, 0);
        text-align:center;
    }
    .tryTitle h1{
        font-size:60px;
    }
</style>


