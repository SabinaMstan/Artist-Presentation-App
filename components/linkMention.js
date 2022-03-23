import React, { useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Text, View, Pressable } from 'react-native';
import { styles } from '../utils/Styles';

const LinkMention = (props) => {
  const [color, setColor] = useState('blue');
  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(props.item.link);
    setColor('purple');
  };

  return (
    <View>
      <Pressable onPress = {handleOpenWithWebBrowser} disabled = {props.item.link ? false : true}>
        <Text>{'\u2058 '}<Text style = {props.item.link ? {color: color, textDecorationLine: 'underline'} : ''}>{props.item.place}</Text></Text>
      </Pressable>
    </View>
  );
}

export default LinkMention;
