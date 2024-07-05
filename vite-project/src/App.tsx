import { TodoList } from './components'
import { TodoCard } from './components/todo-card'
import { TodoTitle } from './components/todo-title'
import "./index.css"

function App() {
  return (    
    <TodoCard>     
      <TodoTitle/>
      <TodoList/>
    </TodoCard>
      
  )
}

export default App
