import React, { PropTypes } from 'react';
import {
    Card,
    CardImg,
    CardBlock,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    CardDeck
} from 'reactstrap';

const styles = {
    'border-style': 'none',
    'margin-top': 20
};

export default class Index extends React.Component {
    render() {
        return (
            <CardDeck>
                <Card style={styles} >
                    <img
                        className="img-circle"
                        style={styles}
                        src="http://lorempixel.com/200/100/"
                        alt="Card image cap" />
                    <CardBlock>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the
                            bulk of the card's content.</CardText>
                    </CardBlock>
                </Card>
            </CardDeck>
        );
    }
}