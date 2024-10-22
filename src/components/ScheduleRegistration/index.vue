<template>
  <div>
    <button @click="handleClick">登録</button>
    <ScheduleRegistrationModal
      v-if="isShow"
      @onClose="handleCloseModal"
      @registerSchedule="$emit('registerSchedule', $event)"
    />
  </div>
</template>

<script>
import ScheduleRegistrationModal from "../ScheduleRegistrationModal";
export default {
  name: "ScheduleRegistration",
  components: { ScheduleRegistrationModal },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleClick() {
      this.isShow = true;
    },
    handleCloseModal() {
      setTimeout(() => {
        this.isShow = false;
      });
    },
  },
};
</script>
