import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from 'react-native';

export default function DemoDetailsScreen() {
    const { itemId } = useLocalSearchParams<{ itemId: string }>();
    const router = useRouter();

    return (
        <View>
            <Text>Tela Detalhes</Text>
            <Text>Item recebido: {itemId}</Text>

            <Button title="Voltar" onPress={() => router.back()} />
            <Button title="Ir para home" onPress={() => router.push('/demo-navigation')} />
        </View>
    )
}
