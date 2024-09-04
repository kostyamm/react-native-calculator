import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { HistoryScreen } from './src/screens/HistoryScreen';

export type RootStackParamList = {
    Calculator: undefined;
    History: { operationHistory: Array<string> } | undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Calculator" component={CalculatorScreen} />
                <Stack.Screen name="History" component={HistoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
