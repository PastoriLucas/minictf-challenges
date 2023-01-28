<template >
    <div id="main">
        Flag : {{flag}}
    </div>
</template>
<script>
export default {
    name : 'Flag',

    data() {
        return {
            flag : atob("RVBIQ3tiZXR0ZXJfdGhhbl90aGVfcm91dGVyfQ=="),
        }
    },
}
</script>
<style >
    
</style>