import React from 'react';
import { Platform, StyleSheet,Text, View,Image, TouchableOpacity} from 'react-native';

const TabNav = ({navigation}) => {
    return(
        <View style={{height:54,flexDirection:'row' }}>
        <TouchableOpacity style={{flex:1,alignItems: 'center',justifyContent:'center'}} onPress={()=> navigation.navigate('Main')}>
            <Image style={{width:26, height: 26}} source={require('../../../icon/home.png')}/>
          <Text style={{fontSize: 10, color: '#545454',marginTop: 4}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,alignItems: 'center',justifyContent:'center'}} onPress={()=> navigation.navigate('Antrian')}>
            <Image style={{width:26, height: 26}} source={require('../../../icon/note.png')} />
          <Text style={{fontSize: 10, color: '#545454',marginTop: 4}}>Antrian</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,alignItems: 'center',justifyContent:'center'}} onPress={()=> navigation.navigate('Profil')}>
            <Image style={{width:26, height: 26}} source={require('../../../icon/profil.png')}/>
          <Text style={{fontSize: 10, color: '#545454',marginTop: 4}}>Profil</Text>
        </TouchableOpacity>
      </View>
    )
}

export default TabNav;