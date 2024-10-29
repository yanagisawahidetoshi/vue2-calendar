<template>
  <p>{{ formatDate(date) }}</p>
</template>
<script>
import { format } from "./libs/date-fns";
export default {
  name: "DateRow",
  props: {
    date: { type: String },
  },
  methods: {
    formatDate(date) {
      return format(date, "MM月dd日");
    },
  },
};
</script>
