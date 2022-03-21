import React from 'react';
import { Text, SafeAreaView, View, SectionList } from 'react-native';
import { styles } from '../utils/Styles';
import PreviewImage from './previewImage';
import LinkMention from './linkMention';

const GenerateSectionList = (props) => {

  const renderItem = ({item}) => {
    return (
      <View style = {styles.itemView}>
        <View style = {styles.item}>
          <LinkMention item = {item}/>
          <Text>{'\u2058 '}{item.date}</Text>
        </View>
        <PreviewImage item = {item}/>
      </View>
    );
  }

  const renderSectionHeader = ({section: {title}}) => {
    return (
      <View style = {{flexDirection: 'row'}}>
        <Text style = {[styles.sectionHeader, {flex: 1}]}>{`\u2059 `}{title}</Text>
      </View>
    );
  }

  return(
    <SafeAreaView>
      <Text style = {styles.mainTitle}>{props.mainTitle}: </Text>
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
