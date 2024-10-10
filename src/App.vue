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
export default {
  name: "App",
  components: {},
  data(){
    return {
      dates:[...Array(31)].map((_, i) => i + 1)
    }
  },
};
</script>
