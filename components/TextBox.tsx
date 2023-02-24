import { MoonLoader } from "react-spinners";
export default function TextBox() {
  return (
    <div className="bg-white p-3 rounded-md box__shadow " >
        {/* Title */}
        <div className="text-xl font-bold mb-2" >
            Section - 1
        </div>

        {/* Content */}
        <div className="text-xs mb-5 limit__text " >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, perspiciatis ipsam. Tempore, eligendi totam! Possimus expedita, eaque repudiandae reprehenderit magnam corporis voluptatibus nam sunt adipisci iusto, saepe nisi alias ea.
        </div>

        {/* Status */}
        <div className="flex items-center space-x-3 w-full justify-end" >
            <span className="text-sm font-medium mb-1 " >Generating</span>
            <MoonLoader size="15px" color="#537FE7" />
        </div>
    </div>
  )
}
