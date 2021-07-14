<template>
    <div class="anilogo">
        No Spaghetti Code
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .anilogo {
        z-index: 10;
        position: absolute;
        top: 15%;
        left:15%;
        color:#E1F5FE;
        font-size: 25px;
        padding: 5px;
        font-family: sans;
        animation: animate 10s linear infinite;
                
    }
    @keyframes animate {
        0% {
            letter-spacing:10px;
            color:#0288D1;
            font-size: 30px;
            display: none;
        }
        20%{
            letter-spacing:5px;
            color: #039BE5;
            font-size: 25px;
        }
        40%{
            letter-spacing:10px;
            color:#29B6F6;
            font-size: 20px;
            display: 0;
        }
        60%{
            letter-spacing:5px;
            color:#4FC3F7;
            font-size: 15px;
            display: 0;
        }
        80%{
            letter-spacing:10px;
            color: #81D4FA;
            font-size: 10px;
        }
        100%{
            letter-spacing:9px;
            color: #B3E5FC
        }
        
        
    }
</style>