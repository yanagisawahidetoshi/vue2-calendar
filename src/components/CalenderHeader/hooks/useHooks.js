import { computed } from "@vue/composition-api";

export function useHooks(props, emit) {
  const title = computed(() => `${props.year}年${props.month}月`);

  const emitClickPrevMonth = () => emit("onClickPrevMonth");
  const emitClickNextMonth = () => emit("onClickNextMonth");
  const emitRegisterSchedule = (event) => emit("registerSchedule", event);

  return {
    title,
    emitClickPrevMonth,
    emitClickNextMonth,
    emitRegisterSchedule,
  };
}
