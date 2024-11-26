<template>
  <div id="app">
    <CalenderHeader
      @changeToPrevMonth="changeMonth(-1)"
      @changeToNextMonth="changeMonth(1)"
      @changeCurrentMonth="changeCurrentMonth"
      :currentDate="currentDate"
    />
    <ol>
      <li v-for="(date, index) in dates" :key="index">
        <DateRow :date="date" />
      </li>
    </ol>
  </div>
</template>

<script>
import {
  getStartOfMonth,
  getLastDayOfMonth,
  getEachDayOfInterval,
  format,
  addMonths,
  parse,
} from "./libs/date-fns";

import CalenderHeader from "./components/CalenderHeader";
import DateRow from "./components/DateRow";

export default {
  name: "App",
  components: {
    CalenderHeader,
    DateRow,
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
  computed: {
    dates() {
      const start = getStartOfMonth(this.currentDate);
      const end = getLastDayOfMonth(this.currentDate);
      return getEachDayOfInterval({ start, end });
    },
  },
  mounted() {
    // ~/{西暦４桁}/{月1or2桁} を判断する正規表現。どんなURLにも対応できるように
    // const pathName = location.pathname;
    // const match = pathName.match(/\d{4}\/(\d{2})\/?/);
    // const match = pathName.match(/^https?:\/\/.+\/(\d{4})\/(0?[1-9]|1[0-2])\/?$/);
    // this.currentDate = parse("2024/11/", "yyyy/MM/");
    // console.log(parse("2024/11/1", "yyyy/MM/DD"));
  },
  methods: {
    formatDate(date) {
      return format(date, "MM月dd日");
    },
    changeMonth(num) {
      this.currentDate = addMonths(this.currentDate, num);
      history.pushState({}, "", "/2024/11");
    },
    changeCurrentMonth() {
      this.currentDate = new Date();
    },
  },
};
</script>
