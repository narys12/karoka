import React, { PropTypes } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

export default class Index extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Header />
          <Footer />
        </Row>
      </Container>
    );
  }
}

Container.propTypes = {
  fluid:  PropTypes.bool
}