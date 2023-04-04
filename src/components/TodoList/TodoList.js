import React, { useState } from "react";
import {  Button } from "react-bootstrap";
import './TodoList.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faSave, faCircleCheck, faPenToSquare,faRotateLeft } from '@fortawesome/free-solid-svg-icons'


function TodoList ({todo, setTodo}) {

   const [edit, setEdit] = useState(null)
   const [value, setValue]= useState('')

   function deleteTodo(id) {
      let newTodo = [ ...todo].filter(item => item.id!=id)
      setTodo(newTodo)
   }
 
   function statusTodo(id) {
      let newTodo = [...todo].filter(item => {
         if(item.id == id) {
            item.status = !item.status
         }
         return item
      })
      setTodo(newTodo)
   }

   function editTodo(id, title) {
      setEdit(id)
      setValue(title)
   }

   function saveTodo(id) {
      let newTodo = [...todo].map(item => {
         if (item.id == id) {
            item.title = value
         }
         return item
      })
      setTodo(newTodo)
      setEdit(null)
   }
   return (
      <div>
         {
         todo.map( item => (
            <div key={item.id} className="listItems">
               {
                  edit == item.id ? 
                  <div >
                     <input value={value} onChange={(e)=>setValue(e.target.value)}/>
                  </div> :
                  <div className={(!item.status ? "close" : "")}> { item.title }</div>
               }
               {
                  edit == item.id ?
                  <div>
                      <Button variant="outline-warning" onClick={() =>saveTodo(item.id)}><FontAwesomeIcon icon={faSave} /></Button>
                  </div> : 
                  <div>
                       <Button variant="outline-danger" onClick={() =>deleteTodo(item.id)} ><FontAwesomeIcon icon={faTrash}/></Button>
                       <Button variant="outline-primary" onClick={() => editTodo(item.id, item.title)} className="btn" ><FontAwesomeIcon icon={faPenToSquare} /></Button>
                       <Button variant="outline-success"  onClick={() =>statusTodo(item.id)} className="btn">
                          {
                             item.status ? <FontAwesomeIcon icon={faCircleCheck} />   : <FontAwesomeIcon icon={faRotateLeft} />
                          }
                        </Button> 
                  </div>
               }
            </div>
          ))
         }
         </div>
   )
}

export default TodoList