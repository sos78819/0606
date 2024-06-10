import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useState} from "react";
import { AddItemForm } from "./add-item-form";
import { ItemContent } from "./item-content";
import { MoveItemEnd } from "./move-to-item-end";
import { TodoProgress } from "./todo-progress";
import { singleItem } from "@/type";

const TodoList = () => {
  const [TodoItems, setTodoItems] = useState(
    [
      {
       
        title: "default item 1",
        finish: false
      },
      {
      
        title: "default item 2",
        finish: true
      }
    ])

     
    function handleItemChange(newItem:singleItem[])  {       

      setTodoItems(newItem);
      
    };
  
  return (
    <div className="flex justify-center content-center flex-wrap w-full h-full">
      <Card className={cn('w-6/12')}>
        <CardHeader >
          <CardTitle>Todo List</CardTitle>
          <CardDescription>Add thing todo</CardDescription>
        </CardHeader>
        <Separator />
        <TodoProgress TodoItem={TodoItems}/>
        <ItemContent TodoItem={TodoItems} handleItemChange={handleItemChange} />
        <Separator />
        <MoveItemEnd />
        <AddItemForm TodoItem={TodoItems} handleItemChange={handleItemChange} />
      </Card>
    </div>

  )

}

export { TodoList };

