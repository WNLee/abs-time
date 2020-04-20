import { getTime } from 'date-fns';
import { isToday, isYesterday, formatDays, formatSlot, formatTime } from './utils';

function formatAbsTime(absTime: number|Date, now: undefined|number|Date): {
  day: string,
  slot: string,
  time: string,
} {
  const currNow: number = getTime(now || new Date);
  const currAbsTime: number = getTime(absTime);

  const distance = currNow - currAbsTime;

  if (!currAbsTime || distance < 0) {
    return {
      day: '',
      slot: '',
      time: '',
    };
  }

  const day = formatDays(currAbsTime, currNow);
  const slot = formatSlot(currAbsTime);
  const time = formatTime(currAbsTime);

  return {
    day,
    slot,
    time,
  };
};

export default {
  formatAbsTime,
  formatSlot,
  
  isYesterday,
  isToday,
};
