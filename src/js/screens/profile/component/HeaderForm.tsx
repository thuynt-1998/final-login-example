import React, { useCallback, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import storage from '@react-native-firebase/storage';

import ProfileServices from '../../../sevices/api/ProfileServices';
import { styles } from '../ProfileScreen.style';
import ButtonUpload from './ButtonUpload';

const HeaderForm = () => {
    const user = useSelector((state: any) => {
        return state.task.user
    })
    const [image, setImage] = useState("https://baya.vn/media/wysiwyg/bst-normandy.jpg");
    const [avatar, setAvatar] = useState("https://baya.vn/media/wysiwyg/phong-khach-baya-122020.png");
    const onImage = useCallback((value) => {
        ProfileServices.updateInfo({ image: value }).then((res) => {
            loadImage(value, setImage)
        })

    }, [])
    const onAvatar = useCallback((value) => {
        ProfileServices.updateInfo({ avatar: value }).then((res) => {
            loadImage(value, setAvatar)
        })
    }, [])
    const loadImage = useCallback((value, onValue) => {
        return storage()
            .ref(value)
            .getDownloadURL().then(res => {
                onValue(res)
            }, error => { console.log("error" + error) })

    }, [])
    useEffect(() => {
        user && loadImage(user.image, setImage);
        user && loadImage(user.avatar, setAvatar);
    })

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