
import { Progress } from "@/components/ui/progress";
import { singleItem } from "@/type";
const TodoProgress = ({todoItems}:{todoItems:singleItem[]}) => {

  const itemTotal = todoItems.length
  const finishTotal = todoItems.filter((item) => item.finish === true);
  const percentage = itemTotal === 0 ? 0 : Math.floor((finishTotal.length / itemTotal) * 100)
  
  return <div className="flex justify-center items-center py-4">
  <div className="flex-none w-14"><p>{percentage}%</p></div>
  <Progress value={percentage} className='w-[85%] bg-indigo-200' />
  </div>
}
export { TodoProgress };

