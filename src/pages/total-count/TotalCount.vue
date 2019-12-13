<template>
  <div class="wrap">
    <el-container class="right-container">
      <el-main class="echart-wrap">
        <v-chart :options="line"
                 ref="line"
                 autoresize
                 class="TocalChart"
        />
      </el-main>
    </el-container>
  </div>
</template>
<script type="text/javascript">
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/markPoint'

export default {
  name: 'TotalCount',
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      xArrName: [],
      currentRouter: '首页 / 用户分布',
      line: {
        title: {
          text: '走势图',
          subtext: '来自zxq'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['新增用户', '新增管理员', '新增订单']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data:
            [ '2019-08-28',
              '2019-08-29',
              '2019-08-30',
              '2019-08-31',
              '2019-09-01',
              '2019-09-02',
              '2019-09-03'
            ]
        },
        yAxis: [
          {
            name: '用户',
            type: 'value',
            min: 0,
            max: 200,
            axisLabel: {
              formatter: '{value} 位'
            }
          }, {
            name: '订单',
            type: 'value',
            min: 0,
            max: 200,
            axisLabel: {
              formatter: '{value} 单'
            }
          }
        ],
        series: [
          {
            yAxisIndex: 0,
            name: '新增用户',
            type: 'line',
            data: [11, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            yAxisIndex: 0,
            name: '新增管理员',
            type: 'line',
            data: [22, 10, 20, 33, 4, 8, 20],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            yAxisIndex: 1,
            name: '新增订单',
            type: 'line',
            data: [100, 50, 120, 130, 150, 200, 100],
            markPoint: {
              data: [
                { name: '周最低订单', type: 'min' },
                { name: '周最高订单', type: 'max' }
              ]
            }
          }
        ]
      }
    }
  },
  created () {
    /* var D = new Date()
    var year = D.getFullYear()
    var month = D.getMonth() + 1
    var day = D.getDate() */
    this.xArrName = [
      /* '2019-08-28',
      '2019-08-29',
      '2019-08-30',
      '2019-08-31',
      '2019-09-01',
      '2019-09-02',
      '2019-09-03' */
      /* year + '-' + month + '-' + (day - 6),
      year + '-' + month + '-' + (day - 5),
      year + '-' + month + '-' + (day - 4),
      year + '-' + month + '-' + (day - 3),
      year + '-' + month + '-' + (day - 2),
      year + '-' + month + '-' + (day - 1),
      year + '-' + month + '-' + day */
    ]
    /* for (var i=0; i<7; i++) {
      var dtDay = day - i > 0
      this.xArrName.push(dt)
    } */
    console.log(this.xArrName)
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
      .TocalChart
        width 100%
</style>
