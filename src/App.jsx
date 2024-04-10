import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"

export default function App(){

  const [todos,setTodos] = useState(() =>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)


  })

  function addTodo(title){
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title, completed:
           false },
          ]
    })

  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return{ ...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !==id)
    })
  }

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  console.log(todos)

  return (
    <>


      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
          {todos.length === 0 && "there are no TODOS"}
          {todos.map(todo => {
            return(
            <li key={todo.id}>
              <label >
                  <input type="checkbox" checked={todo.completed} 
                  onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                  {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">DELETE</button>
            </li>
          )
          })}
      </ul>
    </>
  )
}
