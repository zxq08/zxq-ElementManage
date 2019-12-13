<template>
  <div id="app" class="index">
    <el-container class="index-container">
      <el-aside class="home-aside">
        <el-menu background-color="#324157"
                 text-color="#bfcbc0"
                 active-text-color="#20a0ff"
                 :default-active="$route.path"
                 unique-opened
                 router
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <span>管理数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/data-manager/user-list">用户列表</el-menu-item>
              <el-menu-item index="/data-manager/store-list">店铺列表</el-menu-item>
              <el-menu-item index="/data-manager">数据管理</el-menu-item>
              <el-menu-item index="/data-add">添加数据</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/echarts-test">数据统计</el-menu-item>
          <el-menu-item index="4">导航三</el-menu-item>
          <el-submenu index="5">
            <template slot="title">
              <span>导航四</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">选项一</el-menu-item>
              <el-menu-item index="5-2">选项二</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <router-view />
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" scoped>
.index
  width 100vw
  height 100vh
  overflow hidden
  .index-container
    display flex
  .home-aside
    width 20% !important
    height 100vh
    background #324157
</style>
