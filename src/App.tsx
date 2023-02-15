import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header style={{ backgroundColor: "blue" }} className="App-header">
                UD CISC275, Hello World
            </header>
            <h1>This is a header</h1>
            <p> Devin Cummings </p>
            List of my favorite movies:
            <ol>
                <li>Star Wars</li>
                <li>2001: A Space Odyssey</li>
                <li>The Grand Budapest Hotel</li>
                <li>Bullet Train</li>
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
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
