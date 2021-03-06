import React from 'react';
import SearchForm from './SearchForm.jsx';
import Menu from './Menu.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import {
  Row,
  Col,
  Input,
} from 'reactstrap';

const styles = {
  search: {
    right: '0',
    height: '50',
    'background-color': '#b0e0e6'
  }
};

export default class Head extends React.Component {
  render() {
    return (
      <Row>
        <Col xs="2">
          Logo
        </Col>
        <Col xs="10">
          <Row className="text-xs-right" >
            <Col xs="6" >
                <AccountsUIWrapper />
            </Col>
            <Col xs="6" >
              <SearchForm />
            </Col>
          </Row>
          <Row>
            <Menu />
          </Row>
        </Col>
      </Row>
    );
  }
}
