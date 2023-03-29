'use client'
import { useSession } from "next-auth/react"
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const session = useSession();
  console.log(session);
  return (
    <div className="h-full w-1/6 bg-[#181823] flex flex-col items-center justify-between " >
        
        {/* Top Container */}
        <div className="flex flex-col items-center w-full" >
            {/* Logo */}
            <div className="text-xl font-bold text-[#E9F8F9] pt-6 pb-6">DiffuseDraw</div>

            {/* Your Stories */}
            <div className="w-full pl-2 pr-2 flex flex-col space-y-2" >
                <div className="text-[#C0EEF2] text-base font-medium" >Your stories</div>
                
                <div className="story__item" >HARRY POTTER AND THE SORCERER S STONE</div>
                <div className="story__item" >Noah's Arc</div>
                <div className="story__item" >The Yellow Wallpaper</div>
                <div className="story__item" >Animal Farm</div>
            </div>
        </div>
        
        {/* Bottom Container */}
        <div className="mb-6" >
            <div className="flex flex-col items-center space-y-2 mb-5 cursor-pointer" >
                <img src={ session?.data?.user?.image! } className="h-10 w-10 rounded-full" alt="profile-img" />
                <span className="text-[#C0EEF2] text-sm font-semibold " >{ session?.data?.user?.name }</span>
            </div>
            <div onClick={() => signOut()} className="dark__blue__button" >
                <LogoutIcon className="text-base" />
                <span className="" >Logout</span>
            </div>
        </div>
        
    </div>
  )
}
