export interface singleItem {
    title: string,
    finish: boolean 
}


export interface TodoItems {
    TodoItem: singleItem[],
   
}

export interface TodoProps {
    TodoItem: singleItem[],
    handleItemChange: (newItem:singleItem[]) => void
}

