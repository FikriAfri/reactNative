import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Button, TextInput,Alert } from 'react-native';
import Firebase from '../../../android/app/src/config/Firebase'
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
const Register = ({ navigation }) => {
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [NIK,SetNIK] = useState()

    const AuthSign = async () => {
        const kirim = await Firebase.database().ref('user');
        const user = {
            email: email,
            NIK : NIK,
            password : password
        }
        kirim
        .push(user)
        .then((data) =>{
            Alert.alert('Berhasil membuat akun');
        })
        .catch((error) =>{
            console.log("Error :", error);
        })
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAV4o0cBmXlN4vrFNERadeCrgvc57l1krM", {
            method: "POST", headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
            })
        })
        const resData = await response.json()
        if (response.ok) {
            navigation.navigate('Login')
        } else {
            Alert.alert('Gagal Mendaftar', resData.error.message, [{
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
            <View style={{ paddingHorizontal: 41 }}>

            <Text style={{ fontSize: 12, color: "black", marginTop: 15 }}>Email</Text>
                <TextInput style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10 }} onChangeText={(text) => { SetEmail(text) }} />
                <Text style={{ fontSize: 12, color: "black", marginTop: 15 }}>NIK</Text>
                <TextInput style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10 }} onChangeText={(text) => { SetNIK(text) }} />
                <Text style={{ fontSize: 12, color: "black", marginTop: 15 }}>Password</Text>
                <TextInput style={{ borderWidth: 1, borderColor: 'black', borderRadius: 10 }} secureTextEntry onChangeText={(text) => { SetPassword(text) }} />

            </View>
            <ActionButton title="Daftar" onPress={AuthSign} />
        </View>
    );
};

export default Register;