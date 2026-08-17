import { RootStackParamList } from '@/navigation/AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen({ navigation }: Props) {
    return (
        <View>
            <Text>Tela Home</Text>
            
            <Button title="Ir para detalhes"
                    onPress={() => navigation.navigate('Details', { itemId: 42})}
                    />

            <Button title="Ir para perfil"
                    onPress={() => navigation.navigate('Profile', { userName: 'Matheus'})}
                    />
        </View>
    )
}