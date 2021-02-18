import React, { memo, useCallback, useEffect, useState } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { HelperText, RadioButton, Text } from 'react-native-paper';
import { format } from 'date-fns'

import { styles } from '../ProfileScreen.style';
import InputLogin from '../../login/components/InputLogin';
import { Controller } from 'react-hook-form';
interface PropsGlobal {
    errors: any;
    control: any
}

const ProfileComponent = (props: PropsGlobal) => {
    const { errors, control } = props;
    const [birthdayOpen, setOpen] = useState(false);
    const onValueDate = useCallback((value: any, onChange: Function) => {
        onChange(value);
        onClose()
    }, [])
    const onOpen = useCallback(() => { setOpen(true) }, [])
    const onClose = useCallback(() => { setOpen(false) }, [])
    return (

        <View style={[styles.flex1]}>
            <View style={styles.containerContentForm}>
                <View style={[styles.containerRow, styles.flex1]}>
                    <View style={styles.widthInput}>
                        <Controller
                            control={control}
                            name="firstname"
                            render={({ onChange, onBlur, value, name }) => (<InputLogin
                                label={name}
                                value={value}
                                onValue={onChange}
                                errors={errors.firstname}
                                title="First name"
                                left={() => null}
                                secureTextEntry={false}
                            />
                            )}
                        />

                    </View>
                    <View style={styles.widthInput}>
                        <Controller
                            control={control}
                            name="lastname"
                            render={({ onChange, onBlur, value, name }) => (<InputLogin
                                label={name}
                                value={value}
                                onValue={onChange}
                                errors={errors.lastname}
                                title="Last name"
                                left={() => null}
                                secureTextEntry={false}
                            />
                            )}
                        />

                    </View>


                </View>
                <Controller
                    control={control}
                    name="username"
                    render={({ onChange, value, name }) => (<InputLogin
                        label={name}
                        value={value}
                        onValue={onChange}
                        errors={errors.username}
                        title="Email"
                        left={() => (
                            <Fontisto name="email" size={20} color="rgb(179,189,197)" />
                        )}
                        secureTextEntry={false}
                    />
                    )}
                />



                <Controller
                    control={control}
                    name="birthday"
                    render={({ onChange, value }) => {
                        console.log(value);

                        return (<View style={styles.containerRadio}>
                            <TouchableOpacity onPress={onOpen} style={[styles.flex2, styles.containerDatePinker]}>

                                <FontAwesome name="calendar" size={20} color="rgb(179,189,197)" style={{ marginLeft: 15 }} />
                                <Text style={[styles.flex1, styles.colorWhite, styles.textDate]}>
                                    {value ? format(value, "dd-MM-yyyy") : "Select date"}
                                </Text>
                            </TouchableOpacity>

                            <DateTimePickerModal
                                isVisible={birthdayOpen}
                                mode="date"
                                onConfirm={(value) => onValueDate(value, onChange)}
                                onCancel={onClose}
                                date={value ? value : new Date()}
                                maximumDate={new Date()}
                            />
                        </View>)
                    }}
                />
                <Controller
                    control={control}
                    name="sex"
                    render={({ onChange, value }) => (
                        <RadioButton.Group onValueChange={onChange} value={value}  >
                            <View style={styles.containerRadio}>
                                <View style={[styles.flex1, styles.styleMale]}>
                                    {value === "male" ?
                                        <Fontisto name="male" size={20} color="rgb(179,189,197)" />
                                        : <Fontisto name="female" size={20} color="rgb(179,189,197)" />}
                                </View>
                                <View style={styles.radioStyle}>
                                    <Text style={styles.colorWhite}>Male</Text>
                                    <View style={styles.styleCustom}>
                                        {
                                            value === "female" && Platform.OS === "ios" &&
                                            <FontAwesome5 name="circle" size={20} color="rgb(179,189,197)" style={[styles.styleCustomItem, styles.styleCustomItem2]} />
                                        }
                                        <RadioButton value="male" color="rgb(179,189,197)" />

                                    </View>
                                </View>
                                <View style={styles.radioStyle}>
                                    <View style={styles.styleCustom}>
                                        {
                                            value === "male" && Platform.OS === "ios" &&
                                            <FontAwesome5 name="circle" size={20} color="rgb(179,189,197)" style={[styles.styleCustomItem, styles.styleCustomItem2]} />
                                        }
                                        <RadioButton value="female" color="rgb(179,189,197)" />
                                    </View>
                                    <Text style={styles.colorWhite}>Female</Text>
                                </View>
                            </View>
                        </RadioButton.Group>

                    )}
                />

                {errors.sex && <HelperText style={[styles.colorWhite, styles.textAlign]} type="error">{errors.sex.message}</HelperText>}


            </View>





        </View >
    );
}

export default memo(ProfileComponent);