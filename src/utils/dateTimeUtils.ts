export const parseDateTime = (dateTime: string): Date => {
  return new Date(dateTime);
};

export const formatDate = (dateTime: string) => {
  return parseDateTime(dateTime).toLocaleDateString("es", {
    day: "numeric",
    month: "long",
  });
};

export const formatTime = (dateTime: string) => {
  return parseDateTime(dateTime).toLocaleTimeString("es", {
    hour: "numeric",
    minute: "numeric",
  });
};
