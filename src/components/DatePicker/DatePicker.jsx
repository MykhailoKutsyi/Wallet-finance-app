import { DatePickWrapper, DatePickHeader, DatePickSubheader, SubHeaderSpan, Input, Form } from './DatePicker.styled';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";



const DatePicker = ({ onChange }) => {

  return (
    <DatePickWrapper>
      <DatePickHeader>Enter period</DatePickHeader>
      <DatePickSubheader>
        <SubHeaderSpan>Year:</SubHeaderSpan>
        <SubHeaderSpan>Month:</SubHeaderSpan>
      </DatePickSubheader>
      <Form>
      <Datetime
        dateFormat="YYYY"
        timeFormat={false}
        onClose={(event) => {
          onChange(event, "year");
        }}
      />

      <Datetime
        dateFormat="MM"
        timeFormat={false}
        onClose={(event) => {
          onChange(event, "month");
        }}
      />
      </Form>
    </DatePickWrapper>
  )
}

export default DatePicker;