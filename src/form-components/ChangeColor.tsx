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
                background-color="red"
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
                background-color="blue"
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
                background-color="green"
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
                background-color="orange"
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
                background-color="purple"
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
                background-color="yellow"
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
                background-color="cyan"
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
                background-color="magenta"
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
                background-color="white"
                checked={chosenColor === "white"}
            />
            <span>
                <p>You have chosen </p>
                <div background-color={chosenColor}>{chosenColor}</div>
                <p>You have chosen </p>
            </span>
        </div>
    );
}
