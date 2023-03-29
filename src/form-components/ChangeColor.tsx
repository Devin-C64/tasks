import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "yellow",
        "cyan",
        "magenta",
        "white"
    ];
    const [chosenColor, setColor] = useState<string>(COLORS[0]);

    // This is the Control
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateColor}
                id="response-red"
                label="red"
                value="red"
                style={{
                    backgroundColor: "red"
                }}
                checked={chosenColor === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateColor}
                id="response-blue"
                label="blue"
                value="blue"
                style={{
                    backgroundColor: "blue"
                }}
                checked={chosenColor === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateColor}
                id="response-green"
                label="green"
                value="green"
                style={{
                    backgroundColor: "green"
                }}
                checked={chosenColor === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateColor}
                id="response-orange"
                label="orange"
                value="orange"
                style={{
                    backgroundColor: "orange"
                }}
                checked={chosenColor === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateColor}
                id="response-purple"
                label="purple"
                value="purple"
                style={{
                    backgroundColor: "purple"
                }}
                checked={chosenColor === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateColor}
                id="response-yellow"
                label="yellow"
                value="yellow"
                style={{
                    backgroundColor: "yellow"
                }}
                checked={chosenColor === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateColor}
                id="response-cyan"
                label="cyan"
                value="cyan"
                style={{
                    backgroundColor: "cyan"
                }}
                checked={chosenColor === "cyan"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateColor}
                id="response-magenta"
                label="magenta"
                value="magenta"
                style={{
                    backgroundColor: "magenta"
                }}
                checked={chosenColor === "magenta"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateColor}
                id="response-white"
                label="white"
                value="white"
                style={{
                    backgroundColor: "white"
                }}
                checked={chosenColor === "white"}
            />
            <div>
                <span>
                    You have chosen
                    <span
                        data-testid="colored-box"
                        style={{
                            backgroundColor: chosenColor
                        }}
                    >
                        {chosenColor}
                    </span>
                    .
                </span>
            </div>
        </div>
    );
}
