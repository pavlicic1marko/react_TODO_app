import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return(
        <ul className="list">
            {todos.length === 0 && "there are no TODOS"}
            {todos.map(todo => {
              return(
                <TodoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

            )
            })}
        </ul>        
    )
}