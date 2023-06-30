import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {Themes} from './Theme';

const {buttonBackgroundColor, buttonTextColor} = Themes.default;

const Button = ({text, customButtonStyles, onClick}) => {
  const {button, buttonText} = styles;
  return (
    <View>
      <Pressable style={[button, customButtonStyles]} onPress={onClick}>
        <Text style={buttonText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: buttonBackgroundColor,
    elevation: 5,
    borderRadius: 5,
    marginHorizontal: 50,
    paddingVertical: 12,
    width: 300,
    height: 100,
    whiteSpace: 'normal',
  },
  buttonText: {
    color: buttonTextColor,
  },
});

export default Button;
