import TextBox from "./TextBox";
export default function Form() {
  return (
    <div className="bg-[#E9F8F9] flex-1 h-screen p-8 lg:pt-8 lg:pr-36 lg:pl-36" >
      {/* Top Container */}
      <div className="font-bold text-5xl mb-8" >
        Create a story
      </div>

      {/* Bottom Container */}
      <div className="h-screen flex flex-1" >
        {/* Left Container */}
        <div className="flex flex-col w-4/6" >

          {/* Title Input */}
          <div className="w-5/6 pt-5" >
            <div className="input__lable" > Title </div>
            <input type="text" name="title" id="" className="input__box" placeholder="Title goes here" />
          </div>

          {/* Content Input */}
          <div className="w-5/6 pt-5" >
            <div className="input__lable" > Content </div>
            <textarea name="title" id="" className="input__box h-56" placeholder="Content goes here" />
          </div>

          {/* Words per Image */}
          <div className="w-5/6 pt-5" >
            <div className="input__lable" > Words per Image </div>
            <input type="range" name="wpi" id="" className="slider" />
          </div>

          {/* Select Layout */}
          <div className="w-5/6 pt-5" >
            <div className="input__lable" > Layout </div>
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

          {/* Generate Button */}
          <div className="bg-[#181823] pl-4 pr-4 pt-2 pb-2 rounded-md font-semibold text-white mt-10 cursor-pointer w-fit hover:bg-[#3f3f4c] transition-[0.5s]" >Generate</div>

        </div>

        {/* Right Container */}
        <div className="w-2/6 flex flex-col space-y-5" >
          <TextBox />
          <TextBox />
          <TextBox />
        </div>

      </div>


    </div>
  );
}

