const transformDate = (date: string) => {
  if (!date) {
    throw new Error("Date input is required");
  }

  const validDate = new Date(date);

  if (isNaN(validDate.getTime())) {
    throw new Error("Invalid Date");
  }

  const newDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeZone: "UTC",
  }).format(validDate);

  return newDate;
};

export default transformDate;
