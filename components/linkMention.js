import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Text, View, Pressable} from 'react-native';
import { styles } from '../utils/Styles';

const LinkMention = (props) => {

  const handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(props.item.link);
  };

  return (
    <View>
      <Pressable onPress = {handleOpenWithWebBrowser} disabled = {props.item.link ? false : true}>
        <Text>{'\u2058 '}{props.item.place}</Text>
      </Pressable>
    </View>
  );
}

export default LinkMention;
