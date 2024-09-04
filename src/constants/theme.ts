import { DarkTheme, Theme } from '@react-navigation/native';

export const theme: Theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: '#000000',
        card: '#000000',
        border: '#000000',
        primary: '#F1A33B'
    }
}