<template>
  <div class="wrap">
    <el-container class="right-container">
      <Header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/data-manager/store-list'}">店铺列表</el-breadcrumb-item>
        </el-breadcrumb>
      </Header>
      <el-main>
        <el-table  :data="stores"
                   class="stores-table"
                   highlight-current-row
        >
          <el-table-column  type="expand"
                            width="100"
          >
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-row>
                  <el-col :span='12'>
                    <el-form-item label="商品名称" class="label">
                      <span> {{props.row.商品名称}} </span>
                    </el-form-item>
                  </el-col>
                  <el-col :span='12'>
                    <el-form-item label="所属店铺" class="label">
                      <span> {{props.row.所属店铺}} </span>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span='12'>
                    <el-form-item label="联系电话" class="label">
                      <span> {{props.row.联系电话}} </span>
                    </el-form-item>
                  </el-col>
                  <el-col :span='12'>
                    <el-form-item label="店铺ID " class="label">
                      <span> {{props.row.店铺ID}} </span>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span='12'>
                    <el-form-item label="商品分类" class="label">
                      <span> {{props.row.商品分类}} </span>
                    </el-form-item>
                  </el-col>
                  <el-col :span='12'>
                    <el-form-item label="店铺地址" class="label">
                      <span> {{props.row.店铺地址}} </span>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span='12'>
                    <el-form-item label="评分" class="label">
                      <span> {{props.row.评分}} </span>
                    </el-form-item>
                  </el-col>
                  <el-col :span='12'>
                    <el-form-item label="销售量 " class="label">
                      <span> {{props.row.销售量}} </span>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column  prop="店铺名称"
                            label="店铺名称"
                            width="250"
          >
          </el-table-column>
          <el-table-column  prop="店铺地址"
                            label="店铺地址"
                            width="250"
          >
          </el-table-column>
          <el-table-column  prop="店铺介绍"
                            label="店铺介绍"
                            width="250"
          >
          </el-table-column>
          <el-table-column  prop="操作"
                            label="操作"
                            width=""
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
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
      stores: [],
      data: [
        {
          index: 0,
          data: [
            {
              '店铺名称': '善各庄1号店',
              '店铺介绍': '食堂',
              '商品名称': '午餐',
              '所属店铺': '北京善各庄午餐食堂',
              '联系电话': '13113213123',
              '店铺ID': '1',
              '商品分类': '快餐/便当',
              '店铺地址': '北京市朝阳区善各庄地铁站B口',
              '评分': 4.7,
              '销售量': 106
            },
            {
              '店铺名称': '善各庄1号店',
              '店铺介绍': '食堂',
              '商品名称': '午餐',
              '所属店铺': '北京善各庄午餐食堂',
              '联系电话': '13113213123',
              '店铺ID': '1',
              '商品分类': '快餐/便当',
              '店铺地址': '北京市朝阳区善各庄地铁站B口',
              '评分': 4.7,
              '销售量': 106
            },
            {
              '店铺名称': '善各庄1号店',
              '店铺介绍': '食堂',
              '商品名称': '午餐',
              '所属店铺': '北京善各庄午餐食堂',
              '联系电话': '13113213123',
              '店铺ID': '1',
              '商品分类': '快餐/便当',
              '店铺地址': '北京市朝阳区善各庄地铁站B口',
              '评分': 4.7,
              '销售量': 106
            },
            {
              '店铺名称': '善各庄1号店',
              '店铺介绍': '食堂',
              '商品名称': '午餐',
              '所属店铺': '北京善各庄午餐食堂',
              '联系电话': '13113213123',
              '店铺ID': '1',
              '商品分类': '快餐/便当',
              '店铺地址': '北京市朝阳区善各庄地铁站B口',
              '评分': 4.7,
              '销售量': 106
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
      this.stores = this.data.find(n => n.index === val - 1).data
    }
  },
  created () {
    this.stores = this.data.find(n => n.index === 0).data
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
    .stores-table
      width 100%
      .demo-table-expand
        background #fbfdff
        margin-left 60px
        .label
          color #000
</style>
