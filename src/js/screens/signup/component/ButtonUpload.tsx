import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';

import { styles } from '../SignupScreen.style';

const ButtonUpload = ({ onValue, name }: { onValue: (value: any) => void; name: string }) => {
    const pickImage = () => {
        let options = {
            mediaType: "photo",
            quality: 1,
            includeBase64: true,

        };
        launchImageLibrary(options, (res) => {
            console.log(res);
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

export default ButtonUpload;