import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Button from './Button';
import Typography from './Typography';

const CustomAlert = ({ visible, message, onConfirm, onCancel }) => (
  <Modal transparent animationType="slide" visible={visible}>
    <View style={styles.container}>
      <View style={styles.alertBox}>
        {/* <Typography style={styles.title}>{title}</Text> */}
        <Typography style={styles.message}>{message}</Typography>
        <View style={styles.buttonContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={onCancel} style={{ width: '50%', marginTop: 10, height: '75%' }}>
              <Typography
                fontStyle="medium"
                style={{ color: 'black', fontWeight: '600', fontSize: 18 }}
              >
                Not Sure
              </Typography>
            </Button>
            <Button
              onPress={onConfirm}
              style={{ width: '50%', marginTop: 10, height: '75%' }}
              backgroundColor="grayBackground"
            >
              <Typography
                fontStyle="medium"
                style={{ color: 'black', fontWeight: '600', fontSize: 18 }}
              >
                Yes, I’m Sure
              </Typography>
            </Button>
          </View>
          {/* <TouchableOpacity onPress={onCancel}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onConfirm}>
            <Text style={styles.confirmButton}>Confirm</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
    width: heightPercentageToDP(50),
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',

    marginBottom: 10,
    alignSelf: 'center',
  },
  message: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    color: '#131313',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    color: 'red',
    fontSize: 16,
  },
  confirmButton: {
    color: 'green',
    fontSize: 16,
  },
});

export default CustomAlert;
