import React from 'react';
import { Platform, StyleSheet,Text, View,Image, TouchableOpacity} from 'react-native';

const MainMenu = (props) => {
    return(
        <View style={{flex:1}}>
        <View style={{flexDirection:'row',flex:1, padding:30}}>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, marginRight:46, alignItems:'center', justifyContent:'center',borderRadius:20}}>
            <Image style={{width:54, height:45}} source={require('../../../../icon/Pendaftaran.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black' }}>Pendaftaran</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, alignItems:'center', justifyContent:'center',borderRadius:20}}>
            <Image style={{width:54, height:45}} source={require('../../../../icon/Antrian.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black'}}>Antrian</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',flex:1, padding:30}}>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, marginRight:46, alignItems:'center', justifyContent:'center',borderRadius:20}}>
            <Image style={{width:54, height:45}} source={require('../../../../icon/Darurat.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black' }}>Darurat</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, alignItems:'center', justifyContent:'center',borderRadius:20}}>
            <Image style={{width:54, height:45}} source={require('../../../../icon/Covid.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black'}}>Covid-19</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',flex:1, padding:30}}>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, marginRight:46, alignItems:'center', justifyContent:'center',borderRadius:20}}>
            <Image style={{width:54, height:45}} source={require('../../../../icon/info.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black' }}>Info Kesehatan</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, alignItems:'center', justifyContent:'center',borderRadius:20}}>
            <Image style={{width:54, height:45}} source={require('../../../../icon/People.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black'}}>Informasi Pasien</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}

export default MainMenu;