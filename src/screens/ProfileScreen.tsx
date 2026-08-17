import { RootStackParamList } from "@/navigation/AppNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({route, navigation}: Props) {
    const { userName } = route.params;

    return (
        <View>
            <Text>Perfil de {userName}</Text>
            <Button title="Voltar para home" onPress={() => navigation.popToTop} />
        </View>
    )
}
