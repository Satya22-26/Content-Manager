import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const LogOut = () => {
  
    const logOut = async()=>{
        try{
            await signOut(auth);
        console.log("Sign-Out successful.");
        alert("Sign-Out successful.");
        document.getElementById('signup').style.display = 'block';     
        document.getElementById('logout').style.display = 'none';
       // document.getElementById('data').style.display = 'none';
        }catch(err){
            console.log(err);
        }
    }
  
  return (
    <div id="logout"><button className="text-white font-serif font-semibold p-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={logOut}>Sign Out</button></div>
  )
}

export default LogOut