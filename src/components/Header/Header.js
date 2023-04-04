import React from "react";
import { Row, Col } from "react-bootstrap";
import  './Header.css'

function Header() {
   return (
      <Row>
         <Col>
         <div className="root">Todo List</div>
         </Col>
      </Row>
      
   );
}

export default Header;