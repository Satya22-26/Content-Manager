import React from 'react';
import { useFormik } from 'formik';
import { signInSchema } from '../schemas';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
function SignIn() {

    const initialValues = {
        email: "",
        password: "",
      };
    const navigate=useNavigate();
      const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm} = useFormik({
        initialValues: initialValues,
        validationSchema: signInSchema,
        onSubmit: async (values) => {
          // ... your existing onSubmit logic for Sign In
          try{
            await signInWithEmailAndPassword(auth,values.email, values.password)
            .then((userCredential)=>{
              const user = userCredential.user;
              console.log(user);
              setTimeout(()=>{
                alert(user.email+" Login Successfully!!");
                document.getElementById('signup').style.display = 'none';     
                document.getElementById('logout').style.display='block';
              },1000)
              resetForm();
            })
            navigate("/"); 
                   
        }
        catch(error){
          console.log(error);
        }
        },
      });
    

  return (
    <section className="text-gray-400 bg-gray-900 body-font w-screen">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <img className=""width="126" height="106" src="https://img.icons8.com/nolan/96/enter-2.png" alt="enter-2"/>
          <h1 className="title-font font-medium text-3xl text-white">
          Welcome Back! Sign in for a Continuation of Your Journey."
          </h1>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">Sign In</h2>
          <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email} onChange={handleChange} onBlur={handleBlur}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />{errors.email && touched.email ? (
                <p className="form-error text-red-600">{errors.email}</p>
              ) : null}
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password} onChange={handleChange} onBlur={handleBlur}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />{errors.password && touched.password ? (
                <p className="form-error text-red-600">{errors.password}</p>
              ) : null}
          </div>
          <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            Submit
          </button>
          <p><a href="/ForgotPassword"className='mt-1 text-yellow-400 text-lg font-small title-font'>Forgot Password?</a></p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
