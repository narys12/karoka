import React from 'react';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const styles = {
    postion: 'absolute',
    ritgh: '0'
};

export default class Menu extends React.Component {
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
            </Nav>
        );
    }
}