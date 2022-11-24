/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Button.styles';

interface ButtonProps {
  content: string;
  backgroundColor?: string;
  twoRowButton?: boolean;
  onPress: (textNumber: string) => void;
}

export const Button = ({
  content,
  backgroundColor = '#2D2D2D',
  twoRowButton = false,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        onPress?.(content);
      }}>
      <View
        style={{
          ...styles.button,
          backgroundColor,
          width: twoRowButton ? 170 : 80,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: backgroundColor === '#9B9B9B' ? 'black' : 'white',
          }}>
          {content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
