import React, { memo, useCallback, useEffect, useState } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { HelperText, RadioButton, Text } from 'react-native-paper';
import { format } from 'date-fns'

import { styles } from '../SignupScreen.style';
import InputLogin from '../../login/components/InputLogin';
interface PropsGlobal {
    register: any;
    setValue: (name: string, value: string) => any;
    errors: any;
    getValues: (value: any | undefined | null) => any;
    setError: (data: string, value: any) => any;
    clearErrors: (data: string) => any;
}

const SignupComponent = (props: PropsGlobal) => {
    const { register, setValue, errors, getValues, setError, clearErrors } = props;
    const [radio, setRadio] = useState(false);
    const [birthdayOpen, setOpen] = useState(false);
    useEffect(() => {
        register("username");
        register("password");
        register("passwordAgain");
        register("firstname")
        register("lastname");
        register("sex");
        register("birthday")

    }, [register]);
    useEffect(() => { setRadio(!radio); setValue("sex", "male") }, [])
    const onValue = useCallback((name: string, value: string) => {

        setValue(name, value)

    }, []);
    const onValueConfirmPassword = useCallback((name: string, value: string) => {
        if (value !== getValues("password")) {
            setError("passwordAgain", { type: "manual", message: "not equal" });
        }
        else { clearErrors("passwordAgain"); setValue("passwordAgain", value) }
    }, [])
    const onValueRadio = useCallback((value: string) => { setRadio(!radio); setValue("sex", value) }, [radio])
    const onValueDate = useCallback((value: any) => {
        setValue("birthday", format(value, "yyyy-MM-dd"));
        onClose()
    }, [])

    const onOpen = useCallback(() => { setOpen(true) }, [])
    const onClose = useCallback(() => { setOpen(false) }, [])
    const onDate = () => {
        if (getValues("birthday")) {
            return new Date(getValues("birthday"))
        }
        return (new Date())
    }

    return (

        <View style={[styles.flex1]}>
            <View style={styles.containerContentForm}>
                <View style={[styles.containerRow, styles.flex1]}>
                    <View style={styles.widthInput}>
                        <InputLogin
                            label="firstname"
                            onValue={onValue}
                            errors={errors.firstname}
                            title="First name"
                            left={() => null}
                            secureTextEntry={false}
                        />
                    </View>
                    <View style={styles.widthInput}>
                        <InputLogin
                            label="lastname"
                            onValue={onValue}
                            errors={errors.lastname}
                            title="Last name"
                            left={() => null}
                            secureTextEntry={false}
                        />
                    </View>


                </View>
                <InputLogin
                    label="username"
                    onValue={onValue}
                    errors={errors.username}
                    title="Email"
                    left={() => (
                        <Fontisto name="email" size={20} color="rgb(179,189,197)" />
                    )}
                    secureTextEntry={false}
                />
                <InputLogin
                    label="password"
                    onValue={onValue}
                    errors={errors.password}
                    title="Password"
                    left={() => {
                        return (
                            <MaterialCommunityIcons
                                name="shield-lock-outline"
                                size={20}
                                color="rgb(179,189,197)"
                            />
                        );
                    }}
                    secureTextEntry={true}
                />
                <InputLogin
                    label="passwordAgain"
                    onValue={onValueConfirmPassword}
                    errors={errors.passwordAgain}
                    title="Confirm Password"
                    left={() => {
                        return (
                            <MaterialCommunityIcons
                                name="shield-lock-outline"
                                size={20}
                                color="rgb(179,189,197)"
                            />
                        );
                    }}
                    secureTextEntry={true}
                />

                <View style={styles.containerRadio}>
                    <TouchableOpacity onPress={onOpen} style={[styles.flex2, styles.containerDatePinker]}>

                        <FontAwesome name="calendar" size={20} color="rgb(179,189,197)" style={{ marginLeft: 15 }} />
                        <Text style={[styles.flex1, styles.colorWhite, styles.textDate]}>
                            {getValues("birthday") ? format(new Date(getValues("birthday")), "dd-MM-yyyy") : "Select date"}
                        </Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={birthdayOpen}
                        mode="date"
                        onConfirm={onValueDate}
                        onCancel={onClose}
                        date={onDate()}
                        maximumDate={new Date()}
                    />


                </View>
                <RadioButton.Group onValueChange={onValueRadio} value={getValues("sex")}  >
                    <View style={styles.containerRadio}>
                        <View style={[styles.flex1, styles.styleMale]}>
                            {getValues("sex") === "male" ?
                                <Fontisto name="male" size={20} color="rgb(179,189,197)" />
                                : <Fontisto name="female" size={20} color="rgb(179,189,197)" />}
                        </View>
                        <View style={styles.radioStyle}>
                            <Text style={styles.colorWhite}>Male</Text>
                            <View style={styles.styleCustom}>
                                {
                                    getValues("sex") === "female" && Platform.OS === "ios" &&
                                    <FontAwesome5 name="circle" size={20} color="rgb(179,189,197)" style={[styles.styleCustomItem, styles.styleCustomItem2]} />
                                }
                                <RadioButton value="male" color="rgb(179,189,197)" />

                            </View>
                        </View>
                        <View style={styles.radioStyle}>
                            <View style={styles.styleCustom}>
                                {
                                    getValues("sex") === "male" && Platform.OS === "ios" &&
                                    <FontAwesome5 name="circle" size={20} color="rgb(179,189,197)" style={[styles.styleCustomItem, styles.styleCustomItem2]} />
                                }
                                <RadioButton value="female" color="rgb(179,189,197)" />
                            </View>
                            <Text style={styles.colorWhite}>Female</Text>
                        </View>
                    </View>
                </RadioButton.Group>
                {errors.sex && <HelperText style={[styles.colorWhite, styles.textAlign]} type="error">{errors.sex.message}</HelperText>}


            </View>





        </View >
    );
}

export default memo(SignupComponent);