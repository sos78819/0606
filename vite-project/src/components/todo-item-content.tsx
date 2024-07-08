import { singleItem } from '@/type';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { Ref } from 'react';
import { TodoItems } from './todo-items';
import { CardContent } from "./ui/card";

export interface TodoProps {
  todoItems: singleItem[],
  handleCheck: (e: boolean, id: string) => void,
  removeItem: (id: string) => void,  
  forwardedRef: Ref<HTMLDivElement>
}

const ItemContent = (props: TodoProps) => {
  return <><ScrollArea.Root type='auto'>
    <ScrollArea.Viewport className="max-h-56" >
      <CardContent className='pr-4'>
      <TodoItems forwardedRef={props.forwardedRef} todoItems={props.todoItems} removeItem={props.removeItem} handleCheck={props.handleCheck}/>
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

