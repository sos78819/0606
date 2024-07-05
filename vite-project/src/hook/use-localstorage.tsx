import { singleItem } from "@/type";


const useLocalStorage = () =>{

function readLocalStorage(key:string) {
  try {
    const jsonValue = localStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (e) {
    return [];
  }
}

function saveLocalStorage(key:string, value:singleItem[]) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}

return {readLocalStorage,saveLocalStorage}
}

export { useLocalStorage };
