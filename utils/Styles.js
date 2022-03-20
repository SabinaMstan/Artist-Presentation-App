import React from 'react';
import {StyleSheet,StatusBar} from 'react-native';

export const styles = StyleSheet.create({
 container: {
   flex: 1,
   paddingTop: StatusBar.currentHeight,
   margin: 16
 },
 centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
 title: {
   fontWeigth: 'bold',
   fontSize: 20
 },
 item: {
    paddingLeft: 10,
    fontSize: 14,
    flex: 1
 },
 itemView: {
    flexDirection: 'row',
    alignItems: 'center'
 },
 header: {
   fontWeigth: "italic",
   padding: 5,
   fontSize: 18,
   marginVertical: 8,
 },
 imgThumb: {
   width: 80,
   height: 80,
   marginRight: 10,
   borderRadius: 16,
 },
 modalView: {
   margin: 20,
   backgroundColor: "white",
   borderRadius: 20,
   padding: 35,
   alignItems: "center",
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2
   },
   shadowOpacity: 0.25,
   shadowRadius: 4,
   elevation: 5
 },
});
