import React, { useState } from 'react';
import { Text, View, Modal, TouchableOpacity, Image, Pressable} from 'react-native';
import { styles } from '../utils/Styles';

const PreviewImage = (props) => {

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View>
      <Modal
        animationType = 'slide'
        transparent = {true}
        visible = {modalVisible}
        onRequestClose = {() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style = {styles.centeredView}>
          <View style = {styles.modalView}>
            <Pressable onPress = {() => setModalVisible(!modalVisible)}>
              <Image
                style = {styles.imgFullView}
                source = {props.item.image}
              />
            </Pressable>
          </View>
        </View>
        </Modal>
      <TouchableOpacity onPress = {() => setModalVisible(true)}>
        <Image
          style = {props.item.image ? [styles.imgThumb, {flex:1}] : ''}
          source = {props.item.image}
        />
      </TouchableOpacity>
   </View>
 );
}

export default PreviewImage;
