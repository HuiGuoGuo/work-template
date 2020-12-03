<template>
    <el-container style="padding-top: 10px" >
        <NavBar/>
        <router-view/>
    </el-container>
</template>

<script>
    import NavBar from "@/pages/NavBar";

    export default {
        name: "Layout",
        components: {
            NavBar
        }
    }
</script>

<style scoped>

</style>
