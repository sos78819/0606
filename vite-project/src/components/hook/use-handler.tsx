import { singleItem } from "@/type";
import { useRef, useState } from "react";

const useHandler = () => {
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
  const lastTodoRef = useRef<HTMLDivElement>(null);

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
  return { handleAddItem, handleCheck, removeItem, handleSwitch, lastTodoRef ,todoItems}

}

export { useHandler };
