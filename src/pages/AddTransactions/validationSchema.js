import * as Yup from 'yup';
let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

const validationSchema = Yup.object().shape({
  category: Yup.string(),
  // .required("Please select the category"),
  amount: Yup.number()
    .typeError('you must specify a number')
    .moreThan(0, 'Value must be more, than 0.00')
    .test(
      'is-decimal',
      'The amount should be a decimal with maximum two digits after comma',
      val => {
        if (val !== undefined) {
          return patternTwoDigisAfterComma.test(val);
        }
        return true;
      }
    )
    // .positive("Value must be a positive number")
    .required('Please enter the amount'),
  comment: Yup.string().matches(/^[aA-zZ\s]+$/, 'Please only letters'),
});

export default validationSchema;
