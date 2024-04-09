import { useState } from "react"
import "./styles.css"

export default function App(){
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label>New Item</label>
          <input value='' type="text" />
          <button className="btn">Create</button>
        </div>
      </form>

      <h1 className="header">Todo List</h1>
      <ul>
        <li>TEST</li>
      </ul>
    </>
  )
}
