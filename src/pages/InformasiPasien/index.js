import React, {useEffect} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

const InformasiPasien =({navigation}) =>{
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row', paddingBottom:10}}>
            <TouchableOpacity style={{}} onPress={()=> navigation.navigate('Main')}>
            <Image style={{width:17, height:26, marginLeft:10, marginTop:15}} source={require('../../../icon/Back.png')} /> 
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginRight:25, marginTop:10}}>
            <Text style={{fontSize:24,fontWeight: 'bold',}}>Informasi Pasien</Text>
            </View>
            </View>
            <View style={{flex:1}}>
            <View>
            <View>
                <Text style={{fontSize:20, fontWeight:'bold', paddingLeft:30, paddingTop:30}}>Nama Lengkap Pasien</Text>
                <Text style={{fontSize:16, paddingLeft:30,paddingVertical:10}}>350919xxxxxxxxx</Text>
            </View>
            </View>
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:'#E9E7E7',width:380,height:90, marginBottom:20,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:15}}>Riwayat Penyakit</Text>   
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#E9E7E7',width:380,height:90, marginBottom:20,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:15}}>Diagnosa</Text>   
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:'#E9E7E7',width:380,height:90, marginBottom:20,justifyContent:'center'}}>
                 <Text style={{fontSize:20,fontWeight:'bold',paddingLeft:15}}>Resep Obat</Text>   
                </TouchableOpacity>

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

export default InformasiPasien;