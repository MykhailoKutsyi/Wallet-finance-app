import * as Yup from 'yup';

function RegisterValidation() {
  
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .min(10)
      .max(63)
      .required('Email is required')
      .test({
        message: 'before @ at least 2 characters',
        test: value => value&&value[0]&&value[1]!=='@',
      })
      .test({
        message: 'do not type dash at the start ',
        test: value => value&&value[0]!=='-',
      }).matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Email is invalid"
),

    password: Yup.string().min(6).max(16).required('Password is required').matches(
      /^(?=.*[a-z])(?=.*\d)[a-z\d@$!%*#?&]{0,}$/,
      "Must Contain at least One letter and One number"
    ),


    confirmPassword: Yup.string()
      .min(6)
      .max(16)
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    name: Yup.string()
      .min(1, 'Must be 1 character or more')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  });
  return validate;
}

export default RegisterValidation;
