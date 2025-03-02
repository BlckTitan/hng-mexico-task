import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar  bg="primary">
        <Container>
          <Navbar.Brand href="/" className='text-white'>HNG Mexico Task</Navbar.Brand>
        </Container>
    </Navbar>
  )
}
