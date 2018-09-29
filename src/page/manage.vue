<template>
    <div style="width:100%;height:100%;">
        <el-row style="height:100%;">
            <el-col :span="4" style="background:#324057;min-height:100%;overflow:hidden;">
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#324057"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>数据管理</span>
                        </template>
                        <el-menu-item index="2-1">用户列表</el-menu-item>
                        <el-menu-item index="2-2">商家列表</el-menu-item>
                        <el-menu-item index="2-3">食品列表</el-menu-item>
                        <el-menu-item index="2-4">订单列表</el-menu-item>
                        <el-menu-item index="2-5">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-plus"></i>
                            <span slot="title">添加数据</span>
                        </template>
                        <el-menu-item index="3-1">用户列表</el-menu-item>
                        <el-menu-item index="3-2">商家列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-star-on"></i>
                            <span slot="title">图表</span>
                        </template>
                        <el-menu-item index="4-1">商家列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-edit"></i>
                            <span slot="title">编辑</span>
                        </template>
                        <el-menu-item index="5-1">文本编辑</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span slot="title">设置</span>
                        </template>
                        <el-menu-item index="6-1">管理员设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-warning"></i>
                            <span slot="title">说明</span>
                        </template>
                        <el-menu-item index="7-1">说明</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20">
                <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
            </el-col>
        </el-row>
                        

    </div>
</template>
<script>
    export default{
        data() {
            return {
                
            }
        },
        methods : {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            } 
        },
        computed : {
            defaultActive : () => {
                return this.$router.path.replace('/','')
            }
        }
    }
</script>
<style>
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    } 
    .el-aside {
        color: #333;
    }   
    .el-menu{
        border-right-width: 0;
    }
</style>