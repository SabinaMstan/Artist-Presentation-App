import React from 'react';
import { Text, SafeAreaView, View, SectionList, TouchableOpacity, Image} from 'react-native';
import { styles } from '../utils/Styles';
import PreviewImage from './previewImage';

const GenerateSectionList = (props) => {
  const renderItem = ({item}) => {
    return (
      <View style = {styles.itemView}>
        <View style = {styles.item}>
          <Text>{'\u2058 '}{item.place}</Text>
          <Text>{'\u2058 '}{item.date}</Text>
        </View>
        <PreviewImage item = {item}/>
      </View>
    );
  }

  const renderSectionHeader = ({section: {title}}) => {
    return (
      <View style = {{flexDirection: 'row'}}>
        <Text style = {[styles.header, {flex: 1}]}>{`\u2059 `}{title}</Text>
      </View>
    );
  }

  return(
    <SafeAreaView>
      <SectionList
         sections = {props.data}
         keyExtractor = {(item, index) => item + index}
         renderItem = {renderItem}
         renderSectionHeader = {renderSectionHeader}
       />
     </SafeAreaView>
  );
}

export default GenerateSectionList;
