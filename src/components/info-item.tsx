import { Text, View } from "react-native";

type InfoItemProps = {
    label: string;
    value: string;
};

export function InfoItem({label, value} : InfoItemProps) {
    return (
        <View>
            <Text>{ label }</Text>
            <Text>R$ { value }</Text>
        </View>
    )
}
