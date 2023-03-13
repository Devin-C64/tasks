import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    // No parameters or return value, because it's a closure
    function startQuiz(): void {
        const newAttempts = attempts - 1;
        setAttempts(newAttempts);
        setProgress(true);
    }

    function mulligan(): void {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
    }

    return (
        <div>
            <div>
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts <= 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={() => setProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={mulligan} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
            Attempts: <span>{attempts}</span> <br></br>
            In Progress: <span>{inProgress.toString()}</span>
        </div>
    );
}
