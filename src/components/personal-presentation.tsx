import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

interface PersonalPresentationProps {
    name: string;
    role: string;
    location: string
}

export function PersonalPresentation({name, role, location}: PersonalPresentationProps) {
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: ''}}
                style={styles.avatar}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.description}>
                Desenvolvedor apaixonado por tecnologia e solucoes
                web e mobile e dinheiro. 
            </Text>
            <View style={styles.tags}>
                <Text style={styles.tag}>React Native</Text>
                <Text style={styles.tag}>Angular</Text>
                <Text style={styles.tag}>Flutter</Text>
                <Text style={styles.tag}>PHP</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Entrar em contato
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
    },

    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        marginBottom: 16,
    },

    name: {
        fontSize: 26,
        fontWeight: '700',
        color: '#111827'
    },

    role: {
        marginTop: 6,
        fontSize: 16,
        color: '#4F46E5',
    },

    location: {
        marginTop: 8,
        fontSize: 14,
        color: '#6B7280',
    },

    description: {
        marginTop: 20,
        fontSize: 15,
        lineHeight: 23,
        textAlign: 'center',
        color: '#4B5563',
    },

    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
        marginTop: 20,
    },

    tag: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: '#EEF2FF',
        color: '#4F46E5',
        fontWeight: '600',
    },

    button: {
        width: '100%',
        marginTop: 24,
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: '#4F46E5',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '700',   
    }
});
