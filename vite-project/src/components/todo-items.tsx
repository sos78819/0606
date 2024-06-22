import { Checkbox } from "./ui/checkbox";
import { CloseIcon } from './ui/close';
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { singleItem } from '@/type';

const TodoItems = (
    { todoItems,
        handleCheck,
        removeItem 
    }
    : {
    todoItems: singleItem[],
    removeItem: (idx: number) => void,
    handleCheck: (e: boolean, idx: number) => void,
    }) => {
    return <div>
        {todoItems.map((item, idx) => {
            const lineClass = item.finish ? 'line-through' : '';
            return <Label
                className={`text-sm w-full font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${lineClass}`}
                key={`terms+${idx}`}
                htmlFor={`terms+${idx}`}
            ><div key={idx} className="flex items-center rounded bg-slate-50 border-l-6 border-l-indigo-500 mt-2 p-1 relative">
                    <Checkbox onCheckedChange={(e: boolean) => handleCheck(e, idx)} checked={item.finish} className="mr-2" id={`terms+${idx}`} />
                    {item.title}
                    <Button onClick={() => removeItem(idx)} className='bg-transparent w-fit rounded-full text-slate-400 absolute right-0'><CloseIcon /></Button>
                </div>
            </Label>
        })
        }
    </div>

}

export { TodoItems }