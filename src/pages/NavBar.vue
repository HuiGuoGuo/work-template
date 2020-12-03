<template>
    <el-aside >
        <el-menu :default-openeds="['1', '3']" router>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-data-analysis  "></i>数据管理</template>
                <el-menu-item-group>
                    <el-menu-item index="1-1" route="/index">加班数据</el-menu-item>
                    <el-menu-item index="1-2" route="/template">工作周报</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "NavBar",
    }
</script>

<style scoped>

</style>
