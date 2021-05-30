import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button, TextInput, Alert } from 'react-native';

const ActionButton = ({ title, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={{
                alignItems: 'center',
                justifyContent: 'center'
            }} onPress={onPress}>
                <View>
                    <Text style={{
                        fontSize: 18,
                        color: "white",
                        marginTop: 15,
                        backgroundColor: "#C92CC3",
                        width: 90,
                        height: 30,
                        //padding :5,
                        borderRadius: 10,
                        paddingLeft: 20,
                        paddingVertical: 3
                    }}>{title}
                    </Text>

                </View>
            </TouchableOpacity>
        </View>
    );

};
const ActionButton2 = ({ title, onPress }) => {

    return (
        <View>
            <TouchableOpacity style={{
                alignItems: 'center',
                justifyContent: 'center'
            }} onPress={onPress}>
                <View>
                    <Text style={{
                        fontSize: 12,
                        color: "blue"
                    }}>{title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );

};

const Login = ({ navigation, props }) => {
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState()

    const AuthLogin = async () => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAV4o0cBmXlN4vrFNERadeCrgvc57l1krM',
            {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            })
        const resData = await response.json()
        if (response.ok) {
            navigation.navigate('Main',{email,password})
        } else {
            Alert.alert('An error Occured!', resData.error.message, [{
                text: 'Ok'
            }])
        }
    }

    const handleGoTO = (screen) => {
        navigation.navigate(screen);
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingTop: 30, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 222, height: 270 }} source={require('../../../icon/puskesmas.png')} />
                <Text style={{ marginVertical: 15, fontSize: 24, fontWeight: 'bold', color: "#095307" }}>PUSKESMAS LARAMPONG</Text>
            </View>
            <View style={{ paddingLeft: 41, paddingRight: 41 }}>
                <Text style={{ fontSize: 12, color: "black" }}>Selamat Datang</Text>
                <Text style={{ fontSize: 12, color: "black", marginTop: 10, paddingBottom: 5 }}>Email</Text>
                <TextInput style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10 }} onChangeText={(text) => { SetEmail(text) }} />
                <Text style={{ fontSize: 12, color: "black", marginTop: 10, paddingBottom: 5 }}>Password</Text>
                <TextInput style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10 }} secureTextEntry onChangeText={(text) => { SetPassword(text) }} />
            </View>
            <ActionButton title="Masuk" onPress={AuthLogin} />
            <View style={{ flexDirection: 'row', paddingTop: 30, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 12, color: "black" }}>Pengguna Baru? </Text>
                <ActionButton2 title="Daftar" onPress={() => handleGoTO('Register')} />
            </View>
        </View>
    );
};

export default Login;