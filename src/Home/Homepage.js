import React from 'react';
import home from './images/home.png';
import './Homepage.css';

import {Container,Row,Col,Button} from 'react-bootstrap';
function Homepage(){
    return(
        <div class="home">
        
        <Container>
                <Row >
                    <Col sm={4} id="quote">
                        <h1>Let's go.</h1>
                        <h1>Contact us to join </h1>
                        <h1>the team</h1>
                        <Button variant="primary" id="signup-butt">Drive with us</Button>
                    </Col>
                    <Col sm={8} md={6} >
                
                     <img src={home} alt="logo disappear"></img>
                
                        
                    </Col>
                </Row>
                
            </Container> 
        </div>    
    )
}



export default Homepage;