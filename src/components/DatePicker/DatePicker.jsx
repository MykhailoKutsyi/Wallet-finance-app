import { DatePickWrapper, Form } from './DatePicker.styled';
// import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import "./DatePicker.module.css";
import { dataForMonthPicker, dataForYearPicker } from 'components/DiagramTab/js/initial-data';


const DatePicker = ({ onInputChange }) => {

  
  return (
    <DatePickWrapper>
      <Form>
      {/* <Datetime
        dateFormat="YYYY"
        timeFormat={false}
        inputProps={{ placeholder: 'Year' }}
        closeOnSelect={ true }
        onClose={(event) => {
          onChange(event, "year");
        }}
      /> */}

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

      {/* <Datetime
        dateFormat="MM"
        timeFormat={false}
        inputProps={{ placeholder: 'Month' }}
        onClose={(event) => {
          onChange(event, "month");
        }}
      /> */}
      </Form>
    </DatePickWrapper>
  )
}

export default DatePicker;