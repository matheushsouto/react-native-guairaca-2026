import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function DemoHomeScreen() {
    const router = useRouter();

    return (
        <View>
            <Text>Tela Home</Text>

            <Button title="Ir para detalhes"
                    onPress={() => router.push({ pathname: '/demo-navigation/details', params: { itemId: '42' } })}
                    />

            <Button title="Ir para perfil"
                    onPress={() => router.push({ pathname: '/demo-navigation/profile', params: { userName: 'Matheus' } })}
                    />
        </View>
    )
}
