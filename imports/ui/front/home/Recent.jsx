import React, {PropTypes} from 'react';
import {Col, Row} from 'reactstrap';
import Item from '../Item.jsx';

export default class Recent extends React.Component {
    render() {
        return (
            <Row>
                <Col md="4"><Item/></Col>
                <Col md="4"><Item/></Col>
                <Col md="4"><Item/></Col>
            </Row>
        );
    }
}