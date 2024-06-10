import { Button } from "./ui/button"
import { CardContent } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { TodoProps } from "@/type";
import { MoveItemEnd } from "./move-to-item-end";
import { Separator } from "./ui/separator";
import { useState } from "react";


const ItemContent = (props: TodoProps) => {

 const [switchTitle,setSwitchTitle] = useState("Move done thing to End?")
  //const viewportRef = useRef<HTMLDivElement>(null); 
  
  function handleItemCheck(e: boolean, idx: number) {
    const newTodos = [...props.TodoItem];
    newTodos[idx].finish = e
    props.handleItemChange(newTodos)
  }

  function removeItem(idx: number) {
    const newTodos = [...props.TodoItem];
    newTodos.splice(idx, 1);
    props.handleItemChange(newTodos)
  }

  function switchHandler(e:boolean) {
    const newTodos = [...props.TodoItem];
    if(e){   
      const switchToStart = "Move done thing to Start?"  
      newTodos.sort((a, b) => {        
        if (a.finish === b.finish) return 0;     
        if (a.finish) return 1;   
        return -1;
      });
      setSwitchTitle(switchToStart)
      
    }else{
      const switchToEnd = "Move done thing to End?" 
      newTodos.sort((a, b) => {        
        if (a.finish === b.finish) return 0;     
        if (!a.finish) return 1;   
        return -1;
      });
      setSwitchTitle(switchToEnd)
    }
    props.handleItemChange(newTodos)
  //   if (e && viewportRef.current) {
  //    const scrollHeight = viewportRef.current.scrollHeight
  //    const clientHeight = viewportRef.current.clientHeight
  //    const scrollTop = scrollHeight - clientHeight
  //     viewportRef.current.scrollTop=scrollTop
  // }
  }



  return <><ScrollArea.Root>
    <ScrollArea.Viewport className="h-72" >

      <CardContent>
        {props.TodoItem.map((item, idx) => {
          const lineClass = item.finish ? 'line-through' : '';
          return <div key={idx} className="flex items-center rounded border-l-8 border-l-indigo-500 mt-2 p-5 relative">
            <Checkbox onCheckedChange={(e: boolean) => handleItemCheck(e, idx)} checked={item.finish} className="mr-2" id="terms" />
            <Label
              className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${lineClass}`}
            >
              {item.title}

            </Label>
            <Button onClick={() => removeItem(idx)} className='bg-transparent rounded-full text-slate-400 absolute right-0'>x</Button>
          </div>
        })
        }
      </CardContent>

    </ScrollArea.Viewport >
    <ScrollArea.Scrollbar className="h-full w-2.5 border-l border-l-transparent p-[1px]" orientation="vertical">
      <ScrollArea.Thumb className="relative flex-1 rounded-full bg-border" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
    <Separator />
    <MoveItemEnd title ={switchTitle} switchHandler={switchHandler} />
  </>
}

export { ItemContent }
