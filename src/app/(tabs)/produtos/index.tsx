import { InfoItem } from "@/components/info-item";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProdutosScreen() {
    return (
        <View> // Corresponde a uma div 
            <SafeAreaView>
                <ScrollView>
                    <Text>Mouse</Text>
                    <Text>Valor R$ 150,00</Text>
                    
                    <InfoItem label="Teclado" value="500" />
                    <InfoItem label="Pendrive" value="500" />
                    <InfoItem label="Fone" value="500" />
                    <InfoItem label="Armario" value="500" />
                    <InfoItem label="Webcam" value="500" />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}