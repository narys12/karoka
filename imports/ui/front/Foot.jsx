import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const styles = {
  height: 60,
  color: 'red',
  bottom: 0,
  position: 'absolute',
};

export default class Foot extends React.Component {
  render() {
    return (
      <Container className="footer" style={styles} >
        <Row>
          <Col md="4" className="text-muted"> Welcome </Col>
          <Col md="4" className="text-muted"> Welcome </Col>
          <Col md="4" className="text-muted"> Welcome </Col>
        </Row>
      </Container>
    );
  }
}