import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import COLORS from '../../consts/colors';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.white}}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />

      <View style={{paddingHorizontal:20, paddingTop:20}}>
        <Text style={style.title}>Create Account</Text>
        <Text style={style.textStyle}>Please fill the input below here.</Text>
      </View>

      <View style={style.inputContainer}>
        <TextInput style={style.input} placeholder="Username" />
        <TextInput style={style.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={style.input} placeholder="Password" secureTextEntry />
        <TextInput style={style.input} placeholder="Confirm Password" secureTextEntry />
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text>Already have an account? 
          <Text 
            onPress={() => navigation.navigate('Login')} 
            style={{color: COLORS.dark, fontWeight: 'bold'}}>
            {' '}Login
          </Text>
        </Text>
      </View>

      <View style={{flex:1, justifyContent:'flex-end', paddingBottom:40}}>
        <Pressable onPress={()=> navigation.navigate('HomeScreen')}>
          <View style={style.btn}>
            <Text style={{color:COLORS.white}}>Register</Text>
          </View>
        </Pressable>
      </View>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title:{
    fontSize:32,
    fontWeight:'bold'
  },
  textStyle:{
    fontSize:14,
    color:COLORS.grey,
  },
  inputContainer:{
    paddingHorizontal:20,
    paddingTop:50,
  },
  input:{
    height:60,
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius:10,
    marginBottom:20,
    paddingLeft:20,
  },
  btn:{
    height:60,
    marginHorizontal:20,
    backgroundColor:COLORS.dark,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default RegisterScreen;
