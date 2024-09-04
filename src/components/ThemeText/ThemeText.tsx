import { FC } from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

export const ThemeText: FC<TextProps> = ({ children, style, ...restProps }) => {
    const textStyle = {
        ...styles.text,
        ...(typeof style === 'object' && style)
    }

    return <Text style={textStyle} {...restProps}>{children}</Text>;
};
const styles = StyleSheet.create({
    text: {
        color: '#ffffff'
    }
})
