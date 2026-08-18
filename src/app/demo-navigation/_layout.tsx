import { Stack } from "expo-router";

export default function DemoNavigationLayout() {
    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{ title: 'Inicio' }} />
            <Stack.Screen name="details" options={{ title: 'Detalhe' }} />
            <Stack.Screen name="profile" options={{ title: 'Perfil' }} />
        </Stack>
    );
}
