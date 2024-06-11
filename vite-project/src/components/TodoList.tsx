import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { singleItem } from "@/type";
import { useState } from "react";
import { AddItemForm } from "./add-item-form";
import { ItemContent } from "./item-content";
import { TodoProgress } from "./todo-progress";

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
    <div className="flex justify-center content-center w-full h-full">
      <Card className={cn('w-6/12 bg-indigo-100 mt-10 p-2  md:w-10/12 sm:w-12/12')}>
        <CardHeader >
          <CardTitle>Todo List</CardTitle>
          <CardDescription>Add thing todo</CardDescription>
        </CardHeader>
        <Separator className="bg-slate-600" />
        <TodoProgress TodoItem={TodoItems}/>
        <ItemContent TodoItem={TodoItems} handleItemChange={handleItemChange} />       
        <AddItemForm TodoItem={TodoItems} handleItemChange={handleItemChange} />
      </Card>
    </div>

  )

}

export { TodoList };

