import { RootStackParamList } from '@/navigation/AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen({ route, navigation }: Props) {
    const { itemId } = route.params;

    return (
        <View>
            <Text>Tela Detalhes</Text>
            <Text>Item recebido: {itemId}</Text>

            <Button title="Voltar" onPress={() => navigation.goBack()} />
            <Button title="Ir para home" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}