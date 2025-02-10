import { StringCalculator } from "../src/StringCalculator";

describe('StringCalculator', () => {

    const calculator = new StringCalculator();

    test("should return 0 for an empty string", () => {
        expect(calculator.add("")).toBe(0);
    });

    test("should return the number for a single input", () => {
        expect(calculator.add("1")).toBe(1);
    });

    test("should return the sum for two numbers", () => {
        expect(calculator.add("1,2")).toBe(3);
    });

    test("should handle any number of numbers", () => {
        expect(calculator.add("1,2,3,4")).toBe(10);
    });

    test("should handle new lines as delimiters", () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    test("should throw an exception for negative numbers", () => {
        expect(() => calculator.add("1,-2,3,-4")).toThrow(
            "negative numbers not allowed: -2,-4"
        );
    });
})