import { FC } from 'react';
import { FlatList } from 'react-native';
import { RootDrawerParamList } from '../../App';
import { ThemeText } from '../components/ThemeText';
import { ViewContainer } from '../components/ViewContainer';
import { DrawerScreenProps } from '@react-navigation/drawer';

export const HistoryScreen: FC<DrawerScreenProps<RootDrawerParamList, 'History'>> = () => {
    const data = [
        '1 + 2 = 3',
        '3 - 1 = 2',
        '2 * 2 = 4',
        '4 / 2 = 2'
    ]
    return (
        <ViewContainer>
            <FlatList
                data={data}
                renderItem={({ item }) => <ThemeText style={{ fontSize: 24, paddingLeft: 16 }}>{item}</ThemeText>}
            />
        </ViewContainer>
    );
};
