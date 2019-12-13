<template>
  <div class="wrap">
    <el-container class="right-container">
      <Header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </Header>
      <el-main class="home-main">
        <h2 class="main-title">数据统计</h2>
        <el-row :gutter="20" class="el-row">
          <el-col :span="4">
            <div class="grid-content bg-purple col-title">
              当日数据：
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              22
              <span>新增用户</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              3
              <span>新增订单</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              39
              <span>新增管理员</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              9611
              <span>新增API请求</span>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="el-row">
          <el-col :span="4">
            <div class="grid-content bg-purple col-title second">
              总数据：
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              22
              <span>新增用户</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              3
              <span>新增订单</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              39
              <span>新增管理员</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              9611
              <span>新增API请求</span>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <t-count></t-count>
    </el-container>
  </div>
</template>
<script type="text/javascript">
import Header from '../header/Header'
import TCount from '../total-count/TotalCount'

export default {
  name: 'Home',
  data () {
    return {
      currentRouter: '首页'
    }
  },
  components: {
    Header,
    TCount
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  width 100%
  height 100vh
  overflow-y auto
  margin-right -17px
  .right-container
    display flex
    flex-direction column
    .home-main
      padding-bottom 10vh
  .main-title
    font-size 30px
    font-weight bold
    text-align center
    padding 20px
  .el-row
    margin-top 20px
    font-size 22px
    .grid-content
      color #333
      background: #e5e9f2
      padding 10px 0
      text-align center
      border-radius 10px
      span
        color #666
        font-size 14px
    .col-title
      color #fff
      background-color #ff9800
    .col-title.second
      background-color #20a0ff
</style>
