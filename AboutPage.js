import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './utils/Styles';
import { ExhibitData, ProjectData } from './AboutPageData';
import GenerateSectionList from './components/generateSectionList';

const AboutPage = (props) => {

  return(
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>About me
      </Text>
      <ScrollView>
        <Text  style = {styles.title}>Statement</Text>
        <Text>Through my art, I am exploring human interactions, with each other and their environment.</Text>
        <Text>I started from the individual need of belonging by creating The perfect home. I found that home is a state of mind rather than a place and that perfection is relative to the individual. I continued with Community lights and Equally diverse, two interactive installations that react to the viewer just passing by, without them necessarily being aware of this. My latest project, Heavy hearts is focused on feelings and the way they are influencing us. This project got me closer to human nature and got me thinking more and more about our place in nature.</Text>
        <Text style = {styles.title}>Exhibitions: </Text>
        <GenerateSectionList data = {ExhibitData}/>
        <Text style = {styles.title}>Collaborative projects: </Text>
        <GenerateSectionList data = {ProjectData}/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutPage;
