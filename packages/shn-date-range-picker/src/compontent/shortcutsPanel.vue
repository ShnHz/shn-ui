<template>
  <div class="date-picker-shortcuts-panel">
    <!-- 模块选择器 -->
    <ul class="periods">
      <li
        :class="{'active':periodsActive == item.value}"
        :key="'period' + index + item.value"
        @click="handlePeriod(item)"
        class="period"
        v-for="(item,index) in periods"
      >{{item.label}}</li>
    </ul>

    <!-- 范围选择器 -->
    <ul class="ranges">
      <li
        :class="{'active':rangesActive == item.value}"
        :key="'range' + index + item.value"
        @click="handleRanges(item)"
        class="range"
        v-for="(item,index) in ranges"
      >{{item.label}}</li>
    </ul>

    <!-- 输入框 -->
    <div>
      <shn-input
        :height="28"
        pattern="frame"
        style="width:102px;margin-right:11px"
        v-model="startDate"
      />
      <shn-input :height="28" pattern="frame" style="width:102px" v-model="endDate" />
    </div>

    <!-- 按钮 -->
    <shn-divider style="margin:12px 0" />
    <div style="margin-top:5px;text-align:right">
      <shn-button style="height:28px">取消</shn-button>
      <shn-button style="height:28px;margin-right:0" type="primary">确认</shn-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Array, String],
      default: ''
    }
  },
  data() {
    return {
      periodsActive: 'day',
      periods: [
        {
          value: 'day',
          label: '天'
        },
        {
          value: 'week',
          label: '周'
        },
        {
          value: 'month',
          label: '月'
        },
        {
          value: 'quarter',
          label: '季'
        },
        {
          value: 'year',
          label: '年'
        }
      ],

      rangesActive: 'last30',
      ranges: [
        {
          value: 'lastweek',
          label: '最近一周'
        },
        {
          value: 'last30',
          label: '最近一个月'
        },
        {
          value: 'last90',
          label: '最近三个月'
        },
        {
          value: 'last180',
          label: '最近半年'
        },
        {
          value: 'lastyear',
          label: '最近一年'
        }
      ],

      startDate: this.value[0],
      endDate: this.value[1]
    }
  },
  methods: {
    handlePeriod(item) {
      this.periodsActive = item.value
    },
    handleRanges(item) {
      this.rangesActive = item.value
    }
  }
}
</script>
<style lang="scss">
.date-picker-shortcuts-panel {
  .periods {
    margin: 0 auto 8px;
    display: inline-flex;
    list-style: none;
    outline: none;
    .period {
      padding: 0 15px;
      margin: 0;
      background: #f5f5f5;
      color: #409eff;
      cursor: pointer;
      font-size: 13px;
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:first-child {
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;
      }
      &.active {
        background: #409eff;
        color: #fff;
      }
    }
  }

  .ranges {
    margin: 0 auto 8px;
    list-style: none;
    outline: none;
    .range {
      padding: 0 15px;
      margin-bottom: 8px;
      background: #f5f5f5;
      color: #409eff;
      cursor: pointer;
      font-size: 13px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-radius: 4px;
      &.active {
        background: #409eff;
        color: #fff;
      }
    }
  }
}
</style>
