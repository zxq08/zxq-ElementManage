<template>
  <div class="wrap">
    <el-container class="right-container">
      <Header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/data-manager/user-list'}">用户列表</el-breadcrumb-item>
        </el-breadcrumb>
      </Header>
      <el-main>
        <el-table  :data="users"
                   class="user-table"
                   highlight-current-row
        >
          <el-table-column  type="index"
                            width="100"
          >
          </el-table-column>
          <el-table-column  prop="注册日期"
                            label="注册日期"
                            width="300"
          >
          </el-table-column>
          <el-table-column  prop="姓名"
                            label="姓名"
                            width="300"
          >
          </el-table-column>
          <el-table-column  prop="地址"
                            label="地址"
                            width="300"
          >
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          @current-change="handleCurrentChange"
          :total="100">
        </el-pagination>
      </el-main>
    </el-container>
  </div>
</template>
<script type="text/javascript">
import Header from '../../header/Header'

export default {
  name: 'UserList',
  data () {
    return {
      users: [],
      data: [
        {
          index: 0,
          data: [
            {
              '注册日期': '2019-09-04 12:02',
              '姓名': 'zxq08',
              '地址': '北京'
            },
            {
              '注册日期': '2019-09-04 10:09',
              '姓名': 'zxq01',
              '地址': '上海'
            },
            {
              '注册日期': '2019-09-01 12:13',
              '姓名': 'zxq02',
              '地址': '成都'
            },
            {
              '注册日期': '2019-09-03 14:23',
              '姓名': 'zxq03',
              '地址': '深圳'
            }
          ]
        },
        {
          index: 1,
          data: [
            {
              '注册日期': '2019-09-04 12:02',
              '姓名': 'ss08',
              '地址': '北京'
            },
            {
              '注册日期': '2019-09-04 10:09',
              '姓名': 'ss01',
              '地址': '北京'
            },
            {
              '注册日期': '2019-09-01 12:13',
              '姓名': 'ss02',
              '地址': '北京'
            },
            {
              '注册日期': '2019-09-03 14:23',
              '姓名': 'ss03',
              '地址': '北京'
            }
          ]
        },
        {
          index: 2,
          data: [
            {
              '注册日期': '2019-09-04 12:02',
              '姓名': 'ss08',
              '地址': '北京2'
            },
            {
              '注册日期': '2019-09-04 10:09',
              '姓名': 'ss01',
              '地址': '北京2'
            },
            {
              '注册日期': '2019-09-01 12:13',
              '姓名': 'ss02',
              '地址': '北京2'
            },
            {
              '注册日期': '2019-09-03 14:23',
              '姓名': 'ss03',
              '地址': '北京2'
            }
          ]
        },
        {
          index: 3,
          data: [
            {
              '注册日期': '2019-09-04 12:02',
              '姓名': 'ss08',
              '地址': '北京3'
            },
            {
              '注册日期': '2019-09-04 10:09',
              '姓名': 'ss01',
              '地址': '北京3'
            },
            {
              '注册日期': '2019-09-01 12:13',
              '姓名': 'ss02',
              '地址': '北京3'
            },
            {
              '注册日期': '2019-09-03 14:23',
              '姓名': 'ss03',
              '地址': '北京3'
            }
          ]
        },
        {
          index: 4,
          data: [
            {
              '注册日期': '2019-09-04 12:02',
              '姓名': 'ss08',
              '地址': '北京4'
            },
            {
              '注册日期': '2019-09-04 10:09',
              '姓名': 'ss01',
              '地址': '北京4'
            },
            {
              '注册日期': '2019-09-01 12:13',
              '姓名': 'ss02',
              '地址': '北京4'
            },
            {
              '注册日期': '2019-09-03 14:23',
              '姓名': 'ss03',
              '地址': '北京4'
            }
          ]
        },
        {
          index: 5,
          data: [
            {
              '注册日期': '2019-09-04 12:02',
              '姓名': 'ss08',
              '地址': '北京5'
            },
            {
              '注册日期': '2019-09-04 10:09',
              '姓名': 'ss01',
              '地址': '北京5'
            },
            {
              '注册日期': '2019-09-01 12:13',
              '姓名': 'ss02',
              '地址': '北京5'
            },
            {
              '注册日期': '2019-09-03 14:23',
              '姓名': 'ss03',
              '地址': '北京5'
            }
          ]
        },
        {
          index: 6,
          data: [
            {
              '注册日期': '2019-09-04 12:02',
              '姓名': 'ss08',
              '地址': '北京6'
            },
            {
              '注册日期': '2019-09-04 10:09',
              '姓名': 'ss01',
              '地址': '北京6'
            },
            {
              '注册日期': '2019-09-01 12:13',
              '姓名': 'ss02',
              '地址': '北京6'
            },
            {
              '注册日期': '2019-09-03 14:23',
              '姓名': 'ss03',
              '地址': '北京6'
            }
          ]
        },
        {
          index: 7,
          data: [
            {
              '注册日期': '2019-09-04 12:02',
              '姓名': 'ss08',
              '地址': '北京7'
            },
            {
              '注册日期': '2019-09-04 10:09',
              '姓名': 'ss01',
              '地址': '北京7'
            },
            {
              '注册日期': '2019-09-01 12:13',
              '姓名': 'ss02',
              '地址': '北京7'
            },
            {
              '注册日期': '2019-09-03 14:23',
              '姓名': 'ss03',
              '地址': '北京7'
            }
          ]
        },
        {
          index: 8,
          data: [
            {
              '注册日期': '2019-09-04 12:02',
              '姓名': 'ss08',
              '地址': '北京8'
            },
            {
              '注册日期': '2019-09-04 10:09',
              '姓名': 'ss01',
              '地址': '北京8'
            },
            {
              '注册日期': '2019-09-01 12:13',
              '姓名': 'ss02',
              '地址': '北京8'
            },
            {
              '注册日期': '2019-09-03 14:23',
              '姓名': 'ss03',
              '地址': '北京8'
            }
          ]
        },
        {
          index: 9,
          data: [
            {
              '注册日期': '2019-09-04 12:02',
              '姓名': 'ss08',
              '地址': '北京9'
            },
            {
              '注册日期': '2019-09-04 10:09',
              '姓名': 'ss01',
              '地址': '北京9'
            },
            {
              '注册日期': '2019-09-01 12:13',
              '姓名': 'ss02',
              '地址': '北京9'
            },
            {
              '注册日期': '2019-09-03 14:23',
              '姓名': 'ss03',
              '地址': '北京9'
            }
          ]
        }
      ]
    }
  },
  components: {
    Header
  },
  methods: {
    handleCurrentChange (val) {
      this.users = this.data.find(n => n.index === val - 1).data
    }
  },
  created () {
    this.users = this.data.find(n => n.index === 0).data
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
    .user-table
      width 100%
</style>
