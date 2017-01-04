import React from 'react';
import { Row, Col, Input, Nav } from 'reactstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Row>
        <Col xs="4"> Logo </Col>
        <Col xs="8"> 
          <Row>
            <Input>
            </Input>
          </Row>
          <Row>
            <Nav>

            </Nav>
          </Row>
        </Col>
      </Row>
    );
  }
}