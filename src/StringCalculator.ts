import { logger } from "./Logger";

export class StringCalculator{
    public add(numbers: string): number{
        logger.info(`Input numbers given: ${numbers}`)
        if(!numbers){
            return 0;
        }

        return 1;
    }
}

const calculator = new StringCalculator();

calculator.add('1,4,5')