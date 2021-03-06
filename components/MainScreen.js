import { Dimensions ,StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import MSHeader from './MSHeader';
import MSCenter from './MSCenter';
import MSBottom from './MSBottom';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const MainScreen = ({navigation}) => {
  //rnfes
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MSHeader/>
      </View>
      <View style={styles.centerContainer}>
        <MSCenter navigation={navigation}/>
      </View>
      <View style={styles.servicesContainer}>
        <MSBottom/>
      </View>
    </View>
  )
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    header: {
      flexBasis: '8%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    centerContainer: {
      flexBasis: '45%',
    },
    servicesContainer: {
      flexBasis: '45%',
    }
})