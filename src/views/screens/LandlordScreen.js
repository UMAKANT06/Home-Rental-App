import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, Text, TextInput, Pressable, Image } from 'react-native';
import COLORS from '../../consts/colors';
import * as ImagePicker from 'expo-image-picker';

const LandlordScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />

      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={style.title}>List Your Property</Text>
        <Text style={style.textStyle}>Please fill in the details of your property.</Text>
      </View>

      <View style={style.inputContainer}>
        <TextInput style={style.input} placeholder="Property Name" />
        <TextInput style={style.input} placeholder="Location" />
        <TextInput style={style.input} placeholder="Number of Bedrooms" keyboardType="number-pad" />
        <TextInput style={style.input} placeholder="Number of Bathrooms" keyboardType="number-pad" />
        <TextInput style={style.input} placeholder="Rent Price" keyboardType="number-pad" />
        <TextInput style={style.input} placeholder="Additional Details" multiline />
        <Pressable onPress={selectImage}>
          <View style={style.input}>
            <Text>{image ? 'Image Selected' : 'Upload Photo'}</Text>
          </View>
        </Pressable>
        {image && <Image source={{ uri: image }} style={{ width: '100%', height: 200, resizeMode: 'cover', marginBottom: 20 }} />}
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 40 }}>
        <Pressable onPress={() => navigation.navigate('HomeScreen')}>
          <View style={style.btn}>
            <Text style={{ color: COLORS.white }}>Submit Property</Text>
          </View>
        </Pressable>
      </View>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  textStyle: {
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  input: {
    height: 60,
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 20,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: COLORS.dark,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LandlordScreen;
