import React from 'react'
import {  createUserWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import { auth,googleProvider} from '../firebase';
import { useFormik } from "formik";
import { signUpSchema } from '../schemas';
import { useNavigate } from 'react-router-dom';
function SignUp() {

  const initialValues = {
    email: "",
    password: "",
    name: "",
  };


const navigate=useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm }=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit: async(values) => {
      console.log(
        "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
        values
      );
      try{
        await createUserWithEmailAndPassword(auth,values.email, values.password)
        .then((userCredential)=>{
          const user = userCredential.user;
          console.log(user);
          setTimeout(()=>{
            alert("Registered Successfully!!");
            //document.getElementById('signup').style.display = 'none';     
            //document.getElementById('logout').style.display='block';
            //document.getElementById('data').style.display = 'block';
            document.getElementById('signup').style.display = 'none';     
            document.getElementById('logout').style.display='block';
          },1000)
          resetForm();
        })
       navigate("/"); 
    }
    catch(err){
        console.log(err);
    }
    },
  });



  const handleGoogleSignUp= async()=>{
   try{
       await signInWithPopup(auth, googleProvider)
       .then((userCredential)=>{
         const user = userCredential.user;
         console.log(user);
         setTimeout(()=>{
           alert("Registered Successfully!!");
           document.getElementById('signup').style.display = 'none';     
           document.getElementById('logout').style.display='block';
         },1000)
       })
       navigate("/");
   }catch(err){
       console.log(err);
   }
 }



    return(
        <section className="text-gray-400 bg-gray-900 body-font w-screen">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-white">Streamline. Manage. Thrive.</h1>
          <p className="leading-relaxed mt-4">Revolutionize your content management experience. Sign up now and step into a new era of digital empowerment.</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <form onSubmit={handleSubmit}>
          <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Full Name</label>
            <input type="text" id="full-name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.name && touched.name ? (
                <p className="form-error text-red-600">{errors.name}</p>
              ) : null}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.email && touched.email ? (
                <p className="form-error text-red-600">{errors.email}</p>
              ) : null}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Password</label>
            <input type="password" id="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-green-900 rounded border border-gray-600 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            {errors.password && touched.password ? (
                <p className="form-error text-red-600">{errors.password}</p>
              ) : null}
          </div>
          <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Create Account</button>
          </form>
          <div className="partition">-----------------------------------------</div>
          <div className="mt-1">
            <button
              onClick={handleGoogleSignUp}
              className="text-white bg-black border-0 py-2 px-4 ml-5 focus:outline-none hover:bg-blue-600 rounded-full text-lg flex"
            >
              <img width="25" height="38" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
               <p className='ml-1'>Sign In With Google</p>
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-400">Already have an account? <a href="/SignIn" className="text-green-500">Login here</a>.</p>
        </div>
      </div>
    </section>
    )
}

export default SignUp
