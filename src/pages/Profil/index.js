import React, {useEffect} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

const Profil =({navigation}) =>{
    return(
        <View style={{flex:1}}>
        <View style={{}}>
        <View style={{flexDirection:'row', paddingBottom:10}}>
            <TouchableOpacity style={{}} onPress={()=> navigation.navigate('Main')}>
            <Image style={{width:17, height:26, marginLeft:10, marginTop:15}} source={require('../../../icon/Back.png')} /> 
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginRight:25, marginTop:10}}>
            <Text style={{fontSize:24,fontWeight: 'bold',}}>Profil</Text>
            </View>
        </View>
        <View style={{height:145,backgroundColor:'#EEECEC',alignItems: 'center',justifyContent:'center'}}>
        <Image style={{width:95,height:95}} source={require('../../../icon/Foto.png')} />
        <Text style={{fontSize:16,fontWeight:'bold'}}>Nama Lengkap User</Text>
        </View>
        </View>
        <View style={{flex:1,paddingTop:20,paddingLeft:20}}>
            <Text style={{fontSize:16}}>Nama :</Text>
            <Text style={{fontSize:16}}>NIK :</Text>
            <Text style={{fontSize:16}}>Alamat :</Text>
            <Text style={{fontSize:16}}>Tanggal Lahir :</Text>
        </View>
        <View>
            <Image style={{width:432,height:160}} source={require('../../../icon/Background.png')} />
        </View>
        <View style={{height:54,flexDirection:'row'}}>
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
        </View>
    );
    
};

export default Profil;