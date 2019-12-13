<template>
  <div class="wrap">
    <el-container class="right-container">
      <Header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/echart-test'}">用户分布</el-breadcrumb-item>
        </el-breadcrumb>
      </Header>
      <el-main class="echart-wrap">
        <v-chart :options="pie"
                 ref="pie"
                 autoresize
        />
      </el-main>
    </el-container>
  </div>
</template>
<script type="text/javascript">
import Header from '../header/Header'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

export default {
  components: {
    'v-chart': ECharts,
    Header
  },
  data () {
    return {
      currentRouter: '首页 / 用户分布',
      pie: {
        title: {
          text: '用户访问来源',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['北京', '上海', '深圳', '杭州', '其他']
        },
        series: [
          {
            name: '用户分布',
            type: 'pie',
            radius: '60%',
            center: ['50%', '60%'],
            data: [
              {
                value: 20, name: '北京'
              },
              {
                value: 20, name: '上海'
              },
              {
                value: 15, name: '深圳'
              },
              {
                value: 10, name: '杭州'
              },
              {
                value: 35, name: '其他'
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
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
    .echart-wrap
      display flex
      justify-content left
      align-item center
</style>
