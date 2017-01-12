import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

const styles = {
    login: {
        show: {
            display: 'block !important'
        },
        hidden: {
            display: 'none !important'
        }
    }
}

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLog: true
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
                        About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="registration">
                        Registration
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }

    login() {
        let log = !this.state.showLog
        this.setState({showLog: log});
    }
}