import * as moment from "moment";

export const responseObj = (status: any, msg: string, data: any) => {
  return {
    status: status,
    message: msg,
    data: data,
  };
};

export const responseGetObj = (
  status: any,
  msg: string,
  data: any,
  totalCount: any
) => {
  return {
    status: status,
    message: msg,
    data: data,
    totalCount: totalCount,
  };
};

export const createTimeSlots = (startTimeSlot, endTimeSlot, timeInterval) => {
  let x = {
    slotInterval: timeInterval,
    openTime: startTimeSlot,
    closeTime: endTimeSlot,
  };

  //Format the time
  let startTime = moment(x.openTime, "HH:mm");
  const end = moment(x.openTime, "HH:mm");

  // Time difference in hours
  const start_time = moment(startTimeSlot, "HH:mm:ss a");
  const end_time = moment(endTimeSlot, "HH:mm:ss a");
  const duration = moment.duration(end_time.diff(start_time));
  const timeDiffInHours = duration.asHours();

  //Format the end time and the next day to it
  let endTime = moment(x.openTime, "HH:mm").add(timeDiffInHours, "hours");

  //Times
  let allTimes = [];
  //Loop over the times - only pushes time with 30 minutes interval
  let i = 1;
  while (startTime < endTime) {
    //Push times
    allTimes.push({
      // id: i,
      start: startTime.format("HH:mm"),
      end: end.add(timeInterval, "minutes").format("HH:mm"),
    });
    //Add interval of 30 minutes
    startTime.add(x.slotInterval, "minutes");
    i++;
  }

  return allTimes;
};
