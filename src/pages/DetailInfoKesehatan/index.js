import React, {useEffect} from 'react';
import {View,Text,Image,TouchableOpacity, ScrollView} from 'react-native';

const DetailInfoKesehatan =({navigation}) =>{
    return(
        <View style ={{flex:1}}>
        <ScrollView>
            <View style={{flexDirection:'row', paddingBottom:10}}>
            <TouchableOpacity style={{}} onPress={()=> navigation.navigate('Main')}>
            <Image style={{width:17, height:26, marginLeft:10, marginTop:15}} source={require('../../../icon/Back.png')} /> 
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginRight:25, marginTop:10}}>
            <Text style={{fontSize:24,fontWeight: 'bold',}}>Kiat-kiat Olahraga</Text>
            </View>
        </View>
        <View style ={{justifyContent:'center',alignItems:'center'}}>
            
        </View>
        </ScrollView>
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

export default DetailInfoKesehatan;