import React from 'react';
import {Row, Col} from 'reactstrap';

const styles = {
  height: 60,
  bottom: 0,
  position: 'relative'
};

export default class Foot extends React.Component {
  render() {
    return (
      <Row style={styles}>
        <Col md="4" className="text-muted">
          Welcome
        </Col>
        <Col md="4" className="text-muted">
          Welcome
        </Col>
        <Col md="4" className="text-muted">
          Welcome
        </Col>
      </Row>
    );
  }
}
