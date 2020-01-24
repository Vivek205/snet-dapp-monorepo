export const getCurrentUTCEpoch = () => {
  const currentDate = new Date();
  const currentUTCDate = new Date(
    currentDate.getUTCFullYear(),
    currentDate.getUTCMonth(),
    currentDate.getUTCDate(),
    currentDate.getUTCHours(),
    currentDate.getUTCMinutes(),
    currentDate.getUTCSeconds()
  );
  const currentUTCEpoch = Math.floor(currentUTCDate.getTime() / 1000);
  return currentUTCEpoch;
};

export const parseDateFromAPIResponse = dateString => {
  if (!dateString) {
    return null;
  }
  const localDate = new Date(dateString);
  const intlDateOptions = { month: "short", year: "numeric", day: "2-digit" };
  // Date format - "MMM DD, YYYY"
  const formattedDateString = new Intl.DateTimeFormat("en-US", intlDateOptions).format(localDate);
  return formattedDateString;
};
