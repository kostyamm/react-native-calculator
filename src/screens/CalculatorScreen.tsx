import { FC, useState } from 'react';
import { RootDrawerParamList } from '../../App';
import { ThemeText } from '../components/ThemeText';
import { ThemeButton } from '../components/ThemeButton';
import { ViewContainer } from '../components/ViewContainer';
import { StyleSheet, View } from 'react-native';
import { ButtonItem, BUTTONS, Operations } from '../constants';
import { DrawerScreenProps } from '@react-navigation/drawer';

export const CalculatorScreen: FC<DrawerScreenProps<RootDrawerParamList, 'Calculator'>> = () => {
    const [inputValue, setInputValue] = useState<number | null>(null);
    const [resultValue, setResultValue] = useState<number>(0);
    const [currentOperation, setCurrentOperation] = useState<Operations | null>(null);

    const calculateResult = () => {
        const value = inputValue || resultValue;

        const calculate = calculationMap[currentOperation];
        return calculate ? calculate(resultValue, inputValue) : value;
    };

    const updateStates = (result: number, operation: Operations | null) => {
        setResultValue(result);
        setInputValue(null);
        setCurrentOperation(operation);
    };

    const onPress = ({ value, operation }: Pick<ButtonItem, 'value' | 'operation'>) => {
        if (!isNaN(value)) {
            setInputValue((v) => Number(`${v || ''}${value}`));
            return;
        }

        const result = calculateResult();

        switch (operation) {
            case Operations.equal: {
                updateStates(result, null);
                break;
            }
            case Operations.plusMinus: {
                setInputValue(-(inputValue || resultValue));
                break;
            }
            case Operations.percent: {
                setInputValue((inputValue || resultValue) / 100);
                break;
            }
            case Operations.ac: {
                updateStates(0, null);
                break;
            }
            default: {
                updateStates(result, operation);
            }
        }
    };

    return (
        <ViewContainer style={styles.container}>
            <ThemeText
                style={styles.text}
                ellipsizeMode="tail"
                numberOfLines={1}
            >
                {inputValue || resultValue}
            </ThemeText>

            <View style={styles.buttonGroup}>
                {BUTTONS.map((button, index) => {
                    const { value, operation, ...restButton } = button;
                    const text = typeof value === 'undefined' ? operation : value;

                    return (
                        <View key={index}>
                            <ThemeButton
                                text={text}
                                onPress={() => onPress({ value, operation })}
                                {...restButton}
                            />
                        </View>
                    );
                })}
            </View>
        </ViewContainer>
    );
};

const calculationMap = {
    [Operations.minus]: (resultValue: number, inputValue: number) => resultValue - inputValue,
    [Operations.plus]: (resultValue: number, inputValue: number) => resultValue + inputValue,
    [Operations.division]: (resultValue: number, inputValue: number) => resultValue / inputValue,
    [Operations.multiply]: (resultValue: number, inputValue: number) => resultValue * inputValue,
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: 93,
        textAlign: 'right',
    },
    buttonGroup: {
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        rowGap: 14,
    },
});