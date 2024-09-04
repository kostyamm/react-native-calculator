import { FC } from 'react';
import { FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { ThemeText } from '../components/ThemeText';
import { ViewContainer } from '../components/ViewContainer';

export const HistoryScreen: FC<StackScreenProps<RootStackParamList, 'History'>> = ({ route }) => {
    const { operationHistory } = route.params;

    return (
        <ViewContainer>
            <FlatList
                data={operationHistory}
                renderItem={({ item }) => <ThemeText>{item}</ThemeText>}
            />
        </ViewContainer>
    );
};
