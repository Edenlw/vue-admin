<template>
  <div class="head_contaioner">
      <el-row>
        <el-col :span="20">
          <el-breadcrumb separator="/" style="padding-left: 25px;height: 60px;line-height: 60px;background: #EFF2F7;">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>  
          </el-breadcrumb>
        </el-col>
        <el-col :span="4" style="background: #EFF2F7;height:60px;line-height:87px;text-align:center">
          <el-dropdown  type="primary">
            <img src="../assets/img/touxiang.png" style="width:40px;height:40px;border-radius: 50px;"/>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>首页</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import touxiang from '../assets/img/touxiang.png'
export default {
  methods : {
  }
}
</script>
<style>

</style>
