export enum ButtonSize {
    Default = 'default',
    Large = 'large'
}

export enum ButtonVariant {
    Grey = 'grey',
    DarkGrey = 'dark_grey',
    Orange = 'orange'
}

export type ThemeButtonProps = {
    size?: ButtonSize;
    variant?: ButtonVariant;
    text: string | number;
    onPress?: () => void;
}
