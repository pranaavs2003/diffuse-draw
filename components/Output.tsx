"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import TextBox from "./TextBox";
const prompts = [
  "Dark at this hour, except for the STREET LAMPS that dot the street, spilling deep pools of light upon the ground.",
  "On the far corner, a MAN MATERIALIZES out of the darkness. He is tall and thin, with a silver beard long enough to tuck into his belt. He wears a PURPLE CLOAK and is roughly one hundred and fifty years old. He is ALBUS DUMBLEDORE.",
  "Dumbledore removes a small silver object from his cloak—the PUT-OUTER. He extends his hand and—CLICK—the nearest street lamp GOES OUT with a soft pop. He continues to click the Put-Outer until all the lamps go DARK."
];

export default function Output() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); 
  const [summarized, setSummarized] = useState<Array<String>>([]);


  const addSummarized = () => {
    console.log(content);
    const s = content.split('.');
    setSummarized(s);

    const generateImage = async (prompt: string) => {
      const data = {prompt};
      const res = await axios.post('http://127.0.0.1:8000/generate', data);
      console.log("🆚",res);
    };

    for(let i=0;i<3;i+=1){
      generateImage(s[i]);
    }
  };

  useEffect(() => {
    console.log(summarized);
  }, [summarized]);


  return (
    <div className="bg-[#E9F8F9] flex-1 h-screen p-8 lg:pt-8 lg:pr-36 lg:pl-36" >
      {/* Top Container */}
      <div className="font-bold text-5xl mb-8" >
        Here's your story
      </div>

      {/* Bottom Container */}
      <div className="h-screen flex flex-1" >
        {/* Left Container */}
        <div className="flex flex-col w-4/6 rounded-sm p-5 space-y-2 " >

            <input className="w-3/4 rounded-sm p-3 font-bold text-lg text-[#181823]" placeholder="Title goes here" type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} />

            <textarea className="w-3/4 rounded-sm p-3 font-normal text-base text-[#181823]" placeholder="Content goes here..." name="title" id="title" onChange={(e) => setContent(e.target.value)} ></textarea>

            <div onClick={() => addSummarized()} className="font-medium text-lg ml-1 w-fit p-2 pl-4 pr-4 rounded-md cursor-pointer bg-[#7979bf] text-white hover:scale-95 transition-[0.3]" >Generate</div>

        </div>

        {/* Right Container */}
        <div className="w-2/6 flex flex-col space-y-5" >
          <TextBox prompt={prompts[0]} id={1} />
          <TextBox prompt={prompts[1]} id={2} />
          <TextBox prompt={prompts[2]} id={3} />
        </div>

      </div>


    </div>
  )
}
