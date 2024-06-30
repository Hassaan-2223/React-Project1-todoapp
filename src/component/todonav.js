import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const TodoNav = () => {
  return (
    <>
       <Navbar className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Todo app</Navbar.Brand>
            </Container>
        </Navbar>
    </>
  )
}

export default TodoNav
