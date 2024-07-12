import { singleItem } from "@/type";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useLocalStorage } from "./use-localstorage";


const useHandler = () => {
  const { readLocalStorage, saveLocalStorage } = useLocalStorage();
  const initialItems = readLocalStorage("ItemList")
  const [todoItems, setTodoItems] = useState<singleItem[]>(initialItems)
  const [itemEnd, setItemEnd] = useState(false);
  const [add,setAdd] = useState(false);
  const lastTodoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(lastTodoRef.current && add)
    lastTodoRef.current.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });

  },[lastTodoRef.current] );



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
    setAdd(true)
    setTodoItems(prevState => [...prevState, ...values]);
    
  }

  function handleCheck(e: boolean, id: string) {
    const newTodoItems = todoItems.map((todo) =>
      todo.id === id ? { ...todo, finish: e } : todo
    );
    setTodoItems(newTodoItems)
  }

  function removeItem(id: string) {
    setTodoItems(prevState => prevState.filter((todo) => todo.id !== id));
  }

  function handleSwitch(e: boolean) {
    if (e) {
      setItemEnd(true)
      setTodoItems(todoItems)

    } else {
      const ItemListJSON = localStorage.getItem('ItemList')
      const ItemList = ItemListJSON? JSON.parse(ItemListJSON):[]      
      setItemEnd(false)
      setTodoItems(ItemList)
    }
  }


  return { handleAddItem, handleCheck, removeItem, handleSwitch,itemEnd, lastTodoRef, todoItems }

}

export { useHandler };

