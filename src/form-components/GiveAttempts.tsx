import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [inputNum, setNum] = useState<string>("");
    const [numAttempts, setAttempts] = useState<number>(3);

    function addAttempts(): void {
        if (!isNaN(parseInt(inputNum))) {
            setAttempts(numAttempts + parseInt(inputNum));
        }
    }

    return (
        <div>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Attempts to be added:</Form.Label>
                <Form.Control
                    type="number"
                    value={inputNum}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNum(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setAttempts(numAttempts - 1)}
                    disabled={numAttempts <= 0}
                >
                    use
                </Button>
            </div>
            <div>
                <Button onClick={addAttempts}>gain</Button>
            </div>
            <div>Number of Attempts: {numAttempts}</div>
        </div>
    );
}
