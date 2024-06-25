import { singleItem } from '@/type';
import { ForwardRefRenderFunction, Ref } from 'react';
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { CloseIcon } from './ui/close';
import { Label } from "./ui/label";

interface TodoItemProps {
    todoItems: singleItem[],
    removeItem: (id: string) => void,
    handleCheck: (e: boolean, id: string) => void,
    forwardedRef: Ref<HTMLDivElement>
}
const TodoItems: ForwardRefRenderFunction<HTMLDivElement, TodoItemProps> = (
    { todoItems,
        handleCheck,
        removeItem,
        forwardedRef
    }
) => {
    return <div>
        {todoItems.map((item) => {
            const lineClass = item.finish ? 'line-through' : '';           
            return <div ref={forwardedRef} key={item.id}>
            <Label
                className={`text-sm w-full font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${lineClass}`}
                htmlFor={`terms+${item.id}`}
            ><div className="flex items-center rounded bg-slate-50 border-l-6 border-l-indigo-500 mt-2 p-1 relative">
                    <Checkbox onCheckedChange={(e: boolean) => handleCheck(e, item.id)} checked={item.finish} className="mr-2" id={`terms+${item.id}`} />
                    {item.title}
                    <Button onClick={() => removeItem(item.id)} className='bg-transparent w-fit rounded-full text-slate-400 absolute right-0'><CloseIcon /></Button>
                </div>
            </Label>
            </div>
        })
        }
    </div>

}

export { TodoItems };

