<template>
  <div id="app">
    <ol>
      <li v-for="date in dates" :key="date">
        <p>{{ date }}</p>
      </li>
    </ol>
  </div>
</template>

<script>
import {
  getStartOfMonth,
  getLastDayOfMonth,
  getEachDayOfInterval,
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
};
</script>
