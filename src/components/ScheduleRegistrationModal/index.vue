<template>
  <vue-modal-2
    name="schedule-registration-modal"
    @on-close="handleClose"
    :headerOptions="{
      title: '予定を登録',
    }"
    :footerOptions="{
      btn1: 'キャンセル',
      btn2: '登録',
      btn2OnClick: () => {
        handleSubmit();
      },
      btn1OnClick: () => {
        handleClose();
      },
    }"
  >
    <div>
      <MyInput
        type="text"
        name="schedule"
        id="schedule"
        v-model="schedule"
        required
      />
      <input type="date" name="date" id="date" v-model="date" required />
    </div>
    <div>
      <label for="startTime">開始時間</label>
      <input
        type="time"
        name="startTime"
        id="startTime"
        v-model="startTime"
        required
      />
    </div>
    <div>
      <label for="endTime">終了時間</label>
      <input
        type="time"
        name="endTime"
        id="endTime"
        v-model="endTime"
        required
      />
    </div>
  </vue-modal-2>
</template>

<script>
import MyInput from "../Input";
export default {
  name: "ScheduleRegistrationModal",
  components: { MyInput },
  props: {
    defaultData: {
      type: Object,
      required: false,
      default: () => ({
        date: "",
        startTime: "",
        endTime: "",
        schedule: "",
      }),
    },
  },
  data() {
    return {
      date: this.defaultData.date,
      startTime: this.defaultData.startTime,
      endTime: this.defaultData.endTime,
      schedule: this.defaultData.schedule,
    };
  },
  mounted() {
    this.$vm2.open("schedule-registration-modal");
  },
  methods: {
    handleSubmit() {
      this.$emit("registerSchedule", {
        date: this.date,
        startTime: this.startTime,
        endTime: this.endTime,
        schedule: this.schedule,
      });
      this.handleClose();
    },
    handleClose() {
      this.$vm2.close("schedule-registration-modal");
      this.$emit("onClose");
      this.date = "";
      this.startTime = "";
      this.endTime = "";
      this.schedule = "";
    },
  },
};
</script>
