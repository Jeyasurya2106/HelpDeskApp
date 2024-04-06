import React from 'react';
import { View, Text, TouchableOpacity, Alert , Image , StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


const AppointmentPage = () => {
  
  const navigation = useNavigation(); 

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
      style={styles.online}
      onPress={() => navigation.navigate('Book Appointment')}
      >
        <Image 
        source={require('../Images/onlineconsultation.jpg')}
        />
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.offline}
      onPress={() => navigation.navigate('Book Appointment')}
      >
        <Image
        source={require('../Images/offlineconsultation.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  online:{
    top:-200
  },
  offline:{
    top:-180
  }
})

export default AppointmentPage;
