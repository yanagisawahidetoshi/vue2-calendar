<template>
  <div id="app">
    <ul>
      <li><button type="button" @click="changeMonth(-1)">先月</button></li>
      <li><button type="button" @click="changeCurrentMonth">当月</button></li>
      <li><button type="button" @click="changeMonth(1)">翌月</button></li>
    </ul>
    <ol>
      <li v-for="(date, index) in dates" :key="index">
        <p>{{ formatDate(date) }}</p>
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
} from "./libs/date-fns";
export default {
  name: "App",
  components: {},
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
  methods: {
    formatDate(date) {
      return format(date, "MM月dd日");
    },
    changeMonth(num) {
      this.currentDate = addMonths(this.currentDate, num);
    },
    changeCurrentMonth() {
      this.currentDate = new Date();
    },
  },
};
</script>
