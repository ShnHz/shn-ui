<template>
  <div class="quarter-panel">
    <!-- START -->
    <div class="quarter-panel-box">
      <div class="quarter-panel-box_select">
        <p>Start</p>
        <i @click="handelRange('start','last')" class="shni shn-doubleleft"></i>
        <span>{{startDateSelect}} 年</span>
        <i
          @click="handelRange('start','next')"
          class="shni shn-doubleright"
          v-if="startDateSelect < endDateSelect"
        ></i>
      </div>
      <div class="quarter-panel-box_list clearfloat">
        <div
          :class="{'quarter-panel-box_list-select-item':selectRange('start',item.listNum),
          'quarter-panel-box_list-select-item-disabled':disabled('start',item.listNum[0]),
          'quarter-panel-box_list-select-item-in-range':inRange('start',item.listNum[0])}"
          :key="'quarter-list-'+item.name"
          @click="handelSelect('start',item.listNum[0])"
          v-for="(item) in quarterList"
        >
          <div>
            <p class="quarter-panel-box_list_name">{{item.name}}</p>
            <p class="quarter-panel-box_list_name_list">
              <span
                :key="'quarter-list-list-start-' + item_2"
                v-for="(item_2,index_2) in item.list"
              >
                {{item_2}}
                <span v-if="index_2 < item.list.length - 1">,</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- END -->
    <div class="quarter-panel-box">
      <div class="quarter-panel-box_select">
        <p>End</p>
        <i
          @click="handelRange('end','last')"
          class="shni shn-doubleleft"
          v-if="startDateSelect < endDateSelect"
        ></i>
        <span>{{endDateSelect}} 年</span>
        <i @click="handelRange('end','next')" class="shni shn-doubleright"></i>
      </div>
      <div class="quarter-panel-box_list clearfloat">
        <div
          :class="{'quarter-panel-box_list-select-item':selectRange('end',item.listNum),
          'quarter-panel-box_list-select-item-disabled':disabled('end',item.listNum[2]),
          'quarter-panel-box_list-select-item-in-range':inRange('end',item.listNum[2])}"
          :key="'end-date-list-'+item.name"
          @click="handelSelect('end',item.listNum[2])"
          v-for="(item) in quarterList"
        >
          <div>
            <p class="quarter-panel-box_list_name">{{item.name}}</p>
            <p class="quarter-panel-box_list_name_list">
              <span :key="'quarter-list-list-end-' + item_2" v-for="(item_2,index_2) in item.list">
                {{item_2}}
                <span v-if="index_2 < item.list.length - 1">,</span>
              </span>
            </p>
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

      quarterList: [
        {
          name: '春',
          list: ['1月', '2月', '3月'],
          listNum: [1, 2, 3]
        },
        {
          name: '夏',
          list: ['4月', '5月', '6月'],
          listNum: [4, 5, 6]
        },
        {
          name: '秋',
          list: ['7月', '8月', '9月'],
          listNum: [7, 8, 9]
        },
        {
          name: '冬',
          list: ['10月', '11月', '12月'],
          listNum: [10, 11, 12]
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
    selectRange(dateType, list) {
      if (dateType == 'end') {
        if (
          list.indexOf(dateType == 'start' ? this.start : this.end) > -1 &&
          this.endDateSelect == this.endYear
        ) {
          return true
        } else {
          return false
        }
      } else {
        if (
          list.indexOf(dateType == 'start' ? this.start : this.end) > -1 &&
          this.startDateSelect == this.startYear
        ) {
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
.quarter-panel {
  color: #333;
  display: flex;
  .quarter-panel-box {
    margin: 0 5px;
    width: 250px;
    .quarter-panel-box_select {
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
    .quarter-panel-box_list {
      margin-top: 9px;
      border: 1px solid #f5f5f5;
      border-radius: 4px;
      height: 216px;
      overflow: hidden;
      > div {
        cursor: pointer;
        display: inline-block;
        width: 50%;
        height: 108px;
        float: left;
        text-align: center;
        font-size: 12px;
        transition: $--transition-all-2-ease;
        &:hover {
          background: #F5F5F5;
        }
        .quarter-panel-box_list_name {
          margin-top: 25px;
          font-size: 2em;
        }
        .quarter-panel-box_list_name_list {
          font-size: 0.5em;
          opacity: 0.75;
        }
      }
      .quarter-panel-box_list-select-item {
        color: $--color-white !important;
        background: $--color-primary !important;
      }
      .quarter-panel-box_list-select-item-disabled {
        color: #bbb;
        cursor: not-allowed;
        &:hover {
          background: #fff;
        }
      }
      .quarter-panel-box_list-select-item-in-range {
        background: #f2f6fc;
      }
    }
  }
}
</style>
