<template>
  <div class="wrap">
    <el-container class="right-container">
      <Header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/data-add'}">添加数据</el-breadcrumb-item>
        </el-breadcrumb>
      </Header>
      <el-main>
        this is data-add
        type: 'category', /*
          minInterval: 1,
          maxInterval: 3600 * 24 * 1000, */
          /* boundaryGap: ['2019-08-28', '2019-09-03'] */
          data: this.xArrName
      </el-main>
    </el-container>
  </div>
</template>
<script type="text/javascript">
import Header from '../header/Header'

export default {
  name: 'DataAdd',
  data () {
    return {
      currentRouter: '首页 / 添加数据'
    }
  },
  components: {
    Header
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
</style>
