import React, {PropTypes} from 'react';
import {Container} from 'reactstrap';
import Head from '../Head.jsx';
import Foot from '../Foot.jsx';
import Recent from './Recent.jsx';
import User from '../User.jsx';

export default class Index extends React.Component {

  render() {
    return (
      <Container>
        <Head/>
        <Container>
          <Recent />
          <User />
        </Container>
        <Foot/>
      </Container>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
}
