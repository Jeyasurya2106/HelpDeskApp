import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert , Image , StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; 
import { useNavigation } from '@react-navigation/native'; 

const LoginPage = () => {
  const navigation = useNavigation(); // Get navigation object
  const [corporatename, setCorporatename] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Static list of corporate names for the dropdown
  const corporateNames = ['Corporate A', 'Corporate B', 'Corporate C'];

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      navigation.navigate('Home'); // Navigate to the Home page
    } else {
      Alert.alert('Invalid credentials', 'Please enter valid username and password');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Image
        source={require('../Images/logo.jpg')}
        style={styles.img}
      />
      <Text style={{ top: -80, color: '#0b17ba', fontWeight: 600, fontSize: 18 }}>Health Desk</Text>
      <Text style={{ fontSize: 22, fontWeight: 500, top: -65 }}>Corporate Login</Text>
      <Text style={{ top: -60, color: '#0b17ba', fontWeight: 400 }}>Hii Welcome Back !</Text>
      <View style={{top:-35,}}>
        <Text style={styles.label}>Corporate Name</Text>
        <AntDesign name="user" size={24} color="black" style={styles.corporateicon} />
        <Picker
          selectedValue={corporatename}
          onValueChange={(itemValue) => setCorporatename(itemValue)}
          style={{ width: 330 , borderWidth: 1, borderColor: 'gray',top:-20,left:10}}
        >
          {corporateNames.map((corporate, index) => (
            <Picker.Item key={index} label={corporate} value={corporate} />
          ))}
        </Picker>
        <Text style={{fontSize:16,top:-20}}>Username</Text>
        <AntDesign name="user" size={24} color="black" style={styles.usericon}/>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          style={{ borderWidth: 1, borderColor: 'gray', width: 330,top:-40,height:40,paddingLeft:40 }}
        />
        <Text style={{fontSize:16,top:-20}}>Password</Text>
        <EvilIcons name="lock" size={28} color="black" style={styles.passwordicon}/>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={{borderWidth: 1, borderColor: 'gray', width: 330,top:-35,height:40,paddingLeft:35 }}
        />
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20 ,height:50,width:300,left:18}}>
          <Text style={{ color: 'white',left:120,fontSize:18 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    top: -90,
    width: 150,
    height: 150
  },
  corporateicon:{
    top:18,
   
  },
  usericon:{
    width:30,
    height:40,
    backgroundColor:'#e8dfdf',
    paddingTop:10,
    paddingLeft:3
  },
  passwordicon:{
    width:30,
    height:40,
    backgroundColor:'#e8dfdf',
    paddingTop:6,
    paddingLeft:2,
    top:6
  },
  label:{
    fontSize:16
  },

})

export default LoginPage;
