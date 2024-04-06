import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Import Calendar from react-native-calendars

const BookAppointment = ({ username }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const availableSlots = [
    { time: '10:00 AM' },
    { time: '10:30 AM' },
    { time: '11:00 AM' },
    { time: '11:30 AM' },
    { time: '04:00 PM' },
    { time: '04:30 PM' },
    { time: '05:30 PM' },
    { time: '06:30 PM' }
  ];

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleContinue = () => {
    setShowImageModal(true);
  };

  const renderSlotItem = ({ item }) => (
    
    <TouchableOpacity onPress={() => handleSlotSelection(item)} style={styles.slotItem}>
      <Text>{item.time}</Text>
    </TouchableOpacity>
  
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Calendar 
        current={selectedDate}
        minDate={new Date()} 
        onDayPress={(day) => setSelectedDate(new Date(day.timestamp))}
        markedDates={{
          [selectedDate.toISOString().split('T')[0]]: { selected: true, disableTouchEvent: true, selectedColor: 'blue' },
        }}
        style={styles.calendar}
      />

      <Text style={{top:15,left:10,fontSize:15,fontWeight:500}}>Available Slots:</Text>
      <FlatList
        data={availableSlots}
        renderItem={renderSlotItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        style={{width:350, height:100,left:30,top:20}}
      />

      <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
        <Text style={{color:'white'}}>Continue</Text>
      </TouchableOpacity>

      <Modal visible={showImageModal} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setShowImageModal(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
          <Image source={require('../Images/Online booking.png')} style={styles.image} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10, 
  },
  slotItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    width:100,
    height:100,
    
  },
  continueButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    top: -210,
    width:300,
    left:50
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    width: 300,
    height: 400,
  },

});

export default BookAppointment;
