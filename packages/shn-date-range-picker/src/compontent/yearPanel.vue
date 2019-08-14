<template>
  <div class="year-panel">
    <div class="year-panel-box">
      <div class="year-panel-box_select">
        <p>Start</p>
        <i @click="handelRange('start','last')" class="shni shn-doubleleft"></i>
        <span>{{startDateSelect[0]}} 年 - {{startDateSelect[1]}} 年</span>
        <i
          @click="handelRange('start','next')"
          class="shni shn-doubleright"
          v-if="startDateSelect[0] < endDateSelect[0]"
        ></i>
      </div>
      <div class="year-panel-box_list clearfloat">
        <div
          :class="{'year-panel-box_list-select-item':item === start,
          'year-panel-box_list-select-item-in-range':inRange(item)}"
          :key="'start-date-list-'+item"
          @click="handelSelect('start',item)"
          v-for="(item) in startDateList"
        >{{item}}</div>
      </div>
    </div>
    <div class="year-panel-box">
      <div class="year-panel-box_select">
        <p>End</p>
        <i
          @click="handelRange('end','last')"
          class="shni shn-doubleleft"
          v-if="startDateSelect[0] < endDateSelect[0]"
        ></i>
        <span>{{endDateSelect[0]}} 年 - {{endDateSelect[1]}} 年</span>
        <i @click="handelRange('end','next')" class="shni shn-doubleright"></i>
      </div>
      <div class="year-panel-box_list clearfloat">
        <div
          :class="{'year-panel-box_list-select-item':item === end,
          'year-panel-box_list-select-item-disabled':disabled(item),
          'year-panel-box_list-select-item-in-range':inRange(item)
          }"
          :key="'end-date-list-'+item"
          @click="handelSelect('end',item)"
          v-for="(item) in endDateList"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { shnUiDate } from '../../../../public/js/shn-vue-ui-date'

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

      this.start = shnUiDate.getYear(val[0])
      this.end = shnUiDate.getYear(val[1])

      this.startDateSelect = [
        Math.floor(this.start / 10) * 10,
        Math.floor(this.start / 10) * 10 + 9
      ]
      this.endDateSelect = [
        Math.floor(this.end / 10) * 10,
        Math.floor(this.end / 10) * 10 + 9
      ]
    },
    startDateSelect: function(val) {
      this.startDateList.length = 0
      for (let i = val[0]; i <= val[1]; i++) {
        this.startDateList.push(i)
      }
    },
    endDateSelect: function(val) {
      this.endDateList.length = 0
      for (let i = val[0]; i <= val[1]; i++) {
        this.endDateList.push(i)
      }
    }
  },
  data() {
    return {
      startDate: this.value[0],
      endDate: this.value[1],

      start: 2010,
      end: 2019,

      startDateSelect: [2010, 2019],
      endDateSelect: [2010, 2019],

      startDateList: [
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019
      ],
      endDateList: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.start = shnUiDate.getYear(this.startDate)
      this.end = shnUiDate.getYear(this.endDate)

      this.startDateSelect = [
        Math.floor(this.start / 10) * 10,
        Math.floor(this.start / 10) * 10 + 9
      ]
      this.endDateSelect = [
        Math.floor(this.end / 10) * 10,
        Math.floor(this.end / 10) * 10 + 9
      ]
    },
    handelRange(dateType, type) {
      if (dateType == 'start') {
        if (type == 'next') {
          this.startDateSelect.splice(0, 1, (this.startDateSelect[0] += 10))
          this.startDateSelect.splice(1, 1, (this.startDateSelect[1] += 10))
        } else {
          this.startDateSelect.splice(0, 1, (this.startDateSelect[0] -= 10))
          this.startDateSelect.splice(1, 1, (this.startDateSelect[1] -= 10))
        }
      } else {
        if (type == 'next') {
          this.endDateSelect.splice(0, 1, (this.endDateSelect[0] += 10))
          this.endDateSelect.splice(1, 1, (this.endDateSelect[1] += 10))
        } else {
          this.endDateSelect.splice(0, 1, (this.endDateSelect[0] -= 10))
          this.endDateSelect.splice(1, 1, (this.endDateSelect[1] -= 10))
        }
      }
    },
    handelSelect(dateType, item) {
      if (dateType == 'start') {
        if (this.end < item) {
          this.end = this.start = item
        } else {
          this.start = item
        }
        this.$emit('change', [item + '-01-01', this.endDate])
      } else {
        if (!this.disabled(item)) {
          this.end = item
        }
        this.$emit('change', [this.startDate, item + '-12-31'])
      }
    },
    disabled(item) {
      if (item < this.start) {
        return true
      } else {
        return false
      }
    },
    inRange(item) {
      if (item >= this.start && item <= this.end) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="scss">
.year-panel {
  color: #333;
  display: flex;
  .year-panel-box {
    margin: 0 5px;
    width: 250px;
    .year-panel-box_select {
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
    .year-panel-box_list {
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
      }
      .year-panel-box_list-select-item {
        color: $--color-white !important;
        background: $--color-primary !important;
      }
      .year-panel-box_list-select-item-disabled {
        color: #bbb;
        cursor: not-allowed;
        &:hover {
          background: #fff;
        }
      }
      .year-panel-box_list-select-item-in-range {
        background: #f2f6fc;
      }
    }
  }
}
</style>
