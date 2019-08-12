<template>
  <div class="day-panel">
    <!-- START -->
    <div class="day-panel-box">
      <div class="day-panel-box_select">
        <p>Start</p>
        <i @click="handelRangeYear('start','last')" class="shni shn-doubleleft"></i>
        <i @click="handelRangeMonth('start','last')" class="shni shn-left"></i>
        <span>{{startSelectYear}} 年 {{startSelectMonth}} 月</span>
        <i
          @click="handelRangeMonth('start','next')"
          class="shni shn-right"
          v-if="startSelectMonth < endSelectMonth"
        ></i>
        <i
          @click="handelRangeYear('start','next')"
          class="shni shn-doubleright"
          v-if="startSelectYear < endSelectYear"
        ></i>
      </div>
      <div class="day-panel-box_list clearfloat">
        <table>
          <tbody>
            <tr>
              <th>日</th>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- END -->
    <div class="day-panel-box">
      <div class="day-panel-box_select">
        <p>End</p>
        <i
          @click="handelRangeYear('end','last')"
          class="shni shn-doubleleft"
          v-if="startSelectYear < endSelectYear"
        ></i>
        <i
          @click="handelRangeMonth('end','last')"
          class="shni shn-left"
          v-if="startSelectMonth < endSelectMonth"
        ></i>
        <span>{{startSelectYear}} 年 {{endSelectMonth}} 月</span>
        <i @click="handelRangeMonth('end','next')" class="shni shn-right"></i>
        <i @click="handelRangeYear('end','next')" class="shni shn-doubleright"></i>
      </div>
      <div class="day-panel-box_list clearfloat"></div>
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

      this.startSelectYear = this.startYear = this.getyear(this.startDate)
      this.endSelectYear = this.endYear = this.getyear(this.endDate)
      this.startSelectMonth = this.startMonth = this.getmonth(this.startDate)
      this.endSelectMonth = this.endMonth = this.getmonth(this.endDate)

      this.start = this.getday(this.startDate)
      this.end = this.getday(this.endDate)
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
      startMonth: 1,
      endMonth: 12,

      startSelectYear: 2018,
      endSelectYear: 2019,
      startSelectMonth: 1,
      endSelectMonth: 12
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.startSelectYear = this.startYear = this.getyear(this.startDate)
      this.endSelectYear = this.endYear = this.getyear(this.endDate)
      this.startSelectMonth = this.startMonth = this.getmonth(this.startDate)
      this.endSelectMonth = this.endMonth = this.getmonth(this.endDate)

      this.start = this.getday(this.startDate)
      this.end = this.getday(this.endDate)
    },
    handelRangeYear(dateType, type) {
      if (dateType == 'start') {
        if (type == 'next') {
          this.startSelectYear += 1
        } else {
          this.startSelectYear -= 1
        }
      } else {
        if (type == 'next') {
          this.endSelectYear += 1
        } else {
          this.endSelectYear -= 1
        }
      }
    },
    handelRangeMonth(dateType, type) {
      if (dateType == 'start') {
        if (type == 'next') {
          if (this.startSelectMonth == 12) {
            this.startSelectMonth = 1
            this.startSelectYear += 1
          } else {
            this.startSelectMonth += 1
          }
        } else {
          if (this.startSelectMonth == 1) {
            this.startSelectMonth = 12
            this.startSelectYear -= 1
          } else {
            this.startSelectMonth -= 1
          }
        }
      } else {
        if (type == 'next') {
          if (this.endSelectMonth == 12) {
            this.endSelectMonth = 1
            this.endSelectYear += 1
          } else {
            this.endSelectMonth += 1
          }
        } else {
          if (this.endSelectMonth == 1) {
            this.endSelectMonth = 12
            this.endSelectYear -= 1
          } else {
            this.endSelectMonth -= 1
          }
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
              this.getlastdayofday(this.endDateSelect, item)
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
.day-panel {
  color: #333;
  display: flex;
  .day-panel-box {
    margin: 0 5px;
    width: 330px;
    .day-panel-box_select {
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
        left: 15px;
      }
      .shn-doubleright {
        position: absolute;
        right: 15px;
      }
      .shn-left {
        position: absolute;
        left: 30px;
      }
      .shn-right {
        position: absolute;
        right: 30px;
      }
      span {
        position: relative;
        top: -1px;
      }
    }
    .day-panel-box_list {
      margin-top: 9px;
      border: 1px solid #f5f5f5;
      border-radius: 4px;
      height: 216px;
      overflow: hidden;
      table {
        padding: 8px 16px;
        width: 100%;
        tbody {
          width: 100%;
          th {
            padding: 5px;
            color: #606266;
            font-weight: 400;
            font-size: 12px;
            border-bottom: 1px solid #ebeef5;
          }
        }
      }
      .day-panel-box_list-select-item {
        color: $--color-white !important;
        background: $--color-primary !important;
      }
      .day-panel-box_list-select-item-disabled {
        color: #bbb;
        cursor: not-allowed;
        &:hover {
          background: #fff;
        }
      }
      .day-panel-box_list-select-item-in-range {
        background: #f2f6fc;
      }
    }
  }
}
</style>
