import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen (){
    return (<>
        <Stack.Screen options={{title : "Oops not found"}}></Stack.Screen>
        <View style={styles.container}>
            <Link style={styles.button} href={'/'}>Go Back to home screen</Link>
        </View>
    </>)
} 
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#25292e',
        justifyContent : 'center',
        alignItems : 'center'
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff'
    }
})