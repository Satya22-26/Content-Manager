import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../firebase"; 
import { useNavigate } from "react-router-dom";

function ForgotPassword(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(auth,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code)
        })
    }
    return(
        // <div className="App">
        //     <h1>Forgot Password</h1>
        //     <form onSubmit={(e)=>handleSubmit(e)}>
        //         <input name="email" /><br/><br/>
        //         <button>Reset</button>
        //     </form>
        // </div>
        
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Forgot Password !
        </h1>
      <img
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="https://images.pexels.com/photos/3791129/pexels-photo-3791129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="text-center lg:w-2/3 w-full">
        <form onSubmit={(e)=>handleSubmit(e)}>
                 <input name="email" placeholder="Enter your e-mail for password reset :" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /><br/><br/>
             </form>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  </section>
    )
}
export default ForgotPassword;