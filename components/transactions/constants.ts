import { intervalToDuration, formatDuration } from "date-fns";
import {ChainStateEnum} from "@/state";

export const CHAIN_OPTIONS: Record<ChainStateEnum, string> = {
  [ChainStateEnum.AELF]: 'MainChain '.concat(ChainStateEnum.AELF),
  [ChainStateEnum.tDVV]: 'SideChain '.concat(ChainStateEnum.tDVV),
  [ChainStateEnum.tDVW]: 'SideChain '.concat(ChainStateEnum.tDVW),
}

export const getLastTwoUnits = (date: Date) => {
  const duration = intervalToDuration({ start: date, end: new Date() });

  if (duration.days > 0) {
    return formatDuration(duration, { format: ['days', 'hours'] }).replace("hour", "hr") + " ago";
  } else if (duration.hours > 0) {
    return formatDuration(duration, { format: ['hours', 'minutes'] }).replace("hour", "hr").replace("minute", "min") + " ago";
  } else {
    return formatDuration(duration, { format: ['minutes', 'seconds'] }).replace("minute", "min").replace("second", "sec") + " ago";
  }
}