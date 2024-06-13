import { singleItem } from '@/type';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { MoveItemEnd } from "./move-to-item-end";
import { Button } from "./ui/button";
import { CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

export interface TodoProps {
  todoItems: singleItem[],
  handleCheck: (e: boolean, idx: number) => void,
  removeItem:(idx: number)=>void,
  handleSwitch: (e: boolean) => void,
}


const ItemContent = (props:TodoProps) => {
  return <><ScrollArea.Root>
    <ScrollArea.Viewport className="h-72 bg-white" >
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
              <Button onClick={() => props.removeItem(idx)} className='bg-transparent w-fit rounded-full text-slate-400 absolute right-0'>x</Button>
            </div>
          </Label>
        })
        }
      </CardContent>
    </ScrollArea.Viewport >
    <ScrollArea.Scrollbar className="h-full w-2.5 border-l border-l-transparent p-[1px]" orientation="vertical">
      <ScrollArea.Thumb className="relative flex-1 rounded-full bg-border" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
    <Separator className="bg-slate-600 mt-2" />
    <MoveItemEnd handleSwitch={props.handleSwitch}/>
  </>
}

export { ItemContent };

