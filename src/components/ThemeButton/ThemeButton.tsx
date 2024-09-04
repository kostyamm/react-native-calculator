import { FC } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { ThemeButtonProps, ButtonSize, ButtonVariant } from './ThemeButton.types';
import { ThemeText } from '../ThemeText';

export const ThemeButton: FC<ThemeButtonProps> = ({
    size = ButtonSize.Default,
    variant = ButtonVariant.DarkGrey,
    text,
    onPress
}) => {
    const styles = getButtonStyles(size, variant);

    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={onPress}>
            <ThemeText style={styles.text}>{text}</ThemeText>
        </TouchableOpacity>
    );
};

const getButtonStyles = (size: ButtonSize, variant: ButtonVariant) => {
    const backgroundColor = backgroundColorMap[variant];
    const textColor = textColorMap[variant]
    const buttonSize = sizeMap[size];

    const defaultButtonStyles = {
        borderRadius: 352,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...(size === ButtonSize.Large && {
            alignItems: 'flex-start',
            paddingLeft: 34
        })
    };

    return {
        button: {
            backgroundColor,
            ...defaultButtonStyles,
            ...buttonSize,
        },
        text: {
            color: textColor,
            fontSize: 44,
            fontWeight: '500'
        }
    } as { [key: string]: StyleProp<ViewStyle> };
};

const backgroundColorMap = {
    [ButtonVariant.DarkGrey]: '#333333',
    [ButtonVariant.Grey]: '#A5A5A5',
    [ButtonVariant.Orange]: '#F1A33B',
};

const textColorMap = {
    [ButtonVariant.DarkGrey]: '#ffffff',
    [ButtonVariant.Grey]: '#000000',
    [ButtonVariant.Orange]: '#ffffff',
};

const sizeMap = {
    [ButtonSize.Default]: {
        height: 88,
        width: 88,
    },
    [ButtonSize.Large]: {
        height: 88,
        width: 190,
    },
};