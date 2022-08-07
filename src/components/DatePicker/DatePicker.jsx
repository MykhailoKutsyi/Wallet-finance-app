// import { DatePickWrapper, DatePickHeader, DatePickSubheader, SubHeaderSpan, Input, Form } from './DatePicker.styled';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const DatePicker = ({ onChange }) => {
  return (
    <>
      <Datetime
        dateFormat="YYYY"
        timeFormat={false}
        onClose={event => {
          onChange(event, 'year');
        }}
      />

      <Datetime
        dateFormat="MM"
        timeFormat={false}
        onClose={event => {
          onChange(event, 'month');
        }}
      />
    </>
  );
};

export default DatePicker;
