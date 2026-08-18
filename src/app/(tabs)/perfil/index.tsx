import { InfoItem } from "@/components/info-item";
import { PersonalPresentation } from "@/components/personal-presentation";
import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PerfilScreen() {
  return (
    <View>
      {/* Corresponde a uma div */}
      <SafeAreaView>
        {/* Respeita área segura do dispositivo */}

        <Link href='/demo-navigation'>Oi</Link>

        <PersonalPresentation name="Matheus" role="dev" location="Gpva" />
        <PersonalPresentation name="Guilherme" role="dev" location="Sla" />
      </SafeAreaView>
    </View>
  );
}