import React from 'react';
import { Text, SafeAreaView, ScrollView, FlatList, View } from 'react-native';
import { styles } from '../utils/Styles';
import GenerateSectionList from './generateSectionList';

const GenerateListOfSectionLists = (props) => {
  const renderItem = ({ item }) => (
    <View>
      <Text style = {styles.mainTitle}>{item.title} </Text>
      <GenerateSectionList data = {item.data} />
    </View>
    );

  return(
    <SafeAreaView>
      <FlatList
         data = {props.data}
         keyExtractor = {(item, index) => item + index}
         renderItem = {renderItem}
       />
     </SafeAreaView>
  );
}

export default GenerateListOfSectionLists;
