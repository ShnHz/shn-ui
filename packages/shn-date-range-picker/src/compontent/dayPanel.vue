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
          v-if="type == 'day' ? startSelectMonth < endSelectMonth || startSelectYear < endSelectYear : true"
        ></i>
        <i
          @click="handelRangeYear('start','next')"
          class="shni shn-doubleright"
          v-if="type == 'day' ? startSelectYear < endSelectYear : true"
        ></i>
      </div>
      <div class="day-panel-box_list clearfloat">
        <table cellpadding="0" cellspacing="0">
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
            <tr :class="{'week-hover':type == 'week'}">
              <td
                :class="{'prev-month':item.type != 1,'select':item.type == 3,'in-range':item.type == 4,'in-disabled':item.type == 5}"
                :id="item.date"
                :key="'day-panel-box_list-start-firsttr-td'+item.value"
                @click="handelSelect('start',item)"
                v-for="(item) in getFirstTr('start')"
              >{{item.value}}</td>
            </tr>
            <tr
              :class="{'week-hover':type == 'week'}"
              :key="'day-panel-box_list-start-tr-'+item"
              v-for="item in 4"
            >
              <td
                :class="{'prev-month':item_2.type != 1,'select':item_2.type == 3,'in-range':item_2.type == 4,'in-disabled':item_2.type == 5}"
                :id="item_2.date"
                :key="'day-panel-box_list-start-tr-td-'+item_2.value"
                @click="handelSelect('start',item_2)"
                v-for="item_2 in getTr('start',item)"
              >{{item_2.value}}</td>
            </tr>
            <tr :class="{'week-hover':type == 'week'}">
              <td
                :class="{'prev-month':item.type != 1,'select':item.type == 3,'in-range':item.type == 4,'in-disabled':item.type == 5}"
                :id="item.date"
                :key="'day-panel-box_list-lasttr-td'+item.value"
                @click="handelSelect('start',item)"
                v-for="(item) in getLastTr('start')"
              >{{item.value}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- END -->
    <div class="day-panel-box" v-if="type == 'day'">
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
          v-if="startSelectMonth < endSelectMonth || startSelectYear < endSelectYear"
        ></i>
        <span>{{endSelectYear}} 年 {{endSelectMonth}} 月</span>
        <i @click="handelRangeMonth('end','next')" class="shni shn-right"></i>
        <i @click="handelRangeYear('end','next')" class="shni shn-doubleright"></i>
      </div>
      <div class="day-panel-box_list clearfloat">
        <table cellpadding="0" cellspacing="0">
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
            <tr>
              <td
                :class="{'prev-month':item.type != 1,'select':item.type == 3,'in-range':item.type == 4,'in-disabled':item.type == 5}"
                :id="item.date"
                :key="'day-panel-box_list-end-firsttr-td'+item.value"
                @click="handelSelect('end',item)"
                v-for="(item) in getFirstTr('end')"
              >{{item.value}}</td>
            </tr>
            <tr :key="'day-panel-box_list-end-tr-'+item" v-for="item in 4">
              <td
                :class="{'prev-month':item_2.type != 1,'select':item_2.type == 3,'in-range':item_2.type == 4,'in-disabled':item_2.type == 5}"
                :id="item_2.date"
                :key="'day-panel-box_list-end-tr-td-'+item_2.value"
                @click="handelSelect('end',item_2)"
                v-for="item_2 in getTr('end',item)"
              >{{item_2.value}}</td>
            </tr>
            <tr>
              <td
                :class="{'prev-month':item.type != 1,'select':item.type == 3,'in-range':item.type == 4,'in-disabled':item.type == 5}"
                :id="item.date"
                :key="'day-panel-box_list-lasttr-td'+item.value"
                @click="handelSelect('end',item)"
                v-for="(item) in getLastTr('end')"
              >{{item.value}}</td>
            </tr>
          </tbody>
        </table>
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
    },
    type: {
      type: String,
      default: 'day'
    }
  },
  watch: {
    value: function(val) {
      this.startDate = val[0]
      this.endDate = val[1]

      this.startSelectYear = this.startYear = shnUiDate.getYear(this.startDate)
      this.endSelectYear = this.endYear = shnUiDate.getYear(this.endDate)
      this.startSelectMonth = this.startMonth = shnUiDate.getMonth(this.startDate)
      this.endSelectMonth = this.endMonth = shnUiDate.getMonth(this.endDate)

      this.start = shnUiDate.getDay(this.startDate)
      this.end = shnUiDate.getDay(this.endDate)
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
  computed: {
    getFirstTr() {
      return function(type) {
        let oneDayWeek = shnUiDate.getWeek(
          (type == 'start' ? this.startSelectYear : this.endSelectYear) +
            '-' +
            (type == 'start' ? this.startSelectMonth : this.endSelectMonth) +
            '-' +
            '1'
        )
        let lastDayOfMonth = shnUiDate.getLastDayOfMonth(
          type == 'start' ? this.startSelectYear : this.endSelectYear,
          (type == 'start' ? this.startSelectMonth : this.endSelectMonth) - 1
        )

        let td = []
        for (let i = oneDayWeek; i > 0; i--) {
          td.push({
            value: lastDayOfMonth - i + 1,
            type: 0,
            month:
              type == 'start'
                ? this.startSelectMonth - 1 == 0
                  ? 12
                  : this.startSelectMonth - 1
                : this.endSelectMonth - 1 == 0
                ? 12
                : this.endSelectMonth - 1,
            year:
              type == 'start'
                ? this.startSelectMonth - 1 == 0
                  ? this.startSelectYear - 1
                  : this.startSelectYear
                : this.endSelectMonth - 1 == 0
                ? this.endSelectYear - 1
                : this.endSelectYear
          })
        }
        for (let i = 0; i < 7 - oneDayWeek; i++) {
          td.push({
            value: i + 1,
            type: 1,
            month:
              type == 'start' ? this.startSelectMonth : this.endSelectMonth,
            year: type == 'start' ? this.startSelectYear : this.endSelectYear
          })
        }

        td = this.inRange(td, type)
        td = this.inDisabled(td, type)
        td = this.inSelect(td, type)

        return td
      }
    },
    getTr() {
      return function(type, index) {
        let td = []
        let oneDayWeek = shnUiDate.getWeek(
          (type == 'start' ? this.startSelectYear : this.endSelectYear) +
            '-' +
            (type == 'start' ? this.startSelectMonth : this.endSelectMonth) +
            '-' +
            '1'
        )
        let lastDayOfMonth = shnUiDate.getLastDayOfMonth(
          type == 'start' ? this.startSelectYear : this.endSelectYear,
          type == 'start' ? this.startSelectMonth : this.endSelectMonth
        )

        let firstTd = 8 - oneDayWeek + 7 * (index - 1)
        for (let i = 0; i < 7; i++) {
          if (firstTd + i > lastDayOfMonth) {
            td.push({
              value: firstTd + i - lastDayOfMonth,
              type: 2,
              month:
                type == 'start'
                  ? this.startSelectMonth + 1 == 13
                    ? 1
                    : this.startSelectMonth + 1
                  : this.endSelectMonth + 1 == 13
                  ? 1
                  : this.endSelectMonth + 1,
              year:
                type == 'start'
                  ? this.startSelectMonth + 1 == 13
                    ? this.startSelectYear + 1
                    : this.startSelectYear
                  : this.endSelectMonth + 1 == 13
                  ? this.endSelectYear + 1
                  : this.endSelectYear
            })
          } else {
            td.push({
              value: firstTd + i,
              type: 1,
              month:
                type == 'start' ? this.startSelectMonth : this.endSelectMonth,
              year: type == 'start' ? this.startSelectYear : this.endSelectYear
            })
          }
        }

        td = this.inRange(td, type)
        td = this.inDisabled(td, type)
        td = this.inSelect(td, type)

        return td
      }
    },
    getLastTr() {
      return function(type) {
        let td = []
        let oneDayWeek = shnUiDate.getWeek(
          (type == 'start' ? this.startSelectYear : this.endSelectYear) +
            '-' +
            (type == 'start' ? this.startSelectMonth : this.endSelectMonth) +
            '-' +
            '1'
        )
        let lastDayOfMonth = shnUiDate.getLastDayOfMonth(
          type == 'start' ? this.startSelectYear : this.endSelectYear,
          type == 'start' ? this.startSelectMonth : this.endSelectMonth
        )

        let firstTd = 8 - oneDayWeek + 7 * 4
        if (firstTd <= lastDayOfMonth) {
          for (let i = 0; i < 7; i++) {
            if (firstTd + i > lastDayOfMonth) {
              td.push({
                value: firstTd + i - lastDayOfMonth,
                type: 2,
                month:
                  type == 'start'
                    ? this.startSelectMonth + 1 == 13
                      ? 1
                      : this.startSelectMonth + 1
                    : this.endSelectMonth + 1 == 13
                    ? 1
                    : this.endSelectMonth + 1,
                year:
                  type == 'start'
                    ? this.startSelectMonth + 1 == 13
                      ? this.startSelectYear + 1
                      : this.startSelectYear
                    : this.endSelectMonth + 1 == 13
                    ? this.endSelectYear + 1
                    : this.endSelectYear
              })
            } else {
              td.push({
                value: firstTd + i,
                type: 1,
                month:
                  type == 'start' ? this.startSelectMonth : this.endSelectMonth,
                year:
                  type == 'start' ? this.startSelectYear : this.endSelectYear
              })
            }
          }
        } else {
          oneDayWeek = shnUiDate.getWeek(
            (type == 'start' ? this.startSelectYear : this.endSelectYear) +
              '-' +
              (type == 'start'
                ? this.startSelectMonth + 1
                : this.endSelectMonth + 1) +
              '-' +
              '1'
          )
          firstTd = oneDayWeek == 0 ? 1 : 8 - oneDayWeek
          for (let i = 0; i < 7; i++) {
            if (isNaN(firstTd)) {
              td.push({
                value: i,
                type: 2,
                month:
                  type == 'start'
                    ? this.startSelectMonth + 1 == 13
                      ? 1
                      : this.startSelectMonth + 1
                    : this.endSelectMonth + 1 == 13
                    ? 1
                    : this.endSelectMonth + 1,
                year:
                  type == 'start'
                    ? this.startSelectMonth + 1 == 13
                      ? this.startSelectYear + 1
                      : this.startSelectYear
                    : this.endSelectMonth + 1 == 13
                    ? this.endSelectYear + 1
                    : this.endSelectYear
              })
            } else {
              td.push({
                value: firstTd + i,
                type: 2,
                month:
                  type == 'start'
                    ? this.startSelectMonth + 1 == 13
                      ? 1
                      : this.startSelectMonth + 1
                    : this.endSelectMonth + 1 == 13
                    ? 1
                    : this.endSelectMonth + 1,
                year:
                  type == 'start'
                    ? this.startSelectMonth + 1 == 13
                      ? this.startSelectYear + 1
                      : this.startSelectYear
                    : this.endSelectMonth + 1 == 13
                    ? this.endSelectYear + 1
                    : this.endSelectYear
              })
            }
          }
        }

        td = this.inRange(td, type)
        td = this.inDisabled(td, type)
        td = this.inSelect(td, type)

        return td
      }
    }
  },
  methods: {
    init() {
      this.startSelectYear = this.startYear = shnUiDate.getYear(this.startDate)
      this.endSelectYear = this.endYear = shnUiDate.getYear(this.endDate)
      this.startSelectMonth = this.startMonth = shnUiDate.getMonth(this.startDate)
      this.endSelectMonth = this.endMonth = shnUiDate.getMonth(this.endDate)

      this.start = shnUiDate.getDay(this.startDate)
      this.end = shnUiDate.getDay(this.endDate)
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
      let v = new Date(item.date).getTime()
      let s = new Date(this.startDate).getTime()
      let e = new Date(this.endDate).getTime()

      if (this.type == 'day') {
        if (dateType == 'start') {
          if (!(v > e)) {
            this.$emit('change', [item.date, this.endDate])
          }
        } else {
          if (!(v < s)) {
            this.$emit('change', [this.startDate, item.date])
          }
        }
      } else if (this.type == 'week') {
        this.$emit('change', shnUiDate.getSomeWeek(item.date))
      }
    },
    inSelect(td, type) {
      if (this.type == 'day') {
        for (let i = 0; i < td.length; i++) {
          if (type == 'start' && this.startDate == td[i].date) {
            td[i].type = 3
          } else if (type == 'end' && this.endDate == td[i].date) {
            td[i].type = 3
          }
        }
      } else if (this.type == 'week') {
        for (let i = 0; i < td.length; i++) {
          if (this.startDate == td[i].date || this.endDate == td[i].date) {
            td[i].type = 3
          }
        }
      }

      return td
    },
    inRange(td) {
      let s = new Date(this.startDate).getTime()
      let e = new Date(this.endDate).getTime()
      for (let i = 0; i < td.length; i++) {
        td[i].date = `${td[i].year}-${shnUiDate.appendZero(
          td[i].month
        )}-${shnUiDate.appendZero(td[i].value)}`

        let v = new Date(td[i].date).getTime()

        if ((v > s && v < e) || v == s || v == e) td[i].type = 4
      }

      return td
    },
    inDisabled(td, type) {
      if (this.type == 'day') {
        let s = new Date(this.startDate).getTime()
        let e = new Date(this.endDate).getTime()
        for (let i = 0; i < td.length; i++) {
          let v = new Date(td[i].date).getTime()

          if (type == 'start') {
            if (v > e) {
              td[i].type = 5
            }
          } else {
            if (v < s) td[i].type = 5
          }
        }
      }
      return td
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
      height: 260px;
      overflow: hidden;
      table {
        padding: 0px 16px;
        width: 100%;
        tbody {
          width: 100%;
          th {
            padding: 2px;
            color: #606266;
            font-weight: 400;
            font-size: 12px;
            border-bottom: 1px solid #ebeef5;
          }
          tr.week-hover {
            &:hover {
              background: #f5f5f5;
              .in-range {
                background: #f5f5f5;
              }
            }
            td {
              &:hover {
                background: #f5f5f5;
              }
            }
          }
          td {
            width: 32px;
            height: 30px;
            padding: 4px 0;
            box-sizing: border-box;
            text-align: center;
            cursor: pointer;
            position: relative;
            font-size: 12px;
            &:hover {
              background: #f5f5f5;
            }
            &.prev-month {
              color: #c0c4cc;
              &:hover {
                background: #fff;
              }
            }
            &.select {
              color: $--color-white !important;
              background: $--color-primary !important;
            }
            &.in-range {
              background: #f2f6fc;
              &:hover {
                background: #f5f5f5;
              }
            }
            &.in-disabled {
              cursor: not-allowed;
            }
          }
        }
      }
    }
  }
}
</style>
