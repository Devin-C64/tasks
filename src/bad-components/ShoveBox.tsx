import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface boxShifter {
    setPosition: (newPosition: number) => void;
    position: number;
}

function ShoveBoxButton({ setPosition, position }: boxShifter): JSX.Element {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox({ position }: boxShifter): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <div>Shove Box</div>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox
                    position={position}
                    setPosition={setPosition}
                ></MoveableBox>
            </div>
        </div>
    );
}
