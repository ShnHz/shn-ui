<template>
  <table class="shn-table-simple">
    <thead :style="{'textAlign':align}">
      <tr>
        <th v-for="item in thead"
            :key="item">
          {{item}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item_tr,index) in data"
          :key="index">
        <td v-for="(item_td,key) in item_tr"
            :key="key">
          <span v-if="item_td != '' && item_td != null"
                :class="{'parameter':key === 'parameter' && type === 'demo','dataTypes':key === 'dataTypes'  && type === 'demo' ,'description':key === 'description'  && type === 'demo'}">
            {{item_td}}
          </span>
          <span v-else>
            —
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'shn-table-simple',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    thead: {
      type: Array,
      default: function() {
        if (this.type == 'default') {
          return ['日期', '姓名', '地址']
        } else if (this.type == 'demo') {
          return ['参数', '说明', '类型', '可选值', '默认值']
        }
      }
    },
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.shn-table-simple {
  width: 100%;
  border-collapse: collapse;
  thead {
    tr {
      border-bottom: 1px solid #dcdfe6;
      th {
        padding: 15px;
        max-width: 250px;
        font-size: 14px;
        font-weight: 400;
        color: #909399;
        white-space: nowrap;
        &:first-child {
          padding-left: 10px;
        }
      }
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid #dcdfe6;
      td {
        padding: 15px;
        // max-width: 250px;
        font-size: 14px;
        font-weight: 400;
        color: #606266;
        white-space: normal;
        &:first-child {
          padding-left: 10px;
        }
        .parameter {
          color: #003a8c;
        }
        .dataTypes {
          color: #bd6f9c;
        }
        .description{
          display: inline-block;
          max-width: 300px;
        }
      }
    }
  }
}
</style>
