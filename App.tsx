import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { HistoryScreen } from './src/screens/HistoryScreen';
import { theme } from './src/constants';

export type RootDrawerParamList = {
    Calculator: undefined;
    History: { operationHistory: Array<string> } | undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
    const screenOptions: DrawerNavigationOptions = {
        headerShown: false,
        headerTitle: '',
        headerTintColor: theme.colors.primary,
    }

    return (
        <NavigationContainer theme={theme}>
            <Drawer.Navigator screenOptions={screenOptions}>
                <Drawer.Screen name="Calculator" component={CalculatorScreen} />
                <Drawer.Screen name="History" component={HistoryScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
