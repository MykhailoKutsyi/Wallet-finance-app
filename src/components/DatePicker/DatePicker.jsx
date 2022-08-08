import { DatePickWrapper, Form, Input, Option } from './DatePicker.styled';
import { dataForMonthPicker, dataForYearPicker } from 'components/DiagramTab/js/initial-data';


const DatePicker = ({ 
  onInputChange, 
  year, 
  month 
}) => {
  

  
  return (
    <DatePickWrapper>
      <Form>
      {year &&
      <Input
        name='year'
        value={year}
        onChange={(event) => onInputChange(event)}
      >
        {dataForYearPicker.map(item =>{
          return <Option key={item.id} value={item.value}>{item.name}</Option>
        })};
      </Input>}

      {month && 
      <Input
        name="month"
        value={month}
        onChange={(event) => onInputChange(event)}
      >
        {dataForMonthPicker.map(item =>{
          return <Option key={item.id} value={item.value}>{item.name}</Option>
        })};
      </Input>}

      </Form>
    </DatePickWrapper>
  )
}

export default DatePicker;