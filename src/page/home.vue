<template>
    <div>
        <head-top></head-top>
        <el-container style="width:100%;height:100%;">
            <el-row justify="center">
              <h3>数据统计</h3>
              <h1>中途得</h1>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center" style="width:100%;">
                <el-col :span="8"><div class="grid-content bg-purple">12</div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light">33</div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">55</div></el-col>
            </el-row>
        </el-container>
    </div>
</template>
<script>
    import headTop from '../components/headTop';
    export default {
        components : {
            headTop
        },
    }
</script>
<style>
   .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>