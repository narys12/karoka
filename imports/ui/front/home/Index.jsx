import React, {PropTypes} from 'react';
import {Container} from 'reactstrap';
import Head from '../Head.jsx';
import Foot from '../Foot.jsx';
import Recent from './Recent.jsx';

export default class Index extends React.Component {
  render() {
    return (
      <Container>
        <Head/>
        <Container>
          <Recent/>
        </Container>
        <Foot/>
      </Container>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
}
