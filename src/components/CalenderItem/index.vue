<template>
  <div class="content">
    <div class="date-container">
      <p class="date">{{ date }}</p>
      <p class="day">{{ day }}</p>
    </div>
    <div class="schedules">
      <button
        v-for="(v, index) in sortedSchedules"
        :key="index"
        class="schedule"
        @click="handleClick"
      >
        <div>
          <span>{{ v.startTime }}</span>
          〜
          <span>{{ v.endTime }}</span>
        </div>
        <p>{{ v.schedule }}</p>
      </button>
    </div>
    <ScheduleRegistrationModal
      v-if="isShow"
      @onClose="handleCloseModal"
      @registerSchedule="$emit('registerSchedule', $event)"
      :defaultData="{
        date: date,
        startTime: startTime,
        endTime: endTime,
        schedule: schedule,
      }"
    />
  </div>
</template>

<script>
import ScheduleRegistrationModal from "../ScheduleRegistrationModal";
export default {
  name: "CalenderItem",
  components: { ScheduleRegistrationModal },
  props: {
    date: {
      type: Number,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    schedules: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    sortedSchedules() {
      return [...this.schedules].sort((a, b) => {
        return a.time.localeCompare(b.time);
      });
    },
  },
  methods: {
    handleClick() {
      this.isShow = true;
      console.log("AAAAAA");
    },
  },
};
</script>
<style scoped>
.content {
  display: flex;
}
.schedules {
  display: flex;
  flex-flow: column;
  gap: 8px;
}
.schedule {
  display: flex;
  gap: 8px;
}
.date-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.date {
  font-size: 18px;
}
.day {
  font-size: 11px;
}
</style>
