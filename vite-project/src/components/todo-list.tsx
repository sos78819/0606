import { Separator } from "@/components/ui/separator";
import { useHandler } from "./hook/use-handler";

import { AddItemForm } from "./todo-add-item-form";
import { ItemContent } from "./todo-item-content";
import { MoveItemToEnd } from "./todo-move-to-item-end";
import { TodoProgress } from "./todo-progress";



const TodoList = () => {

  const { handleAddItem, handleCheck, removeItem, handleSwitch, lastTodoRef, todoItems } = useHandler();

  const itemTotal = todoItems.length
  const finishTotal = todoItems.filter((item) => item.finish === true);
  const percentage = itemTotal === 0 ? 0 : Math.floor((finishTotal.length / itemTotal) * 100)

  return (
    <>
      <Separator />
      <TodoProgress percentage={percentage} />
      <ItemContent forwardedRef={lastTodoRef} todoItems={todoItems} removeItem={removeItem} handleCheck={handleCheck} />
      <Separator className="mt-4" />
      <MoveItemToEnd handleSwitch={handleSwitch} />
      <AddItemForm addItem={handleAddItem} />
    </>

  )
}

export { TodoList };

