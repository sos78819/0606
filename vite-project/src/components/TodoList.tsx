import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { singleItem } from "@/type";
import { useEffect, useRef, useState } from "react";
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
  const TodoHistoryRef = useRef<any[]>([]);


  useEffect(() => {
    TodoHistoryRef.current.push(todoItems);
  }, [todoItems]);
  const [action, setAction] = useState("")
  function handleAddItem(values: singleItem[]) {
    setTodoItems((prevItem) => prevItem.concat(values));
    setAction("add")
  };

  function handleCheck(e: boolean, idx: number) {
    setTodoItems(prevState => prevState.map((todo, index) =>
      index === idx ? { ...todo, finish: e } : todo
    ));
    setAction("")
  }

  function removeItem(idx: number) {
    setTodoItems(prevState => prevState.filter((_, index) => index !== idx));
    setAction("")
  }

  function handleSwitch(e: boolean) {
    const todoItems_clone = [...todoItems]
    if (e) {
      const todoItemsEnd = todoItems_clone.sort((a, b) => {
        if (a.finish === b.finish) return 0;
        if (a.finish) return 1;
        return -1;
      })
      setTodoItems(todoItemsEnd)
      setAction("switch")
    } else {
      //如果把完成項目置底後，有進行switch以外的操作，返回後就不做處理
      const backIdx = (TodoHistoryRef.current.length) - 2
      if (action === "switch") {
        setTodoItems(TodoHistoryRef.current[backIdx])
      }
    }
  }
  
  return (
    <div className="flex justify-center items-center w-full h-svh">
      <Card className='w-4/12  bg-gradient-to-b from-indigo-100 to-indigo-200   p-3  md:w-10/12 sm:w-12/12'>
        <CardHeader >
          <CardTitle>Todo List</CardTitle>
          <CardDescription>Add thing todo</CardDescription>
        </CardHeader>
        <Separator className="bg-slate-600" />
        <TodoProgress todoItems={todoItems} />
        <ItemContent action={action} handleSwitch={handleSwitch} todoItems={todoItems} removeItem={removeItem} handleCheck={handleCheck} />
        <AddItemForm addItem={handleAddItem} />
      </Card>
    </div>
  )
}

export { TodoList };

