import * as Yup from 'yup';

function LoginValidation() {
    const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6).max(12).required('Password is required'),
  });
  return validate
}

export default LoginValidation