const parseDateTime = (dateTime: string): Date => {
  return new Date(dateTime);
};

const date = (dateTime: string) => {
  return parseDateTime(dateTime).toLocaleDateString("es", {
    day: "numeric",
    month: "long",
  });
};

const time = (dateTime: string) => {
  return parseDateTime(dateTime).toLocaleTimeString("es", {
    hour: "numeric",
    minute: "numeric",
  });
};

export { date, time };
