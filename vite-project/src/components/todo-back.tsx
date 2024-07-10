
import { useHandler } from "../hook/use-handler";
import { Back } from "./ui/back";
const TodoBack = () =>{
  const { backPrevious } = useHandler();
  return <div className="float-right cursor-pointer" onClick={backPrevious}><Back /></div>
}

export { TodoBack };

