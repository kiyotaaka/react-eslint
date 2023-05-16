const date: Date = new Date();
const year: number = date.getFullYear();
const month: number = date.getMonth();
const day: number = date.getDate();
const monthName: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day
  .toString()
  .padStart(2, '0')}`;
