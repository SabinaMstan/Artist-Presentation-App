import React from 'react';
import { Text, SafeAreaView, View, SectionList, TouchableOpacity, Image} from 'react-native';
import { styles } from '../utils/Styles';

const PreviewImage = (props) => {
  return (
    <TouchableOpacity>
      <Image
        style={props.item.image ? [styles.imgThumb, {flex:1}] : ''}
        source={props.item.image}
      />
    </TouchableOpacity>
  )
}

export default PreviewImage;
