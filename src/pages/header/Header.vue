<template>
  <el-header class="home-header">
    <div>
      <slot></slot>
    </div>
    <el-avatar icon="el-icon-user-solid"></el-avatar>
  </el-header>
</template>
<script type="text/javascript">
export default {
  name: 'Header',
  props: {
    currentRouter: String
  }
}
</script>
<style lang="stylus" scoped>
.home-header
  flex 1
  display flex
  justify-content space-between
  align-items center
  background #eff2f7
</style>
