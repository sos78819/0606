
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { TodoItems } from "@/type"
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
  <Progress value={progress} className={cn('w-[80%] bg-[#d4d4d4]')} />
  <span className="w-[10%] absolute bottom-2 right-4">{progress}%</span>
  </div>
}
export { TodoProgress }