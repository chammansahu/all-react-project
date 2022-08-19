import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Counter from './Counter'

const ReduxExamples = () => {
    return (
        <Container>
            <Row>
                <h3>baisc examples</h3>
                <h4>Counter Example</h4>
                <Counter/>
            </Row>
        </Container>
    )
}

export default ReduxExamples
