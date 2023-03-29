import TextBox from "./TextBox"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const prompts = [
  "Dark at this hour, except for the STREET LAMPS that dot the street, spilling deep pools of light upon the ground.",
  "On the far corner, a MAN MATERIALIZES out of the darkness. He is tall and thin, with a silver beard long enough to tuck into his belt. He wears a PURPLE CLOAK and is roughly one hundred and fifty years old. He is ALBUS DUMBLEDORE.",
  "Dumbledore removes a small silver object from his cloak—the PUT-OUTER. He extends his hand and—CLICK—the nearest street lamp GOES OUT with a soft pop. He continues to click the Put-Outer until all the lamps go DARK."
];

export default function Output() {
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
            {/* Page */}
            <div className="bg-white h-[550px] w-[388px] box__shadow" >
                content goes here
            </div>
            <div className="flex space-x-4" >
                <span className="p-[3px] cursor-pointer bg-white rounded-full box__shadow" ><ArrowLeftIcon /></span>
                <span className="p-[3px] cursor-pointer bg-white rounded-full box__shadow" ><ArrowRightIcon /></span>
            </div>

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
