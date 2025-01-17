import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string): void {
        if (!team.includes(newMember)) {
            const teamCopy = [...team];
            teamCopy.push(newMember);
            setTeam(teamCopy);
            const peopleCopy = [...allOptions];
            const index = peopleCopy.indexOf(newMember);
            peopleCopy.splice(index, 1);
            setAllOptions(peopleCopy);
        }
    }

    function clearTeam() {
        setAllOptions(PEOPLE);
        setTeam([]);
    }

    return (
        <div>
            <div>Choose Team</div>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => chooseMember(option)}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
