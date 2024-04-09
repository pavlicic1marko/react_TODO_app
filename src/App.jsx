import { useState } from "react"
import "./styles.css"

export default function App(){

  const [newItem,setNewItem] = useState('')

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label>New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" />
        </div>
        <button className="btn">Create</button>
      </form>

      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label >
            <input type="checkbox" />
            item 1
          </label>
          <button className="btn btn-danger">DELETE</button>
        </li>
      </ul>
    </>
  )
}
