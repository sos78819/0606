import { singleItem } from "@/type";
import { useRef, useState } from "react";
import { useHistoryTodo } from "./use-history-todo";

const useHandler = () => {

  const [todoItems, setTodoItems] = useState(
    [
      {
        id: Math.random().toString(36).substring(2, 12),
        title: "default item 1",
        finish: false
      },
      {
        id: Math.random().toString(36).substring(2, 12),
        title: "default item 2",
        finish: true
      }
    ])
  const { todoHistoryRef } = useHistoryTodo(todoItems)
  const [itemEnd, setItemEnd] = useState(false);
  const lastTodoRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef<number>(todoHistoryRef.current.length)
  function handleAddItem(values: singleItem[]) {
    setTodoItems((prevState) => [...values, ...prevState]);
    if (lastTodoRef.current)
      lastTodoRef.current.scrollIntoView({ behavior: 'smooth', block: "center" });
    stepRef.current = todoHistoryRef.current.length
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
    stepRef.current = todoHistoryRef.current.length
  }

  function removeItem(id: string) {
    setTodoItems(prevState => prevState.filter((todo) => todo.id !== id));
    stepRef.current = todoHistoryRef.current.length
  }

  function handleSwitch(e: boolean) {
    if (e) {
      setItemEnd(true)
      setTodoItems((prevState) => prevState.sort((a, b) => {
        if (a.finish === b.finish) return 0;
        if (a.finish) return 1;
        return -1;
      }))
      stepRef.current = todoHistoryRef.current.length
    } else {
      setItemEnd(false)
    }
  }

  function backPrevious() {
    console.log(todoHistoryRef.current)
    console.log(todoHistoryRef.current.length)
    stepRef.current = stepRef.current > 0 ? stepRef.current - 1 :0
    console.log(stepRef.current)
    setTodoItems(todoHistoryRef.current[stepRef.current])
  }

  return { handleAddItem, handleCheck, removeItem, handleSwitch, backPrevious, lastTodoRef, todoItems }

}

export { useHandler };
