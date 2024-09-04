import { ButtonSize, ButtonVariant } from '../components/ThemeButton';

export enum Operations {
    ac = 'AC',
    plusMinus = '+/-',
    percent = '%',
    division = '÷',
    multiply = '×',
    minus = '-',
    plus = '+',
    comma = ',',
    equal = '=',
}

export type ButtonItem = {
    operation?: Operations,
    value?: number,
    variant?: ButtonVariant,
    size?: ButtonSize,
}
export type ButtonsType = Array<ButtonItem>
export const BUTTONS: ButtonsType = [
    { operation: Operations.ac, variant: ButtonVariant.Grey },
    { operation: Operations.plusMinus, variant: ButtonVariant.Grey },
    { operation: Operations.percent, variant: ButtonVariant.Grey },
    { operation: Operations.division, variant: ButtonVariant.Orange },

    { value: 7 },
    { value: 8 },
    { value: 9 },
    { operation: Operations.multiply, variant: ButtonVariant.Orange },

    { value: 4 },
    { value: 5 },
    { value: 6 },
    { operation: Operations.minus, variant: ButtonVariant.Orange },

    { value: 1 },
    { value: 2 },
    { value: 3 },
    { operation: Operations.plus, variant: ButtonVariant.Orange },

    { value: 0, size: ButtonSize.Large },
    { operation: Operations.comma },
    { operation: Operations.equal, variant: ButtonVariant.Orange },
];