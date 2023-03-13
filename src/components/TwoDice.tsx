import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    let num1 = d6();
    let num2 = d6();
    while (num1 === num2) {
        num1 = d6();
        num2 = d6();
    }
    const [leftNum, setLeft] = useState<number>(num1);
    const [rightNum, setRight] = useState<number>(num2);

    function determineWin(number1: number, number2: number): string {
        if (number1 === 1 && number2 === 1) {
            return "Lose";
        } else if (number1 === number2) {
            return "Win";
        }
        return "";
    }

    return (
        <div>
            <div>
                Left Die: <span data-testid="left die">{leftNum}</span>
                <Button onClick={() => setLeft(d6())}>Roll Left</Button>
            </div>
            <div>
                Right Die: <span data-testid="right die">{rightNum}</span>
                <Button onClick={() => setRight(d6())}>Roll Right</Button>
            </div>
            <div>
                {leftNum === 1 && rightNum === 1 ? (
                    <span>Lose</span>
                ) : (
                    <span>{determineWin(leftNum, rightNum)}</span>
                )}
            </div>
        </div>
    );
}
