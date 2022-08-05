import { DatePickWrapper, DatePickHeader, DatePickSubheader, SubHeaderSpan, Input, Form } from './DatePicker.styled';

const DatePicker = ({ onChange }) => {

  return (
    <DatePickWrapper>
      <DatePickHeader>Enter date period</DatePickHeader>
      <DatePickSubheader>
        <SubHeaderSpan>From:</SubHeaderSpan>
        <SubHeaderSpan>To:</SubHeaderSpan>
      </DatePickSubheader>
      <Form>
        <Input type="date" placeholder="Please input date" id="firstDate" onChange={onChange} />
        <Input type="date" placeholder="Please input date" id="secondDate" onChange={onChange} />
      </Form>
    </DatePickWrapper>
  )
}

export default DatePicker;