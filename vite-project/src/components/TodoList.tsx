import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { singleItem } from "@/type";
import { useState } from "react";
import { AddItemForm } from "./add-item-form";
import { ItemContent } from "./item-content";
import { TodoProgress } from "./todo-progress";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState(
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

 
  function handleAddItem(values: singleItem[]) {
    setTodoItems((prevItem)=> prevItem.concat(values));  
    
  };

  function handleCheck(e: boolean, idx: number){
    setTodoItems(prevState => prevState.map((todo, index) => 
      index === idx? {...todo, finish: e} : todo
    ));
   
  }

  function removeItem(idx: number){
    setTodoItems(prevState => prevState.filter((_, index) => index!== idx));   
    
  }
  function handleSwitch(e: boolean){
    console.log(e)


  }

  

  return (
    <div className="flex justify-center items-center w-full h-svh">
      <Card className='w-5/12 bg-indigo-100  p-2  md:w-10/12 sm:w-12/12'>
        <CardHeader >
          <CardTitle>Todo List</CardTitle>
          <CardDescription>Add thing todo</CardDescription>
        </CardHeader>
        <Separator className="bg-slate-600" />
        <TodoProgress todoItems={todoItems} />
        <ItemContent handleSwitch={handleSwitch}  todoItems={todoItems} removeItem={removeItem}  handleCheck={handleCheck} />
        <AddItemForm addItem={handleAddItem} />
      </Card>
    </div>

  )

}

export { TodoList };

