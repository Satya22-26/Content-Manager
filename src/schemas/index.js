import * as Yup from "yup";

export const signUpSchema = Yup.object({
  //name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter an email"),
//   usname: Yup.string().__context.required("Please enter a name"),
  password: Yup.string().min(8).required("Please enter your password").matches(
    /^(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
    'Password must contain at least one special character'
  ),
  name: Yup.string().required('Name is required'),
});

export const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8).required('Password is required').matches(
      /^(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
      'Password must contain at least one special character'
    ),
});