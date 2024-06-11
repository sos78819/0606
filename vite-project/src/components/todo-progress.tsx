
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import { TodoItems } from "@/type"
import { useEffect, useState } from "react"
const TodoProgress = ({TodoItem}:TodoItems) => {
 
  const itemTotal = TodoItem.length
  const finishTotal = TodoItem.filter((item) => item.finish === true);
  const percentage = Math.floor((finishTotal.length / itemTotal) * 100) 
  const [progress, setProgress] = useState(percentage)

  useEffect(() => {   
    const timer = setTimeout(() => setProgress(percentage), 600)
    return () => clearTimeout(timer)
  }, [percentage])



  return <div className="flex p-3 relative">
  <div className="flex-none w-14"><p className="align-text-top">{progress}%</p></div>
  <Progress value={progress} className={cn('w-[80%] bg-indigo-200')} />
  </div>
}
export { TodoProgress }

