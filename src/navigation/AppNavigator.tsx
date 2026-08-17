import DetailsScreen from "@/screens/DetailsScreen";
import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home: undefined;
    Details: { itemId: number };
    Profile: { userName: string };
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'Inicio'}}
                />
                <Stack.Screen name="Details" 
                    component={DetailsScreen}
                    options={{ title: 'Detalhe'}}
                />    
                <Stack.Screen name="Profile"
                    component={ProfileScreen}
                    options={{ title: 'Perfil'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}