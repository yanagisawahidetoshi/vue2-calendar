<template>
  <ul>
    <li><button type="button" @click="changeMonth(-1)">先月</button></li>
    <li><button type="button" @click="changeCurrentMonth">当月</button></li>
    <li><button type="button" @click="changeMonth(1)">翌月</button></li>
  </ul>
</template>

<script>
export default {
  name: "CalenderHeader",
};
</script>
