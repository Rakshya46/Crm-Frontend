
import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
export const LoginForm = ({handleOnChange, handleOnSubmit, email,formSwitcher, pass}) => {
    return(
        
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr/>

                    <Form autoComplete="off" onSubmit={handleOnSubmit}>
                       <Form.Group>
                           <Form.Label>Email Address
                               </Form.Label>
                               <Form.Control
                                   type="email"
                                   name="email"
                                   value={email}
                                   onChange= {handleOnChange}
                                   placeholder="Enter Email"
                                   required
                               />
                               </Form.Group> 
                               <Form.Group>
                               <Form.Label>Password
                               </Form.Label>
                               <Form.Control
                                   type="password"
                                   name="password"
                                   onChange= {handleOnChange}
                                   value={pass}
                                   placeholder="password"
                                   required
                               />
                               </Form.Group> 
                               <Button type="submit">Login</Button>
                    </Form>
                    <hr/>
                    </Col>
                </Row>
<Row>
    <Col>
    <a href="#!" onClick={() => formSwitcher("rest")}>
        Forget Pasword?
    </a>
    </Col>
</Row>
            </Container>

       
    );
};
LoginForm.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired, 
    formSwitcher: PropTypes.func.isRequired,
    pass:PropTypes.string.isRequired,

};