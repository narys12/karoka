import React, {PropTypes} from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import {
    InputGroup, 
    InputGroupButton, 
    Input, 
    Button
} from 'reactstrap';

const styles = {
    width: 300,
};

export default class SearchForm extends React.Component {
    render() {
        return (
            <div style={styles} >
                <InputGroup>
                    <Input placeholder="Search..." />
                    <InputGroupButton>
                        <Button> 
                            <FaSearch />
                        </Button>
                    </InputGroupButton>
                </InputGroup>
            </div>
        );
    }
}