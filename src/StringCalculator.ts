export class NegativeNumberError extends Error {
    constructor(numbers: number[]) {
        super(`negative numbers not allowed: ${numbers.join(',')}`);
        this.name = 'NegativeNumberError';
    }
}

export class StringCalculator {
    public add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        const { delimiter, numbersStr } = this.parseInput(numbers);
        const nums = this.parseNumbers(numbersStr, delimiter);
        this.validateNumbers(nums);

        return nums.reduce((sum, num) => sum + num, 0);
    }

    private parseInput(input: string): { delimiter: string; numbersStr: string } {
        let delimiter = ',';
        let numbersStr = input;

        if (input.startsWith('//')) {
            const delimiterIndex = input.indexOf('\n');
            delimiter = input.substring(2, delimiterIndex);
            numbersStr = input.substring(delimiterIndex + 1);
        }

        return { delimiter, numbersStr };
    }

    private parseNumbers(numbersStr: string, delimiter: string): number[] {
        const normalizedStr = numbersStr.replace(/\n/g, delimiter);
        return normalizedStr
            .split(delimiter)
            .filter(num => num !== '')
            .map(num => parseInt(num, 10));
    }

    private validateNumbers(numbers: number[]): void {
        const negativeNumbers = numbers.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new NegativeNumberError(negativeNumbers);
        }
    }
}