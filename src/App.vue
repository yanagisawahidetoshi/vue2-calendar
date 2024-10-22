<template>
  <div>
    <CalenderHeader
      :year="currentDate.getFullYear()"
      :month="formattedMonth"
      @onClickPrevMonth="handlePrevMonth"
      @onClickNextMonth="handleNextMonth"
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
      currentDate: new Date(),
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
    handleNextMonth() {
      this.currentDate = addMonths(this.currentDate, 1);
    },
    handlePrevMonth() {
      this.currentDate = addMonths(this.currentDate, -1);
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
