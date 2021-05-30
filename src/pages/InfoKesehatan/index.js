import React, {useEffect} from 'react';
import {View,Text,Image,TouchableOpacity, ScrollView} from 'react-native';

const InfoKesehatan =({navigation}) =>{
    return(
        <View style ={{flex:1}}>
        <ScrollView>
            <View style={{flexDirection:'row', paddingBottom:10}}>
            <TouchableOpacity style={{}} onPress={()=> navigation.navigate('Main')}>
            <Image style={{width:17, height:26, marginLeft:10, marginTop:15}} source={require('../../../icon/Back.png')} /> 
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginRight:25, marginTop:10}}>
            <Text style={{fontSize:24,fontWeight: 'bold',}}>Info Kesehatan</Text>
            </View>
        </View>
        <View style ={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style ={{flexDirection:'row',backgroundColor:'#E2E2E2',marginTop:10, justifyContent:'space-between',alignItems:'center',width:350,height:100,borderRadius:20}} onPress={()=> navigation.navigate('DetailInfoKesehatan')}>
            <Text style={{fontSize:18, paddingLeft:10}}>Kiat kiat olahraga</Text>
            <Image style={{width:163, height:116}} source={require('../../../icon/Olahraga.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style ={{flexDirection:'row',backgroundColor:'#E2E2E2',marginTop:10, justifyContent:'space-between',alignItems:'center',width:350,height:100,borderRadius:20}} onPress={()=> navigation.navigate('DetailInfoKesehatan')}>
            <Text style={{fontSize:18, paddingLeft:10}}>Kiat kiat olahraga</Text>
            <Image style={{width:163, height:116}} source={require('../../../icon/Olahraga.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style ={{flexDirection:'row',backgroundColor:'#E2E2E2',marginTop:10, justifyContent:'space-between',alignItems:'center',width:350,height:100,borderRadius:20}} onPress={()=> navigation.navigate('DetailInfoKesehatan')}>
            <Text style={{fontSize:18, paddingLeft:10}}>Kiat kiat olahraga</Text>
            <Image style={{width:163, height:116}} source={require('../../../icon/Olahraga.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style ={{flexDirection:'row',backgroundColor:'#E2E2E2',marginTop:10, justifyContent:'space-between',alignItems:'center',width:350,height:100,borderRadius:20}} onPress={()=> navigation.navigate('DetailInfoKesehatan')}>
            <Text style={{fontSize:18, paddingLeft:10}}>Kiat kiat olahraga</Text>
            <Image style={{width:163, height:116}} source={require('../../../icon/Olahraga.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style ={{flexDirection:'row',backgroundColor:'#E2E2E2',marginTop:10, justifyContent:'space-between',alignItems:'center',width:350,height:100,borderRadius:20}} onPress={()=> navigation.navigate('DetailInfoKesehatan')}>
            <Text style={{fontSize:18, paddingLeft:10}}>Kiat kiat olahraga</Text>
            <Image style={{width:163, height:116}} source={require('../../../icon/Olahraga.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style ={{flexDirection:'row',backgroundColor:'#E2E2E2',marginTop:10, justifyContent:'space-between',alignItems:'center',width:350,height:100,borderRadius:20}} onPress={()=> navigation.navigate('DetailInfoKesehatan')}>
            <Text style={{fontSize:18, paddingLeft:10}}>Kiat kiat olahraga</Text>
            <Image style={{width:163, height:116}} source={require('../../../icon/Olahraga.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style ={{flexDirection:'row',backgroundColor:'#E2E2E2',marginTop:10, justifyContent:'space-between',alignItems:'center',width:350,height:100,borderRadius:20}} onPress={()=> navigation.navigate('DetailInfoKesehatan')}>
            <Text style={{fontSize:18, paddingLeft:10}}>Kiat kiat olahraga</Text>
            <Image style={{width:163, height:116}} source={require('../../../icon/Olahraga.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style ={{flexDirection:'row',backgroundColor:'#E2E2E2',marginTop:10, justifyContent:'space-between',alignItems:'center',width:350,height:100,borderRadius:20}} onPress={()=> navigation.navigate('DetailInfoKesehatan')}>
            <Text style={{fontSize:18, paddingLeft:10}}>Kiat kiat olahraga</Text>
            <Image style={{width:163, height:116}} source={require('../../../icon/Olahraga.png')}/>
            </TouchableOpacity>
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

export default InfoKesehatan;