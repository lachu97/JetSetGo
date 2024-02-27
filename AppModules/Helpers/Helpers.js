const monthAbbreviations = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export function getDate(date) {
  const dateTime = new Date(date);

  // Extracting date components
  const year = dateTime.getFullYear();
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const amonth = monthAbbreviations[dateTime.getMonth()];
  const day = dateTime.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
export function getTime(date) {
  const dateTime = new Date(date);
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
