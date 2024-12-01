import { Platform, Pressable, StyleSheet, Text } from "react-native"
interface Props {
    label: string
    onLongPress?: () => void
    onPress?: () => void
}
export const PrimaryButton = ({ onPress, onLongPress, label }: Props) => {

    return (
        <Pressable
            onPress={() => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed
            ]}
        >
            <Text style={{ color: Platform.OS === 'android' ? 'white' : '#4746AB' }}>
                {label}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 5
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white'
    }
})
