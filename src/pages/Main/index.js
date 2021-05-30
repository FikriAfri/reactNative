import React, { Component } from 'react'
import { Platform, StyleSheet,Text, View,Image, TouchableOpacity,Linking } from 'react-native'
import HeaderMain from '../../components/atoms/HeaderMain'
import MainMenu from '../../components/molecules/MainMenu'
import TabNav from '../../components/molecules/TabNav'
import { NavigationContainer } from '@react-navigation/native';
import Router from '../../router'
const Main = ({navigation,route}) => {

  const {email} = route.params
  const {password} = route.params
  
    return (
      <View style={{flex:1}}>
     
      <View style= {{flex: 1, backgroundColor:'#FFF5F5'}}>
      <View style={{flexDirection:'row', marginHorizontal: 20, marginTop:30, backgroundColor:'#2B9EB2',borderRadius:10}}>
        <View style={{marginVertical:5}}>
        <Image style={{width:70, height: 87,marginLeft: 16, marginVertical:10}} source={require('../../../icon/puskesmas.png')}/>
        </View>
        <View style={{marginHorizontal: 15,marginTop:10}}>
        <Text style={{fontSize: 28, color: '#FFF5F5',marginTop: 4,fontWeight:'bold'}}>SELAMAT DATANG</Text>
        <Text style={{fontSize: 18, color: '#FFF5F5',marginTop: 4,fontWeight:'bold'}}>{email}</Text>
        </View>
      </View>
      <View style={{flex:1}}>
        <View style={{flexDirection:'row',flex:1, padding:30}}>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, marginRight:46, alignItems:'center', justifyContent:'center',borderRadius:20}} onPress={()=> navigation.navigate('Pendaftaran',{email})}>
            <Image style={{width:54, height:45}} source={require('../../../icon/Pendaftaran.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black' }}>Pendaftaran</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, alignItems:'center', justifyContent:'center',borderRadius:20}} onPress={()=> navigation.navigate('Antrian')}>
            <Image style={{width:54, height:45}} source={require('../../../icon/Antrian.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black'}}>Antrian</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',flex:1, padding:30}}>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, marginRight:46, alignItems:'center', justifyContent:'center',borderRadius:20}} onPress={()=> Linking.openURL('tel:${119}')}>
            <Image style={{width:54, height:45}} source={require('../../../icon/Darurat.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black' }}>Darurat</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, alignItems:'center', justifyContent:'center',borderRadius:20}} onPress={()=> navigation.navigate('Covid')}>
            <Image style={{width:54, height:45}} source={require('../../../icon/Covid.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black'}}>Covid-19</Text>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',flex:1, padding:30}}>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, marginRight:46, alignItems:'center', justifyContent:'center',borderRadius:20}} onPress={()=> navigation.navigate('InfoKesehatan')}>
            <Image style={{width:54, height:45}} source={require('../../../icon/info.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black' }}>Info Kesehatan</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#DFF5E3', flex:1, alignItems:'center', justifyContent:'center',borderRadius:20}} onPress={()=> navigation.navigate('InformasiPasien')}>
            <Image style={{width:54, height:45}} source={require('../../../icon/People.png')}/>
            <Text style={{fontSize:14, fontWeight:'bold', color:'black'}}>Informasi Pasien</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'center',justifyContent:'center',marginBottom:15,marginTop:15}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#ACA5A5'}}>PUSKESMAS LARAMPONG</Text>
      </View>
      </View>
      <View style={{height:54,flexDirection:'row',backgroundColor:'white' }}>
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
    )
  }

export default Main;



