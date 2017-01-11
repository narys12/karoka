import React from 'react';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLog: true,
        } 
    }

    render() {
        return (
            <Nav tabs>
                <NavItem>
                    <NavLink href="/">
                        Home
                </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Help
                </NavLink>
                </NavItem>
                <div>
                    <a href="#" onClick={this.login.bind(this)} className={this.state.showLog ? "hidden" : "show"}>Login</a>
                </div>
            </Nav>
        );
    }

    login() {
        let log = !this.state.showLog
        this.setState({
            showLog: log,
        });
    }
}