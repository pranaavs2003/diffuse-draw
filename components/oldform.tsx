'use client'
import { MoonLoader } from "react-spinners";
import { signOut, useSession } from "next-auth/react";

export default function Form() {
  const session = useSession();
  console.log(session?.data?.user?.image);
  return (
    <div className="flex justify-center min-h-screen bg-[#F1EFF2]">
      <div className="flex flex-col md:w-[60vw]" >
      <div className="flex justify-between items-center" >
        <div></div>
        <div className="flex justify-center items-center" >
          <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676795479/DiffuseDraw/zyro-image_fqbjdh.png" alt="logo-img" className="h-20" />
          <div className="text-xl" >
            <span className="text-[#F94740] font-medium" >Diffuse</span>
            <span className="text-gray-500" >Draw</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 mr-6" >
          <img onClick={() => signOut()} className="h-10 rounded-full cursor-pointer" src={session?.data?.user?.image!} alt="profile-img" />
          <span className="text-sm font-medium" >{session?.data?.user?.name}</span>
        </div>
      </div>
      <div className="flex md:space-x-[8vw]">
        <div className="h-fit flex flex-col items-center w-4/6" >
          
          {/* Form starts here */}
          <div className="w-5/6 pt-5" >
            <div className="text-xl font-normal text-gray-500 mb-3" > Title </div>
            <input type="text" name="title" id="" className="w-full p-2 rounded-sm text-sm font-semibold text-red-500 border-[1px] border-red-200 focus:outline-none bg-slate-100" placeholder="Title goes here" />
          </div>

          <div className="w-5/6 pt-5" >
            <div className="text-xl font-normal text-gray-500 mb-3" > Content </div>
            <textarea name="title" id="" className="w-full p-2 rounded-sm text-sm font-semibold text-red-500 border-[1px] border-red-200 focus:outline-none bg-slate-100" placeholder="Title goes here" />
          </div>

          <div className="w-5/6 pt-5" >
            <div className="text-xl font-normal text-gray-500 mb-3" > Words per Image </div>
            <input type="range" name="wpi" id="" className="slider" />
          </div>

          <div className="w-5/6 pt-5" >
            <div className="text-xl font-normal text-gray-500 mb-3" > Layout </div>
            <div className="flex gap-4 text-base font-semibold text-gray-600 flex-wrap" >
              <div className="flex" >
                <input className=""  type="radio" id="html" name="fav_language" value="HTML" />
                <label>Left-Right</label>    
              </div>
              <div className="flex" >
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label>Top-Bottom</label>    
              </div>
              <div className="flex" >
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label>Picturebook Mode</label>    
              </div>
            </div>
          </div>

          <div className="bg-[#FF8d8d] pl-4 pr-4 pt-2 pb-2 rounded-md font-semibold text-white mt-10 cursor-pointer" >Generate</div>

        </div>
        <div className="h-fit w-1/3 flex flex-col space-y-6 mt-4" >
          
          <div className="h-fit w-5/6 bg-white rounded-md p-2" >
            <div className="text-lg font-medium " >Page-1</div>
            <div className="text-xs text-gray-500" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sapiente blanditiis dolorum? ...</div>
            <div className="flex items-center space-x-3 mt-2 justify-end" >
              <span className="text-xs" >Generating</span>
              <MoonLoader color="#FF8D8D" size="15px" />
            </div>
          </div>

          <div className="h-fit w-5/6 bg-white rounded-md p-2" >
            <div className="text-lg font-medium " >Page-2</div>
            <div className="text-xs text-gray-500" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sapiente blanditiis dolorum? ...</div>
            <div className="flex items-center space-x-3 mt-2 justify-end" >
              <span className="text-xs" >Generating</span>
              <MoonLoader color="#FF8D8D" size="15px" />
            </div>
          </div>

          <div className="h-fit w-5/6 bg-white rounded-md p-2" >
            <div className="text-lg font-medium " >Page-3</div>
            <div className="text-xs text-gray-500" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sapiente blanditiis dolorum? ...</div>
            <div className="flex items-center space-x-3 mt-2 justify-end" >
              <span className="text-xs" >Generating</span>
              <MoonLoader color="#FF8D8D" size="15px" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}
