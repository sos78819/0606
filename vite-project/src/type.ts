export interface singleItem {
    title: string,
    finish: boolean 
}


export interface TodoItems {
    TodoItem: singleItem[],
   
}

export interface TodoProps {  
    handleAddItem: (newItem:singleItem[]) => void
}

