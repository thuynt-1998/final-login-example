import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import * as ImagePicker from "expo-image-picker";

import { styles } from '../SignupScreen.style';

const ButtonUpload = ({ onValue, name }: { onValue: (value: any) => void; name: string }) => {
    const pickImage = () => {
        // let result = await ImagePicker.launchImageLibraryAsync({
        //     mediaTypes: ImagePicker.MediaTypeOptions.All,
        //     allowsEditing: true,
        //     aspect: [4, 3],
        //     quality: 1,
        // });
        // if (!result.cancelled) {
        //     onValue(result.uri);
        // }
    };
    return (
        <TouchableOpacity style={styles.buttonUpload}>
            <MaterialIcons name="add-a-photo" size={18} color="black" />
        </TouchableOpacity>
    );
}

export default ButtonUpload;