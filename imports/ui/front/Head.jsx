import React from 'react';
import {
  Row,
  Col,
  Input,
  Nav,
  NavItem,
  NavLink,
  Form,
  Button,
  FormGroup
} from 'reactstrap';

export default class Head extends React.Component {

  render() {
    return (
      <Row>
        <Col xs="2">
          Logo
        </Col>
        <Col xs="10">
          <Row className="text-xs-right">
            <Form inline>
              <FormGroup>
                <Input placeholder="Search..."/>
                <Input type="submit" value="Search"/>
              </FormGroup>
            </Form>
          </Row>
          <Row>
            <Nav tabs>
              <NavItem>
                <NavLink href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Help
                </NavLink>
              </NavItem>
            </Nav>
          </Row>
        </Col>
      </Row>
    );
  }
}
