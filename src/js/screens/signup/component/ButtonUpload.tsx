import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';

// import { styles } from '../SignupScreen.style';

const ButtonUpload = ({ onValue, name }: { onValue: (value: any) => void; name: string }) => {
    const pickImage = () => {
        let options = {
            mediaType: "photo",
            quality: 1,
            includeBase64: true,
        };
        launchImageLibrary(options, (res: any) => {
            if (!res.didCancel) {
                onValue(res.uri);
            }
        })

    };
    return (
        <TouchableOpacity style={styles.buttonUpload} onPress={pickImage}>
            <MaterialIcons name="add-a-photo" size={18} color="black" />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonUpload: {
        position: "absolute",
        height: 25,
        width: 25,
        bottom: "5%",
        right: "5%",
        borderRadius: 50,
        backgroundColor: "rgb(235,225,225)",
        justifyContent: "center",
        alignItems: "center",
    },
})

export default ButtonUpload;