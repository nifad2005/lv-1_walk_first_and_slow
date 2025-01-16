"use client";
import { signIn, signOut } from 'next-auth/react'
import React from 'react'

function page() {
  const ne =async ()=>{
    const email = 'example@example.com';
    const password = 'password';

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false, // Prevent automatic redirection
      });

      if (response?.ok) {
        console.log("Sign-in successful:", response);
      } else {
        console.error("Sign-in failed:", response?.error);
      }
    } catch (error) {
      console.error("An error occurred during sign-in:", error);
    }
    };
    // const req = await signIn('Credentials', { email, password , redirect: false })  ;
    // console.log(req)
    // console.log("done")
  const ou = async ()=>{
    const req = await signOut()
    console.log(req)
  }
  
  return (
    <div>
      <button className='sye bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={ne}>Sign In</button>
      <button className='sye bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={ou}>Sign out</button>
      hse
    </div>
  )
}

export default page
