import { parseISO, format } from 'date-fns';

const addLeadingZeros = input => (
  input.toString().length === 1 ? `0${input}` :  input
);

const DateDisplay = ({ dateString, className }) => {
  let formattedDate = '';
  const date = new Date(dateString);

  try {
    // e.g. 2020-05-29T10:01:20.985Z
    const month = addLeadingZeros(date.getMonth());
    const day = addLeadingZeros(date.getDate());
    const hours = addLeadingZeros(date.getHours());
    const minutes = addLeadingZeros(date.getMinutes());
    const isoDate = parseISO(`${date.getFullYear()}-${month}-${day}T${hours}:${minutes}:00`);
    formattedDate = format(isoDate, 'LLLL d yyyy');
  } catch (err) {
    console.log('error', err);
  }
  return <time dateTime={dateString} className={className}>{formattedDate}</time>;
};

export default DateDisplay;