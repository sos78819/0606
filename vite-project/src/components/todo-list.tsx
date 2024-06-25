import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useHandler } from "./hook/use-handler";
import { AddItemForm } from "./todo-add-item-form";
import { ItemContent } from "./todo-item-content";
import { MoveItemToEnd } from "./todo-move-to-item-end";
import { TodoProgress } from "./todo-progress";


const TodoList = () => {

  const {handleAddItem, handleCheck, removeItem, handleSwitch, lastTodoRef,todoItems} = useHandler();
 
  return (
    <div className="flex justify-center items-center w-full h-svh">
      <Card className='w-4/12  bg-gradient-to-b from-indigo-100 to-indigo-200  p-2  md:w-10/12 sm:w-12/12'>
        <CardHeader >
          <CardTitle>Todo List</CardTitle>
          <CardDescription>Add thing todo</CardDescription>
        </CardHeader>
        <Separator />
        <TodoProgress todoItems={todoItems} />
        <ItemContent forwardedRef={lastTodoRef} todoItems={todoItems} removeItem={removeItem} handleCheck={handleCheck} />
        <Separator className="mt-4"/>
        <MoveItemToEnd handleSwitch={handleSwitch} />
        <AddItemForm addItem={handleAddItem} />
      </Card>
    </div>
  )
}

export { TodoList };

