import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Typography from './Typography';

interface LinkProps {
  screen?: any;
  text: string;
}

const Link: React.FC<LinkProps> = ({ screen, text }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <Typography
        color="dark"
        style={{
          textAlign: 'center',
          textDecorationLine: 'underline',
        }}
      >
        {text}
      </Typography>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({});
