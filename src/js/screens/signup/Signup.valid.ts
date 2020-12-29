import * as yup from 'yup';

export const valid = yup.object().shape({
  username: yup
    .string()
    .required('Email is not empty')
    .email('Incorrect email format'),
  password: yup
    .string()
    .required('Password is not empty')
    .min(6, 'Password longer than 6 characters'),
  passwordAgain: yup.string().required('Password is not empty'),
  firstname: yup.string().required('firstname is not empty'),
  lastname: yup.string().required('lastname is not empty'),
  sex: yup.string().required('sex is not empty'),
  birthday: yup.string().required('Birthday is not empty'),
});
