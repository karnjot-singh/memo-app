import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topic from './Topic';
import CreateTopic from './CreateTopic';

function Topics() {
    var [count, setCount] = useState(0);
    var [topics, setTopics] = useState([]);
    var [showCreate, setShowCreate] = useState(false);

    var addItem = () =>{
        setCount(count+1);
        topics.push(<Topic key={count} number={count} />)
        console.log(topics);
        setTopics(topics);
        setShowCreate(false);
    }

    return (
        <div>
            <Container>
                <div>{topics}</div>
                <Row>
                    <Col xs={12} md={2}></Col>
                    <Col xs={12} md={10}>
                        <span className='new-topic' onClick={() => setShowCreate(true)}>+ Add New Topic</span>
                    </Col>
                </Row>
                <CreateTopic
                show={showCreate}
                addItem={() => addItem()}
                onHide={() => setShowCreate(false)}
                />
            </Container>
        </div>
    );
}

export default Topics;