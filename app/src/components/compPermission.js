import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
} from 'react-native';

export default class App extends React.Component {
    
  proceed() {
    alert('You can use the Camera');
  }

  onPress = () => {
    var that = this;
    //Checking for the permission just after component loaded
    async function requestCameraPermission() {
      //Calling the permission function
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'AndoridPermissionExample App Camera Permission',
          message: 'AndoridPermissionExample App needs access to your camera ',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        that.proceed();
      } else {
        alert('CAMERA Permission Denied.');
      }
    }
    if (Platform.OS === 'android') {
      requestCameraPermission();
    } else {
      this.proceed();
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Ask Permission for Camera</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});