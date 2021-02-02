// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactChat from "./Components/ReactChat";
import ChatBody from './Components/chatBody/ChatBody';

function App() {
  return (
    <div className="app">
      <Container>
       <Row>
         <Col >
         {/* <ReactChat/> */}
         <ChatBody/>
         </Col>
      
      </Row>
      </Container>
     
    </div>
  );
}

export default App;
