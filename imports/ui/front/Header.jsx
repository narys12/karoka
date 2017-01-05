import React from 'react';
import { Row, Col, Input, Nav, NavItem, NavLink, Form, Button, FormGroup } from 'reactstrap';

export default class Header extends React.Component {

  render() {
    return (
      <Row>
        <Col md="4"> Logo </Col>
        <Col md="8">
          <Row>
            <Form inline>
              <FormGroup>
                <Input placeholder="Search..."/>
                <Input type="submit" value="Search" />
              </FormGroup>
            </Form>
          </Row>
          <Row>
            <Nav tabs>
              <NavItem><NavLink href="/" header> Home </NavLink></NavItem>
              <NavItem><NavLink href="#"> Help </NavLink></NavItem>
            </Nav>
          </Row>
        </Col>
      </Row>
    );
  }
}
