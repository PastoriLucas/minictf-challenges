<template>
    <div id="main">
        <div id="gallery-block">
            <img src="../assets/milky-way.jpg">
            <img src="../assets/nature.webp">
                        <img src="../assets/alberta.webp">
            <img src="../assets/ocean.webp">
            <img src="../assets/polynesia.webp">
            <img src="../assets/road.jpg">
            <img src="../assets/sunset.webp">
            <img src="../assets/thunderstorm.webp">
            <img src="../assets/landscape.webp">
            <img src="../assets/leaves.jpg">

        </div>

        <b-button type="is-info" v-on:click="give" id="flag" >Flag</b-button>
    </div>
</template>
<script>
export default {
    name : 'Gallery',

    data() {
        return {
            
        }
    },

    methods: {
        give(){
            alert('get this : '+atob('RVBIQ3toaWRlX2FuZF9zZWVrfQ=='))
        },
    },
}
</script>
<style>
    #main{
        height: 100%;
        width: 100%;
    }
    #gallery-block{
        padding-top: 0%;
    }
    #flag{
        margin: 5% 0%;
        display: none;
    }
    img{
        width: 44%;
        margin-left: 3%;
        margin-top: 2% ;
        margin-bottom: 2%;
    }
</style>