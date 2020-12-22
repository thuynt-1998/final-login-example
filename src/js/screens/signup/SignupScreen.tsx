import React, { useCallback } from 'react';
import { Platform, StatusBar, View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Appbar } from 'react-native-paper';

import SignUpForm from './component/SignUpForm';
import { styles } from './SignupScreen.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = (props: { navigation: any }) => {
    const onBack = useCallback(() => props.navigation.push("login"), [])
    return (
        <LinearGradient
            colors={["rgb(19,97,140)", "rgb(42,20,73)"]}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}

        >
            <SafeAreaView style={{ flex: 1 }}>


                <StatusBar
                    backgroundColor="rgb(19,97,140)"
                ></StatusBar>
                <View style={{ flex: 1 }}>
                    <Appbar style={[styles.styleAppBar]}>
                        <Appbar.BackAction color="white" onPress={onBack}></Appbar.BackAction>
                        <Appbar.Content title="Sign Up" titleStyle={{ color: "white" }}></Appbar.Content>
                    </Appbar >

                    <SignUpForm></SignUpForm>

                </View>

            </SafeAreaView>
        </LinearGradient>

    );
}

export default SignupScreen;