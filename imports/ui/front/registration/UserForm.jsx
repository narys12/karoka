import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor'
import {
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    Button
} from 'reactstrap';

export default class UserForm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="Name" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="name" ref="name" id="name" placeholder="Your Name"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input
                            type="password"
                            name="password"
                            ref="password"
                            placeholder="password placeholder"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Text Area</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText"/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col
                        sm={{
                        size: 10,
                        offset: 2
                    }}>
                        <Button onClick={this.login.bind(this)}>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }

    login() {
        Accounts.createUser({name: refs.name.value, password: refs.password.value})
        console.log(Meteor.user());
    }
}