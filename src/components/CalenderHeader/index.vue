<template>
  <div>
    <header class="content">
      <a href="#" @click.prevent="$emit('onClickPrevMonth')">
        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
          ></path>
        </svg>
      </a>
      <a href="#" @click.prevent="$emit('onClickNextMonth')">
        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
        </svg>
      </a>
      <h2 class="title">{{ title }}</h2>
      <ScheduleRegistration
        @registerSchedule="$emit('registerSchedule', $event)"
      />
    </header>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import ScheduleRegistration from "../ScheduleRegistration";
import { useHooks } from "./hooks/useHooks";

export default defineComponent({
  name: "CalenderHeader",
  components: {
    ScheduleRegistration,
  },
  props: {
    year: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
  },
  // 引数を分割代入で取得してしまうと、リアクティブではなくなってしまうので注意
  setup(props, { emit }) {
    const {
      title,
      emitClickPrevMonth,
      emitClickNextMonth,
      emitRegisterSchedule,
    } = useHooks(props, emit);

    return {
      title,
      emitClickPrevMonth,
      emitClickNextMonth,
      emitRegisterSchedule,
    };
  },
});
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid rgb(60, 64, 67);
}
.title {
  margin-left: 16px;
  font: 400 22px/28px "Google Sans", Roboto, Arial, sans-serif;
}
</style>
