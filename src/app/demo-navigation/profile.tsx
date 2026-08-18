import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function DemoProfileScreen() {
    const { userName } = useLocalSearchParams<{ userName: string }>();
    const router = useRouter();

    return (
        <View>
            <Text>Perfil de {userName}</Text>
            <Button title="Voltar para home" onPress={() => router.dismissAll()} />
        </View>
    )
}
