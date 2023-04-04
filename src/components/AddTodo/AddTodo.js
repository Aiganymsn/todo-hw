import React, { useState } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import  "./AddTodo.css"

function AddTodo ({todo, setTodo}) {

   const [value, setValue] = useState('')

   function saveTodo() {
      setTodo(
         [...todo, {
            id: Math.random().toString(36).substring(2, 9),
            title: value, 
            status: true,
         }]
      ) 
      setValue('')
   }

   return (
      <Row>
         <Col className="addTodoForm">
         <FormControl placeholder="Введите задачу" value={value} onChange={ (e) => setValue(e.target.value)}/>
         <Button className="btn" variant="outline-warning" onClick={saveTodo}>Создать</Button>
         </Col>
      </Row>
   )
}

export default AddTodo;