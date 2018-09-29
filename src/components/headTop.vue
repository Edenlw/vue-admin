<template>
  <div class="head_contaioner">
      <el-row>
        <el-col :span="20">
          <el-breadcrumb separator="/" style="padding-left: 25px;height: 60px;line-height: 60px;background: #EFF2F7;">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>  
          </el-breadcrumb>
        </el-col>
        <el-col :span="4">
          <el-dropdown  type="primary">
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
export default {


}
</script>
<style>

</style>
