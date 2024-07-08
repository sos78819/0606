
import { Progress } from "@/components/ui/progress";
import { memo } from "react";

const TodoProgress = memo(function TodoProgress({percentage}:{percentage:number})  {  
  return <div className="flex justify-center items-center py-4 pr-2">
  <div className="flex-none text-center w-fit px-1"><p>{percentage}%</p></div>
  <Progress value={percentage} className='max-w-[100%]  bg-indigo-200' />
  </div>
})
export { TodoProgress };



