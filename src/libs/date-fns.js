import { startOfMonth, lastDayOfMonth, eachDayOfInterval } from "date-fns";
export const getStartOfMonth = (now) => {
  return startOfMonth(now);
};
export const getLastDayOfMonth = (now) => {
  return lastDayOfMonth(now);
};
export const getEachDayOfInterval = ({ start, end }) => {
  return eachDayOfInterval({ start, end });
};
