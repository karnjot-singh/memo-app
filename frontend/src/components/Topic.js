import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Topic(props) {
    return (
        <div>
            <Row>
                <Col xs={12} md={2}></Col>
                <Col xs={12} md={10}>
                    <span className='topic'>Content {props.number}</span>
                </Col>
            </Row>
        </div>
    );
}

export default Topic;