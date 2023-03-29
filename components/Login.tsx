'use client'
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#181823] pb-20 space-y-10" >

      <div className="text-6xl md:text-8xl font-bold text-[#C0EEF2] animate-pulse" >DiffuseDraw</div>
      <div className="flex items-center space-x-3 p-3 rounded-md border-[2px] border-[#C0EEF2] cursor-pointer hover:bg-[#37374d] transition-[0.5s] " onClick={() => signIn('google')} >

        <img className="h-5" src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1680081638/DiffuseDraw/5847f9cbcef1014c0b5e48c8_1_gswwzo.png" alt="google-logo" />
        <span className=" text-slate-200 text-sm mb-1 font-medium" >Sign in with Google</span>
      </div>
        
    </div>
  );
}


// <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676795479/DiffuseDraw/zyro-image_fqbjdh.png" alt="logo-img" className="h-32 " />
//         <div className="font-normal text-2xl cursor-pointer text-gray-500 animate-pulse" onClick={() => signIn('google')} >Sign in to DiffuseDraw</div>