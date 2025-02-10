import { StringCalculator } from "../src/StringCalculator";

describe('StringCalculator', () => {  

    const calculator = new StringCalculator();

    test("should return 0 for an empty string", ()=>{
        expect(calculator.add("")).toBe(0);
    })
})