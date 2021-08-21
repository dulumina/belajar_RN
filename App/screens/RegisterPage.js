import React from 'react';
import {StyleSheet,View,Text, TextInput, TouchableOpacity}from 'react-native';

const RegPage = () =>{
  return (
    <View style={style.container} >
      <Text style={style.judul}>Formulir Pendaftaran</Text>
      <TextInput style={style.inputText} underlineColorAndroid={'transparent'} placeholder="Nama lengkap" />
      <TextInput style={style.inputText} underlineColorAndroid={'transparent'} placeholder="Alamat Email" />
      <TextInput style={style.inputText} underlineColorAndroid={'transparent'} placeholder="Password" />
      <TouchableOpacity style={style.btn}>
        <Text style={style.btnText}>
          Daftar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    justifyContent:"center",
    paddingHorizontal:60,
    // alignSelf:'stretch'
  },
  judul:{
    fontSize:24,
    color:'#ffffff',
    height:45,
    borderBottomWidth:1,
    borderBottomColor:'#dfe7f5',
    marginBottom:32
  },
  inputText:{
    color:'#ffffff',
    // borderBottomWidth:1,
    // borderBottomColor:'#dfe7f5'
  },
  btn:{
    marginTop:60,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#67cfc1'
  },
  btnText:{
    marginVertical:20,
    color:'#fff',
    fontWeight:'bold'
  }
})

export default RegPage;
