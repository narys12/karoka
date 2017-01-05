import React, { PropTypes } from 'react';
import { Container } from 'reactstrap';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

export default class Index extends React.Component {
  render() {
    return (
      <Container>
          <Header />
          <Footer />
      </Container>
    );
  }
}

Container.propTypes = {
  fluid:  PropTypes.bool
}
