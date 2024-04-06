import React from 'react';
import { View, Text, TouchableOpacity , Image , StyleSheet, FlatList} from 'react-native';
import Homepagedata from './Data';
import { FontAwesome6 , AntDesign , Foundation ,  FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { Octicons } from '@expo/vector-icons';


const HomePage = ({ username }) => {

  const navigation = useNavigation(); 

  return (
    <View style={{ flex: 1, backgroundColor:'white' }}>
      <Image
      source={require('../Images/homepagetop.jpg')}
      style={styles.topimg}
      />
      <Text style={styles.welcome}>Hii {username}</Text>
      <View style={styles.individual_container}> 
        <Text style={styles.ip}>Individual Plan</Text>
        <Text style={styles.ipcontent}>Book Your Health Checkup</Text>
        <Image
        source={require('../Images/logo.jpg')}
        style={styles.logo}
        />
        <Text style={styles.benefits}>Know your Benifits  </Text>
      </View>
      <Text style={styles.services_label}>Our Services </Text>
      <View style={styles.flatlist_container}>
        <FlatList
        data={Homepagedata} 
        renderItem={({item}) =>{
          return(
            <View>
                <Image 
                source={item.img}
                style={styles.fimg}
                />
                <Text style={styles.ftxt}>{item.label}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()} 
        horizontal
        />
      </View>
      <Image 
      source={require('../Images/homepagebooking.png')}
      style={styles.bookingimg}
      />
      <Text style={styles.quick_label}>Quick Access</Text>
      <View style={{flexDirection:'row',top:-60,left:20}}> 
        <View style={{width:120,backgroundColor:'#c0eded',height:65,marginRight:5}}>
           <FontAwesome6 name="user-doctor" size={26} color="blue" style={styles.icon}/>
           <Text style={styles.qatxt}>My Doctors</Text>
        </View>
        <View style={{width:120,backgroundColor:'#c0eded',height:65,marginRight:5}}>
          <TouchableOpacity
          onPress={()=> navigation.navigate('Appointment')}
          >
            <AntDesign name="calendar" size={26} color="blue" style={styles.icon} />
            <Text style={{fontSize:13,top:10}}>Create Appointment</Text>
          </TouchableOpacity>  
        </View>
        <View style={{width:120,backgroundColor:'#c0eded',height:65,marginRight:5}}>
            <Foundation name="clipboard-notes" size={26} color="blue" style={styles.icon} />
            <Text style={styles.qatxt}>My Reports</Text>
        </View>
      </View>
      <View style={styles.footer_container}>
        <View>
          <AntDesign name="home" size={24} color="black" />
          <Text>Home</Text>
        </View>
        <View>
          <AntDesign name="filetext1" size={24} color="black" />          
          <Text>Records</Text>
        </View>
        <View>
          <Octicons name="device-mobile" size={24} color="black" />
          <Text>Device</Text>
        </View>
        <View>
         <FontAwesome name="user-o" size={24} color="black" />
         <Text>Profile</Text>
        </View>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({   
  topimg:{
    left:5,
    width:380
  },
  welcome:{
    top:-150,
    left:40,
    fontSize:18,
    color:'white'
  },
  individual_container:{
    borderWidth:0.5,
    width:320,
    height:150,
    left:40,
    top:-130,
    borderRadius:15,
    backgroundColor:'white'
  },
  logo:{
    width:50,
    height:50,
    left:250,
    top:-30
  },
  ip:{
    fontSize:16,
    top:25,
    left:10
  },
  ipcontent:{
    top:30,
    left:10
  },
  benefits:{
    color:'#0e0bbf',
    top:10,
    left:10
  },
  services_label:{
    top:-115,
    left:20,
    fontSize:16,
    color:'#0e0bbf',
  },
  fimg:{
    width:130.,
    height:120,
    marginRight:10
  },
  flatlist_container:{
    top:-100,
    left:20
  },
  ftxt:{
    left:15,
    top:2
  },
  bookingimg:{
    top:-85,
    left:25,
  },
  quick_label:{
    top:-75,
    left:20,
  },
  icon:{
    left:45,
    top:10
  },
  qatxt:{
    top:10,
    left:20
  },
  footer_container:{
    flexDirection:'row',
    top:-30,
    justifyContent:'space-evenly',
    
  }
})

export default HomePage;
