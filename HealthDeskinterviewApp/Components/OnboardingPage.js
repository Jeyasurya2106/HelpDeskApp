import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { EvilIcons } from '@expo/vector-icons';

const OnboardingPage = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef(null);

  const handlePageChange = (event) => {
    const { position } = event.nativeEvent;
    setCurrentPage(position);
  };

  const handleNext = () => {
    if (currentPage < 2) {
      const nextPage = currentPage + 1;
      pagerRef.current.setPage(nextPage);
    } else {
      navigation.navigate('Login');
    }
  };

  const renderIndicator = () => {
    const indicators = [];
    for (let i = 0; i < 3; i++) {
      indicators.push(
        <View key={i} style={[styles.indicator, currentPage === i && styles.activeIndicator]} />
      );
    }
    return indicators;
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Image
        source={require('../Images/bordertop.jpg')}
        style={styles.top}
      />
      <TouchableOpacity onPress={handleNext} style={styles.skipButton}>
        <Text style={styles.skiptxt}>{currentPage === 2 ? 'Finish' : 'Skip'}</Text>
      </TouchableOpacity>
      <PagerView
        style={{ flex: 1, top: -50 }}
        initialPage={0}
        onPageSelected={handlePageChange}
        ref={pagerRef}
      >
        <View key="1" style={styles.page}>
          <Image source={require('../Images/Firstpage.jpg')}
            style={styles.img}
          />
          <Text style={styles.heading}>Schedule Doctor Appointments</Text>
          <Text style={styles.content}>Book appointments with your preferred doctors hassle-free. Choose from a list of experienced healthcare professionals.</Text>
        </View>
        <View key="2" style={styles.page}>
          <Image source={require('../Images/secondpage.jpg')}
            style={styles.img}
          />
          <Text style={styles.heading}>Never Miss a Dose</Text>
          <Text style={styles.content}>Set up personalized medicine reminders to ensure you never miss a dose. Stay on top of your treatment plan with timely notifications.</Text>
        </View>
        <View key="3" style={styles.page}>
          <Image source={require('../Images/thirdpage.jpg')}
            style={styles.img}
          />
          <Text style={styles.heading}>Smart Health Checkup</Text>
          <Text style={styles.content}>Experience the future of healthcare with our smart checkup feature. Get instant health insights and personalized recommendations</Text>
        </View>
      </PagerView>
      <View style={styles.indicatorContainer}>
        {renderIndicator()}
      </View>
      <Image
        source={require('../Images/borderbottom.jpg')}
        style={styles.bottom}
      />
      <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
        <EvilIcons name="arrow-right" size={44} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: 'blue',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  skipButton: {
    position: 'absolute',
    borderRadius: 5,
    left: 335,
    top: 20
  },
  skiptxt: {
    color: '#2b3bc4',
    fontSize: 18,
  },
  bottom: {
    left: 230
  },
  top: {
    top: -10
  },
  page: {
    alignItems: 'center'
  },
  heading: {
    top: 20,
    color: '#1c1aad',
    fontSize: 18,
  },
  content: {
    top: 30,
    width: 350,
    alignItems: 'center',
    left: 15,
    fontSize: 16,
  },
  arrowButton: {
    position: 'absolute',
    top: 690,
    left: 300
  },
});

export default OnboardingPage;
