import React from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

const useNotification = () => {

    const init = () => {
        messaging().hasPermission().then((enable: any) => {
            if (enable) {
                console.log('Authorization status:', enable);
            }
            else {
                messaging().requestPermission().then((res: any) => {
                    console.log(" res permistion" + res);
                })
            }
        });
        PushNotification.popInitialNotification((res: any) => {
            console.log(res);
        })

        // messaging().setBackgroundMessageHandler(async remoteMessage => {
        //     console.log('Message handled in the background!', remoteMessage);
        // });
        // messaging().onMessage(async (message) => {
        //     // push data
        //     console.warn('PushManager: FCM: notification: ' + JSON.stringify(message.data));
        // });
        messaging().onNotificationOpenedApp(onNoti);

        PushNotification.configure({

            onRegister: function (token) {
                console.log("TOKEN ntification:", token);
            },
            onNotification: (notification) => { onNoti(notification); },
            onRegistrationError: function (err) {
                console.error(err.message, err);
            },
            onAction: function (notification: any) {
                console.log("ACTION:", notification.action);
                console.log("NOTIFICATION:", notification);

                // process the action
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },
            popInitialNotification: true,
            requestPermissions: true,

        });
    }
    const unregiter = () => {
        messaging().onMessage((message) => {
            // push data
            console.warn('PushManager: FCM: notification: ' + JSON.stringify(message.data));
        });
        PushNotification.unregister();
    }


    const sendMessage = () => {
        PushNotification.localNotification({
            title: "Hello thuy",
            message: "this is notification'thuy",
        });
    }
    const onNoti = (notification) => {
        console.log("NOTIFICATION:", notification);

    }

    return { init, sendMessage, unregiter }
}

export default useNotification;