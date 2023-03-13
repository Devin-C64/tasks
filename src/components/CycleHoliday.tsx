import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎆" | "🎃" | "🦃" | "☘️";

const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎄": "🎃",
    "🎃": "🎆",
    "🎆": "☘️",
    "☘️": "🦃",
    "🦃": "🎄"
};

const YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎄": "☘️",
    "☘️": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    function changeHolidayByAlphabet(): void {
        const newHoliday = ALPHABET_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayByYear(): void {
        const newHoliday = YEAR_TRANSITIONS[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>
                <Button onClick={changeHolidayByAlphabet}>
                    Advance by Alphabet
                </Button>
            </div>
            <div>
                <Button onClick={changeHolidayByYear}>Advance by Year</Button>
            </div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
        </div>
    );
}
