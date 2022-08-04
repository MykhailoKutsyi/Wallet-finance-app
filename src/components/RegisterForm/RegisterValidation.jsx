import * as Yup from 'yup';

function RegisterValidation() {
 const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6).max(12).required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    name: Yup.string()
      .min(1, 'Must be 1 character or more')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  });
  return validate
}

export default RegisterValidation;
