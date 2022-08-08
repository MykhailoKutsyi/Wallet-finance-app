import { DatePickWrapper, Form } from './DatePicker.styled';
import "./DatePicker.module.css";
import { dataForMonthPicker, dataForYearPicker } from 'components/DiagramTab/js/initial-data';

const DatePicker = ({ onInputChange }) => {
  
return (
    <DatePickWrapper>
      <Form>
      <select
        name='year'
        defaultValue={"Year"}
        onChange={(event) => onInputChange(event)}
      >
          <option defaultValue="Year" disabled hidden>Year</option>
        {dataForYearPicker.map(item =>{
          return <option key={item.id} value={item.value}>{item.name}</option>
        })};
      </select>

      <select
        name='month'
        defaultValue={"Month"}
        onChange={(event) => onInputChange(event)}
      >
          <option defaultValue="Month" disabled hidden>Month</option>
        {dataForMonthPicker.map(item =>{
          return <option key={item.id} value={item.value}>{item.name}</option>
        })};
      </select>

      </Form>
    </DatePickWrapper>
  )
}

export default DatePicker;
