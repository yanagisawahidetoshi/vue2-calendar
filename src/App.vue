<template>
  <div>
    <CalenderHeader
      :year="currentDate.getFullYear()"
      :month="formattedMonth"
      @onClickPrevMonth="handleChangeMonth(-1)"
      @onClickNextMonth="handleChangeMonth(1)"
      @registerSchedule="handleRegisterSchedule"
    />
    <ol class="calendar">
      <li v-for="v in dates" :key="v.getTime()">
        <CalenderItem
          :date="v.getDate()"
          :day="formatDate(v)"
          :schedules="getSchedulesForDate(v)"
        />
      </li>
    </ol>
  </div>
</template>
<script>
import {
  endOfMonth,
  startOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  parse,
} from "date-fns";
import { ja } from "date-fns/locale";
import CalenderHeader from "./components/CalenderHeader";
import CalenderItem from "./components/CalenderItem";
export default {
  name: "App",
  components: {
    CalenderHeader,
    CalenderItem,
  },
  data() {
    return {
      currentDate: null,
      schedules: [],
    };
  },
  computed: {
    dates() {
      const firstDay = startOfMonth(this.currentDate);
      const lastDay = endOfMonth(this.currentDate);
      return eachDayOfInterval({ start: firstDay, end: lastDay });
    },
    formattedMonth() {
      return format(this.currentDate, "M");
    },
  },
  methods: {
    formatDate(date) {
      return format(date, "E", { locale: ja });
    },
    handleChangeMonth(amount) {
      this.currentDate = addMonths(this.currentDate, amount);
    },
    handleRegisterSchedule(data) {
      const id = this.schedules.length > 0 ? this.schedules.at(-1).id + 1 : 1;
      this.schedules.push({ ...data, id });
    },
    getSchedulesForDate(date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      return this.schedules.filter(
        (schedule) => schedule.date === formattedDate
      );
    },
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const year = urlParams.get("year");
    const month = urlParams.get("month");

    if (year && month) {
      const dateStr = `${year}-${month}-01`;
      this.currentDate = parse(dateStr, "yyyy-MM-dd", new Date());
    } else {
      this.currentDate = new Date();
    }
  },
  watch: {
    currentDate(newDate) {
      const year = format(newDate, "yyyy");
      const month = format(newDate, "MM");
      const newUrl = `${window.location.pathname}?year=${year}&month=${month}`;
      window.history.replaceState(null, "", newUrl);
    },
  },
};
</script>

<style scoped>
.calendar {
  > li {
    border: rgb(218, 220, 224) 1px solid;
    padding: 16px;
  }
}
</style>
