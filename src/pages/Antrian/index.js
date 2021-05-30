import React, {useEffect} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

const Profil =({navigation}) =>{
    return(
        <View style={{flex:1}}>
        <View style={{}}>
        <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
            <TouchableOpacity style={{}} onPress={()=> navigation.navigate('Main')}>
            <Image style={{width:17, height:26, marginLeft:10, marginTop:15}} source={require('../../../icon/Back.png')} /> 
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginRight:25, marginTop:10}}>
            <Text style={{fontSize:24,fontWeight:'bold'}}>Antrian</Text>
            </View>
        </View>
        <View style={{flexDirection:'row',paddingTop:20}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image style={{width:51,height:44}} source={require('../../../icon/Duduk.png')}/>
        <Text style={{fontSize:16,color:'#2B9EB2'}}>Antrian Anda:</Text>
        <Text style={{fontSize:16,color:'#2B9EB2'}}>13</Text>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image style={{width:51,height:44}} source={require('../../../icon/Antri.png')}/>
        <Text style={{fontSize:16,color:'#2B9EB2'}}>Antrian Saat Ini:</Text>
        <Text style={{fontSize:16,color:'#2B9EB2'}}>05/20</Text>
        </View>
        </View>
        </View>
        <View style={{flex:1,margin:10}}>
        <View style={{backgroundColor:'#B5ECFF', borderRadius:20,flex:1,margin:50,paddingTop:20,paddingLeft:20}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Ruang  : Poli...</Text>
        <Text style={{fontSize:30, fontWeight:'bold', paddingTop:20}}>Waktu  : </Text>
        <Text style={{fontSize:30, fontWeight:'bold', paddingTop:20}}>Dokter : </Text>
        </View>
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