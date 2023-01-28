<template lang="">
    <div id="header">   
        <div>
            <b-navbar fixed="top" card-header pills>
                <b-navbar-nav justified="true">
                    <b-nav-item href="/">Home</b-nav-item>
                    <b-nav-item href="/gallery">Gallery</b-nav-item>
                    <b-nav-item href="/admin">Admin</b-nav-item>
                    <b-nav-item href='https://youtu.be/dQw4w9WgXcQ'>Flag</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
    </div>
</template>
<script>

export default {
    name : "Header",

    data:() => ({
        
    }),

    methods: {
        
    },
}
</script>
<style scoped>
    #header{
        box-shadow: 5px 5px 5px grey;
    }
</style>