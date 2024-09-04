import { SafeAreaView, StyleSheet } from 'react-native';
import { FC } from 'react';
import { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

export const ViewContainer: FC<ViewProps> = ({ children, style, ...restProps }) => {
    const containerStyle = {
        ...styles.container,
        ...(typeof style === 'object' && style)
    }

    return (
        <SafeAreaView style={containerStyle} {...restProps}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
    },
});
