import { singleItem } from '@/type';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useEffect, useRef } from 'react';
import { MoveItemEnd } from "./move-to-item-end";
import { Button } from "./ui/button";
import { CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { CloseIcon } from './ui/close';
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";


export interface TodoProps {
  todoItems: singleItem[],
  handleCheck: (e: boolean, idx: number) => void,
  removeItem: (idx: number) => void,
  handleSwitch: (e: boolean) => void,
  action: string
}


const ItemContent = (props: TodoProps) => {

  const viewportRef = useRef<HTMLDivElement>(null);

  const handleScroll = () =>{
    const scrollHeight = viewportRef.current ? viewportRef.current.scrollHeight : 0
    const scrollClient = viewportRef.current ? viewportRef.current.clientHeight : 0
    const scrollTop = scrollHeight - scrollClient
    return scrollTop;
  }
  
  useEffect(() => {
    if (props.action === "add") {    
     if(viewportRef.current)
     viewportRef.current.scrollTop = handleScroll()   
    }
  }, [handleScroll])

  return <><ScrollArea.Root type='auto'>
    <ScrollArea.Viewport  ref={viewportRef} className="max-h-72 bg-indigo-100 p-1" >
      <CardContent>
        {props.todoItems.map((item, idx) => {
          const lineClass = item.finish ? 'line-through' : '';
          return <Label
            className={`text-sm w-full font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${lineClass}`}
            key={`terms+${idx}`}
            htmlFor={`terms+${idx}`}
          ><div key={idx} className="flex items-center rounded bg-slate-50 border-l-8 border-l-indigo-500 mt-2 p-5 relative">
              <Checkbox onCheckedChange={(e: boolean) => props.handleCheck(e, idx)} checked={item.finish} className="mr-2" id={`terms+${idx}`} />
              {item.title}
              <Button onClick={() => props.removeItem(idx)} className='bg-transparent w-fit rounded-full text-slate-400 absolute right-0'><CloseIcon/></Button>
            </div>
          </Label>
        })
        }
      </CardContent>
    </ScrollArea.Viewport >
    <ScrollArea.Scrollbar className="h-full w-3.5 border-l border-l-transparent p-[1px]" orientation="vertical">
      <ScrollArea.Thumb className="relative flex-1  bg-indigo-400 " />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
    <Separator className="mt-2" />
    <MoveItemEnd handleSwitch={props.handleSwitch} />
  </>
}

export { ItemContent };

