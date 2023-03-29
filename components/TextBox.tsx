import { MoonLoader } from "react-spinners";
type promptProps = {
  prompt: string;
  id: number;
};
export default function TextBox({prompt, id} : promptProps) {
  return (
    <div className="bg-white p-3 rounded-md box__shadow " >
        {/* Title */}
        <div className="text-xl font-bold mb-2" >
            Section - {id}
        </div>

        {/* Content */}
        <div className="text-xs mb-5 limit__text " >
            {
              prompt
            }
        </div>

        {/* Status */}
        <div className="flex items-center space-x-3 w-full justify-end" >
            <span className="text-sm font-medium mb-1 " >Generating</span>
            <MoonLoader size="15px" color="#537FE7" />
        </div>
    </div>
  )
}
