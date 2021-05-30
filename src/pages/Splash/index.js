import React, {useEffect} from 'react';
import {View,Text,Image} from 'react-native';
//import Login from '../Login';

const Splash =({navigation}) =>{
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000);
    });
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Image style={{width:200, height: 249}} source={require('../../../icon/puskesmas.png')} />
            <Text style={{fontSize:24, fontWeight:'bold', color:"#095307"}}>PUSKESMAS LARAMPONG</Text>
        </View>
    );
};

export default Splash;