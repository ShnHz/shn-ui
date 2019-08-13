<template>
  <div class="month-panel">
    <!-- START -->
    <div class="month-panel-box">
      <div class="month-panel-box_select">
        <p>Start</p>
        <i @click="handelRange('start','last')" class="shni shn-doubleleft"></i>
        <span>{{startDateSelect}} 年</span>
        <i
          @click="handelRange('start','next')"
          class="shni shn-doubleright"
          v-if="startDateSelect < endDateSelect"
        ></i>
      </div>
      <div class="month-panel-box_list clearfloat">
        <div
          :class="{'month-panel-box_list-select-item':selectRange('start',item.num),'month-panel-box_list-select-item-in-range':inRange('start',item.num),'month-panel-box_list-select-item-disabled':disabled('start',item.num)}"
          :key="'month-list-'+item.name"
          @click="handelSelect('start',item.num)"
          v-for="(item) in monthList"
        >
          <div>
            <p class="month-panel-box_list_name">{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- END -->
    <div class="month-panel-box">
      <div class="month-panel-box_select">
        <p>End</p>
        <i
          @click="handelRange('end','last')"
          class="shni shn-doubleleft"
          v-if="startDateSelect < endDateSelect"
        ></i>
        <span>{{endDateSelect}} 年</span>
        <i @click="handelRange('end','next')" class="shni shn-doubleright"></i>
      </div>
      <div class="month-panel-box_list clearfloat">
        <div
          :class="{'month-panel-box_list-select-item':selectRange('end',item.num),'month-panel-box_list-select-item-in-range':inRange('end',item.num),'month-panel-box_list-select-item-disabled':disabled('end',item.num)}"
          :key="'month-list-'+item.name"
          @click="handelSelect('end',item.num)"
          v-for="(item) in monthList"
        >
          <div>
            <p class="month-panel-box_list_name">{{item.name}}</p>
          </div>
        </div>
      </div>
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
  watch: {
    value: function(val) {
      this.startDate = val[0]
      this.endDate = val[1]

      this.startDateSelect = this.startYear = this.getyear(this.startDate)
      this.endDateSelect = this.endYear = this.getyear(this.endDate)

      this.start = this.getmonth(this.startDate)
      this.end = this.getmonth(this.endDate)
    }
  },
  data() {
    return {
      startDate: this.value[0],
      endDate: this.value[1],

      start: 1,
      end: 4,

      startYear: 2018,
      endYear: 2019,

      startDateSelect: 2018,
      endDateSelect: 2019,

      monthList: [
        {
          name: '一月',
          num: 1
        },
        {
          name: '二月',
          num: 2
        },
        {
          name: '三月',
          num: 3
        },
        {
          name: '四月',
          num: 4
        },
        {
          name: '五月',
          num: 5
        },
        {
          name: '六月',
          num: 6
        },
        {
          name: '七月',
          num: 7
        },
        {
          name: '八月',
          num: 8
        },
        {
          name: '九月',
          num: 9
        },
        {
          name: '十月',
          num: 10
        },
        {
          name: '十一月',
          num: 11
        },
        {
          name: '十二月',
          num: 12
        }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.start = this.getmonth(this.startDate)
      this.end = this.getmonth(this.endDate)

      this.startDateSelect = this.startYear = this.getyear(this.startDate)
      this.endDateSelect = this.endYear = this.getyear(this.endDate)
    },
    handelRange(dateType, type) {
      if (dateType == 'start') {
        if (type == 'next') {
          this.startDateSelect += 1
        } else {
          this.startDateSelect -= 1
        }
      } else {
        if (type == 'next') {
          this.endDateSelect += 1
        } else {
          this.endDateSelect -= 1
        }
      }
    },
    handelSelect(dateType, item) {
      if (dateType == 'start') {
        if (!this.disabled('start', item)) {
          this.$emit('change', [
            this.startDateSelect + '-' + this.Appendzero(item) + '-01',
            this.endDate
          ])
        }
      } else {
        if (!this.disabled('end', item)) {
          this.$emit('change', [
            this.startDate,
            this.endDateSelect +
              '-' +
              this.Appendzero(item) +
              '-' +
              this.getlastdayofmonth(this.endDateSelect, item)
          ])
        }
      }
    },
    selectRange(dateType, item) {
      if (dateType == 'end') {
        if (item == this.end && this.endDateSelect == this.endYear) {
          return true
        } else {
          return false
        }
      } else {
        if (item == this.start && this.startDateSelect == this.startYear) {
          return true
        } else {
          return false
        }
      }
    },
    inRange(dateType, item) {
      if (dateType == 'start') {
        if (this.startYear > this.startDateSelect) {
          return false
        } else if (this.startYear < this.endYear) {
          if (
            this.startDateSelect <= this.endDateSelect &&
            this.startDateSelect == this.endYear
          ) {
            if (item <= this.end) {
              return true
            } else {
              return false
            }
          } else {
            if (item >= this.start) {
              return true
            } else {
              return false
            }
          }
        } else {
          if (item >= this.start && item <= this.end) {
            return true
          } else {
            return false
          }
        }
      } else {
        if (this.endDateSelect > this.endYear) {
          return false
        } else if (this.startYear < this.endYear) {
          if (
            this.startDateSelect <= this.endDateSelect &&
            this.endDateSelect == this.startYear
          ) {
            if (item >= this.start) {
              return true
            } else {
              return false
            }
          } else {
            if (item <= this.end) {
              return true
            } else {
              return false
            }
          }
        } else {
          if (item >= this.start && item <= this.end) {
            return true
          } else {
            return false
          }
        }
      }
    },
    disabled(dateType, item) {
      if (dateType == 'start') {
        if (
          this.startDateSelect <= this.endDateSelect &&
          this.startDateSelect == this.endYear
        ) {
          if (item > this.end) {
            return true
          } else {
            return false
          }
        }
      } else {
        if (
          this.startDateSelect <= this.endDateSelect &&
          this.endDateSelect == this.startYear
        ) {
          if (item < this.start) {
            return true
          } else {
            return false
          }
        }
      }
    }
  }
}
</script>
<style lang="scss">
.month-panel {
  color: #333;
  display: flex;
  .month-panel-box {
    margin: 0 5px;
    width: 250px;
    .month-panel-box_select {
      position: relative;
      text-align: center;
      font-size: 14px;
      line-height: 24px;
      i {
        cursor: pointer;
        transition: $--transition-all-3-ease;
        font-size: 12px;
        &:hover {
          color: $--color-primary;
        }
      }
      .shn-doubleleft {
        position: absolute;
        left: 40px;
      }
      .shn-doubleright {
        position: absolute;
        right: 40px;
      }
      span {
        position: relative;
        top: -1px;
      }
    }
    .month-panel-box_list {
      margin-top: 9px;
      border: 1px solid #f5f5f5;
      border-radius: 4px;
      height: 216px;
      overflow: hidden;
      > div {
        cursor: pointer;
        display: inline-block;
        width: 25%;
        height: 72px;
        line-height: 72px;
        float: left;
        text-align: center;
        font-size: 12px;
        transition: $--transition-all-2-ease;
        &:hover {
          background: #F5F5F5;
        }
        .month-panel-box_list_name {
          font-size: 12px;
        }
      }
      .month-panel-box_list-select-item {
        color: $--color-white !important;
        background: $--color-primary !important;
      }
      .month-panel-box_list-select-item-disabled {
        color: #bbb;
        cursor: not-allowed;
        &:hover {
          background: #fff;
        }
      }
      .month-panel-box_list-select-item-in-range {
        background: #f2f6fc;
      }
    }
  }
}
</style>
