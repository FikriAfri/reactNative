import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Firebase from '../../../android/app/src/config/Firebase';

const Pendaftaran = ({ navigation, route }) => {
    const { email } = route.params
    const [jenis, setJenis] = useState()
    const [nomer, setNomer] = useState()
    const [dokter, setDokter] = useState()
    const senDaftar =  () => {
        const send =  Firebase.database().ref(jenis);
        const isi =  {
            dokter: dokter,
            nomer: nomer,
            jenis: jenis
        }
        send
            .push(isi)
            .then((data) => {
                Alert.alert('Berhasil mendaftar di Poli ');
            })
            .catch((error) => {
                console.log("Error :", error)
            })
    }

    const umum =() =>{
        setJenis(setJenis =>'UMUM')
        setNomer (setNomer => 2)
        setDokter ( setDokter => 'Ali')
        senDaftar();
    }

    const gigi =() =>{
        setJenis(jenis =>'GIGI')
        setNomer (nomer => 2)
        setDokter ( dokter => 'Ali')
        senDaftar();
    }

    const kia =() =>{
        setJenis(jenis =>'KIA')
        setNomer (nomer => 2)
        setDokter ( dokter => 'Ali')
        senDaftar();
    }

    const gizi =() =>{
        setJenis(jenis =>'GIZI')
        setNomer (nomer => 2)
        setDokter ( dokter => 'Ali')
        senDaftar();
    }

    const sanitasi =() =>{
        setJenis(jenis =>'SANITASI')
        setNomer (nomer => 2)
        setDokter ( dokter => 'Ali')
        senDaftar();
    }
    const lansia =() =>{
        setJenis(jenis =>'LANSIA')
        setNomer (nomer => 2)
        setDokter ( dokter => 'Ali')
        senDaftar();
    }
    const inap =() =>{
        setJenis(jenis =>'INAP')
        setNomer (nomer => 2)
        setDokter ( dokter => 'Ali')
        senDaftar();
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#B7B7B7' }}>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 30, borderRadius: 10 }}>
                <View style={{ marginVertical: 5 }}>
                    <Image style={{ width: 110, height: 130, marginLeft: 16, marginVertical: 10 }} source={require('../../../icon/puskesmas.png')} />
                </View>
                <View style={{ marginHorizontal: 10, marginTop: 30 }}>
                    <Text style={{ fontSize: 28, color: 'black', marginTop: 4, fontWeight: 'bold' }}>SELAMAT DATANG</Text>
                    <Text style={{ fontSize: 18, color: 'black', marginTop: 4, fontWeight: 'bold' }}>{email}</Text>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 30, borderTopLeftRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={{ width: 320, height: 50, backgroundColor: '#EAEDE9', marginBottom: 15, justifyContent: 'center', paddingLeft: 10, borderRadius: 10 }}
            onPress={umum}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18 }}>UMUM</Text>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{ width: 320, height: 50, backgroundColor: '#EAEDE9', marginBottom: 15, justifyContent: 'center', paddingLeft: 10, borderRadius: 10 }}
             onPress={gigi}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18 }}>POLI GIGI</Text>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{ width: 320, height: 50, backgroundColor: '#EAEDE9', marginBottom: 15, justifyContent: 'center', paddingLeft: 10, borderRadius: 10 }}
            onPress={kia}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18 }}>KIA</Text>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{ width: 320, height: 50, backgroundColor: '#EAEDE9', marginBottom: 15, justifyContent: 'center', paddingLeft: 10, borderRadius: 10 }}
            onPress={gizi}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18 }}>POLI GIZI</Text>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{ width: 320, height: 50, backgroundColor: '#EAEDE9', marginBottom: 15, justifyContent: 'center', paddingLeft: 10, borderRadius: 10 }}
            onPress={sanitasi}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18 }}>SANITASI</Text>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{ width: 320, height: 50, backgroundColor: '#EAEDE9', marginBottom: 15, justifyContent: 'center', paddingLeft: 10, borderRadius: 10 }}
            onPress={lansia}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18 }}>LANSIA</Text>

                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={{ width: 320, height: 50, backgroundColor: '#EAEDE9', marginBottom: 15, justifyContent: 'center', paddingLeft: 10, borderRadius: 10 }}
            onPress={inap}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18 }}>RAWAT INAP</Text>

                    </View>

                </TouchableOpacity>
            </View>

            <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Main')}>
                    <Image style={{ width: 26, height: 26 }} source={require('../../../icon/home.png')} />
                    <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Antrian')}>
                    <Image style={{ width: 26, height: 26 }} source={require('../../../icon/note.png')} />
                    <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Antrian</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('Profil')}>
                    <Image style={{ width: 26, height: 26 }} source={require('../../../icon/profil.png')} />
                    <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Profil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default Pendaftaran;