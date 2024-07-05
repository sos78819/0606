
import { Progress } from "@/components/ui/progress";
import { memo } from "react";

const TodoProgress = memo(function TodoProgress({percentage}:{percentage:number})  {  
  return <div className="flex justify-center items-center py-4">
  <div className="flex-none text-center w-[10%]"><p>{percentage}%</p></div>
  <Progress value={percentage} className='w-[90%] bg-indigo-200' />
  </div>
})
export { TodoProgress };



