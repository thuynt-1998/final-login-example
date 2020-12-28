import React, { useCallback, useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import { styles } from '../SignupScreen.style';
import ButtonUpload from './ButtonUpload';

const HeaderForm = () => {
    const [image, setImage] = useState("https://baya.vn/media/wysiwyg/bst-normandy.jpg");
    const [avatar, setAvatar] = useState("https://baya.vn/media/wysiwyg/phong-khach-baya-122020.png");
    const onImage = useCallback((value) => { setImage(value) }, [])
    const onAvatar = useCallback((value) => { setAvatar(value) }, [])
    return (
        <View style={[styles.containerImageBackground, styles.height200]}>
            <View style={styles.height200}>
                <Image source={{ uri: image }} style={[styles.height200, styles.flex1]}></Image>
            </View>
            <View style={styles.containerAvatar}>

                <Image source={{ uri: avatar }} style={styles.avatarStyle}></Image>

                <ButtonUpload name="avatar" onValue={onAvatar} />
            </View>
            <ButtonUpload name="image" onValue={onImage} />
        </View >
    );
}

export default HeaderForm;