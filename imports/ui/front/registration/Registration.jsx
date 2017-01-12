import React from 'react';
import UserForm from './UserForm.jsx';
import Head from '../Head.jsx';
import Foot from '../Foot.jsx';
import {Container} from 'reactstrap';

export default class Registration extends React.Component {
    render() {
        return (
            <Container>
                <Head/>
                <Container>
                    <UserForm/>
                </Container>
                <Foot/>
            </Container>
        );
    }
}