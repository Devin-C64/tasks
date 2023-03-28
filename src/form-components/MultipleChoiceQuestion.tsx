import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [chosenOption, setOption] = useState<string>(options[0]);

    // This is the Control
    function updateOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setOption(event.target.value);
    }

    // This is the View
    return (
        <div>
            <div>
                <Form.Group controlId="favoriteColors">
                    <Form.Label>Pick one:</Form.Label>
                    <Form.Select value={chosenOption} onChange={updateOption}>
                        {options.map((chosenOption: string) => (
                            <option key={chosenOption} value={chosenOption}>
                                {chosenOption}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>{chosenOption === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
