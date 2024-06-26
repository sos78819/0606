import { singleItem } from "@/type";
import { useEffect, useRef } from "react";

const useHistoryTodo = (todoItems:singleItem[]) =>{
  const todoHistoryRef = useRef<singleItem[][]>([]); 
 
  useEffect(() => {
    todoHistoryRef.current.push(todoItems);        
  }, [todoItems]);
  
  return {todoHistoryRef}
}

export { useHistoryTodo };
