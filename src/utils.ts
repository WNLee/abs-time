import { format, startOfDay, endOfDay, subDays, getDay, isSameWeek, getHours } from 'date-fns';
import * as CONSTANT from './constant';

export function isToday(time, now): boolean {
  if (time >= startOfDay(now)  && time <= endOfDay(now)) {
    return true
  }
  return false;
}

export function isYesterday(time, now): boolean {
  if (time < startOfDay(now) && time >= subDays(startOfDay(now), 1)) {
    return true;
  }
  return false;
}

export function formatDays(time, now): string {
  if (isToday(time, now)) {
    return CONSTANT.days[0];
  }
  if (isYesterday(time, now)) {
    return CONSTANT.days[1];
  }
  if (isSameWeek(time, now, { weekStartsOn: 1 })) {
    const index = getDay(time);
    return CONSTANT.weeks[index];
  }
  return format(time, 'M月d日');
}

export function formatSlot(time): string {
  const h = getHours(time);
  if (h >= 0 && h < 6) {
    return CONSTANT.slot["wee-hours"];
  }
  if (h >= 6 && h < 12) {
    return CONSTANT.slot.morning;
  }
  if (h >= 12 && h < 18) {
    return CONSTANT.slot.afternoon;
  }
  if (h >= 18 && h < 24) {
    return CONSTANT.slot.evening;
  }
  return '';
}

export function formatTime(time): string {
  return format(time, 'h:mm');
}
