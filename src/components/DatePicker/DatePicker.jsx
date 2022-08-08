import { DatePickWrapper, Form, Input, Option } from './DatePicker.styled';
import { dataForMonthPicker, dataForYearPicker } from 'components/DiagramTab/js/initial-data';


const DatePicker = ({ onInputChange }) => {

  
  return (
    <DatePickWrapper>
      <Form>
      <Input
        name='year'
        defaultValue={"Year"}
        onChange={(event) => onInputChange(event)}
      >
          <Option defaultValue="Year" disabled hidden>Year</Option>
        {dataForYearPicker.map(item =>{
          return <Option key={item.id} value={item.value}>{item.name}</Option>
        })};
      </Input>

      <Input
        name='month'
        defaultValue={"Month"}
        onChange={(event) => onInputChange(event)}
      >
          <Option defaultValue="Month" disabled hidden>Month</Option>
        {dataForMonthPicker.map(item =>{
          return <Option key={item.id} value={item.value}>{item.name}</Option>
        })};
      </Input>

      </Form>
    </DatePickWrapper>
  )
}

export default DatePicker;