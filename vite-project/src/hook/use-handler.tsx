import { singleItem } from "@/type";
import { useRef, useState, useSyncExternalStore } from "react";
import { useLocalStorage } from "./use-localstorage";


const useHandler = () => {
  const { readLocalStorage, saveLocalStorage } = useLocalStorage();
  const initialItems = readLocalStorage("ItemList")
  const [todoItems, setTodoItems] = useState<singleItem[]>(initialItems)
 
  const [itemEnd, setItemEnd] = useState(false);
  const lastTodoRef = useRef<HTMLDivElement>(null);
  // const stepRef = useRef<number>(todoHistoryRef.current.length)
  // console.log('lastTodoRef', lastTodoRef)
 
 const subscribe = (listener: () => void) => {
    window.addEventListener("storage", listener);
    saveLocalStorage("ItemList", todoItems)
    return () => {
      window.removeEventListener("storage", listener);
    };
  }
  const getSnapShot = () => {
    return localStorage.getItem("ItemList");
  }

  useSyncExternalStore(subscribe, getSnapShot);


  function handleAddItem(values: singleItem[]) {    
    const un_finishTotal = todoItems.filter((item) => item.finish === false);
    const finish = todoItems.filter((item) => item.finish === true);
    const newTodo =itemEnd? [...un_finishTotal,...values,...finish]:[...todoItems,...values]
    setTodoItems(newTodo);    
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


  return { handleAddItem, handleCheck, removeItem, handleSwitch,lastTodoRef, todoItems }

}

export { useHandler };

