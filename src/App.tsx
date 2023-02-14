import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD CISC275, Hello World</header>
            <h1>This is header text</h1>
            <p> Devin Cummings </p>
            List of my classes:
            <ul>
                <li>CISC275</li>
                <li>CISC304</li>
                <li>CISC437</li>
            </ul>
            List of my favorite movies:
            <ol>
                <li>Star Wars</li>
                <li>2001: A Space Odyssey</li>
                <li>The Grand Budapest Hotel</li>
            </ol>
            <img
                src="https://preview.redd.it/j02itmog3t721.jpg?auto=webp&s=aae79e633e3d44b81580e1833ddce04a9ebc5bb3"
                alt="A very happy man"
            />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
