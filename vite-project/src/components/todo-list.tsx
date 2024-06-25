import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { singleItem } from "@/type";
import { useEffect, useRef, useState } from "react";
import { AddItemForm } from "./todo-add-item-form";
import { ItemContent } from "./todo-item-content";
import { MoveItemToEnd } from "./todo-move-to-item-end";
import { TodoProgress } from "./todo-progress";


const TodoList = () => {
  const [todoItems, setTodoItems] = useState(
    [
      {
        id: Math.random().toString(36),
        title: "default item 1",
        finish: false
      },
      {
        id: Math.random().toString(36),
        title: "default item 2",
        finish: true
      }
    ])
  const [itemEnd, setItemEnd] = useState(false);
  const todoHistoryRef = useRef<singleItem[][]>([]);
  const lastTodoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    todoHistoryRef.current.push(todoItems);
  }, [todoItems]);

  function handleAddItem(values: singleItem[]) {
    setTodoItems((prevState) => [...values, ...prevState]);
    if (lastTodoRef.current)
      lastTodoRef.current.scrollIntoView({ behavior: 'smooth', block: "center" });
  }

  function handleCheck(e: boolean, id: string) {    
    const newTodoItems = todoItems.map((todo) =>
      todo.id === id ? { ...todo, finish: e } : todo
    );
    if (itemEnd) {
      newTodoItems.sort((a, b) => {
        if (a.finish === b.finish) return 0;
        if (a.finish) return 1;
        return -1;
      })
    }
    setTodoItems(newTodoItems)
  }

  function removeItem(id: string) {
    setTodoItems(prevState => prevState.filter((todo) => todo.id !== id));

  }

  function handleSwitch(e: boolean) {
    if (e) {
      setItemEnd(true)
      setTodoItems((prevState) => prevState.sort((a, b) => {
        if (a.finish === b.finish) return 0;
        if (a.finish) return 1;
        return -1;
      }))
    } else {
      setItemEnd(false)
    }
  }

  console.log('todoItems', todoItems)
  return (
    <div className="flex justify-center items-center w-full h-svh">
      <Card className='w-4/12  bg-gradient-to-b from-indigo-100 to-indigo-200  p-3  md:w-10/12 sm:w-12/12'>
        <CardHeader >
          <CardTitle>Todo List</CardTitle>
          <CardDescription>Add thing todo</CardDescription>
        </CardHeader>
        <Separator />
        <TodoProgress todoItems={todoItems} />
        <ItemContent forwardedRef={lastTodoRef} todoItems={todoItems} removeItem={removeItem} handleCheck={handleCheck} />
        <Separator />
        <MoveItemToEnd handleSwitch={handleSwitch} />
        <AddItemForm addItem={handleAddItem} />
      </Card>
    </div>
  )
}

export { TodoList };

