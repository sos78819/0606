import { singleItem } from '@/type';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useEffect, useRef } from 'react';
import { CardContent } from "./ui/card";
import { TodoItems } from './todo-items';


export interface TodoProps {
  todoItems: singleItem[],
  handleCheck: (e: boolean, idx: number) => void,
  removeItem: (idx: number) => void,
 
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
    <ScrollArea.Viewport  ref={viewportRef} className="max-h-56 bg-indigo-100" >
      <CardContent>
      <TodoItems todoItems={props.todoItems} removeItem={props.removeItem} handleCheck={props.handleCheck}/>
      </CardContent>
    </ScrollArea.Viewport >
    <ScrollArea.Scrollbar className="h-full w-3.5 border-l border-l-transparent p-[1px]" orientation="vertical">
      <ScrollArea.Thumb className="relative flex-1  bg-indigo-400 " />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
  </>
}

export { ItemContent };

