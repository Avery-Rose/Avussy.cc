export const sortDates = (data) => {
  return data.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
};
