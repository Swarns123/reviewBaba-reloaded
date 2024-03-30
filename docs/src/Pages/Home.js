import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';


function Home(props){

    const [counter,setCount] = useState(1);
    let increment = (count) => {
            if(count === 1){
                setCount(counter+1);
            }
            else if(count === 2){
                setCount(counter+1);
            }
            else{
                setCount(counter+1);
            }
        console.log(counter+ " Item added to the cart");
    }


    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">E-Commerce Site</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Products</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Product 1</Card.Title>
                                <Card.Text>
                                    Description of Product 1.
                                </Card.Text>
                                <Button onClick={()=> increment(1)} variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Product 2</Card.Title>
                                <Card.Text>
                                    Description of Product 2.
                                </Card.Text>
                                <Button onClick={()=> increment(2)} variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Product 3</Card.Title>
                                <Card.Text>
                                    Description of Product 3.
                                </Card.Text>
                                <Button onClick={()=> increment(3)} variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <footer className="bg-dark text-white text-center p-3 mt-5">
                <Container>
                    <p>&copy; 2024 E-Commerce Site. All Rights Reserved.</p>
                </Container>
            </footer>
        </div>
    );
}

export default Home;