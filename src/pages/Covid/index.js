import React, {useEffect} from 'react';
import {View,Text,Image,TouchableOpacity, ScrollView} from 'react-native';

const Covid =({navigation}) =>{
    return(
        <View style={{flex:1}}>
        <View style={{flexDirection:'row', paddingBottom:10}}>
            <TouchableOpacity style={{}} onPress={()=> navigation.navigate('Main')}>
            <Image style={{width:17, height:26, marginLeft:10, marginTop:15}} source={require('../../../icon/Back.png')} /> 
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginRight:25, marginTop:10}}>
            <Text style={{fontSize:24,fontWeight: 'bold',}}>Covid-19</Text>
            </View>
        </View>
        <View style={{backgroundColor:'#5AD246',alignItems:'center',justifyContent:'center',height:25}}>
            <Text style={{color:'white', fontSize:14}}>Antrian anda 13 || Antrian saat ini 05/20</Text>
            
        </View>
        <ScrollView>
        <View>
        <Image style={{width:434,height:719}} source={require('../../../icon/infoCovid.png')} />
        </View>
        </ScrollView>
        </View>
    );
    
};

export default Covid;