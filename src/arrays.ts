/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        const doubleNumber = [...numbers, ...numbers];
        return doubleNumber;
    } else {
        const array = [...numbers];
        array.splice(1, array.length - 2);
        return array;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((num: string): number => parseInt(num));
    const realInts = integers.map((int: number): number =>
        !Number.isNaN(int) ? int : 0
    );
    return realInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollars = amounts.map((amount: string): string =>
        amount.startsWith("$") ? amount.replace("$", "") : amount
    );
    const integers = stringsToIntegers(noDollars);
    return integers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter(
        (message: string): boolean => !message.endsWith("?")
    );
    const shout = noQuestions.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    const sum = shortWords.reduce(
        (currentTotal: number) => currentTotal + 1,
        0
    );
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const noRGB = colors.filter(
            (color: string): boolean =>
                color !== "red" && color !== "blue" && color !== "green"
        );
        if (noRGB.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const add = addends.reduce(
        (currentString: string, num: number) =>
            currentString + num.toString() + "+",
        ""
    );

    if (sum !== 0) {
        return sum.toString() + "=" + add.slice(0, -1);
    } else {
        return "0=0";
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const array = [...values];
    const final = [...values];
    if (array.some((value: number): boolean => value < 0) === false) {
        const add = array.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        final.splice(array.length, 0, add);
        return final;
    } else {
        const negIndex = values.findIndex((value) => value < 0);
        const positives = array.slice(0, negIndex);
        const add = positives.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        final.splice(negIndex + 1, 0, add);
        return final;
    }
}
