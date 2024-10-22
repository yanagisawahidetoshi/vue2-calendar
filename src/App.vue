<template>
  <div id="app">
    <ol>
      <li v-for="date in dates" :key="date">
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
} from "./libs/date-fns";
export default {
  name: "App",
  components: {},
  computed: {
    dates() {
      const now = new Date();
      const start = getStartOfMonth(now);
      const end = getLastDayOfMonth(now);
      return getEachDayOfInterval({ start, end });
    },
  },
  methods: {
    formatDate(date) {
      return format(date, "MM月dd日");
    },
  },
};
</script>
