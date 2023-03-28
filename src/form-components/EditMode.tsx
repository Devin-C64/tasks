import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditing, setEdit] = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="editing-check"
                    label="Edit Mode"
                    checked={isEditing}
                    onChange={updateEditing}
                />
            </div>
            <div>
                <Form.Check
                    type="checkbox"
                    id="student-check"
                    label="Student"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            </div>
            <div>
                <Form.Group controlId="nameInput">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={updateName}
                        disabled={isEditing === false}
                    />
                </Form.Group>
            </div>
            <div>
                <h3>
                    {name} is {isStudent ? "" : "not"} a student
                </h3>
            </div>
        </div>
    );
}
