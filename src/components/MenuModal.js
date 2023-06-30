import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Linking,
  FlatList,
} from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome5';
import Button from './Button';
import {Themes} from './Theme';
import {shareApp} from './utils';

const {bodyBackgroundColor, headerTextColor, buttonTextColor} = Themes.default;

const MenuModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const list = [
    {
      text: 'Share this App',
      linking: 'share',
      icon: 'share',
    },
    {
      text: 'Support',
      linking: 'mailto:am.kumar1293@gmail.com?subject=Need Assistance',
      icon: 'handshake',
    },
    {
      text: 'Feedback',
      linking:
        'mailto:am.kumar1293@gmail.com?subject=Suggestions for improvements',
      icon: 'comments',
    },
  ];

  const onClick = linking => {
    if (linking === 'share') {
      shareApp();
    } else {
      Linking.openURL(linking);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={{alignItems: 'center', flexDirection: 'row', padding: 10}}>
        <Button
          text={
            <Font name={item.icon} color={buttonTextColor} padding={10}>
              {`     ${item.text}`}
            </Font>
          }
          onClick={() => onClick(item.linking)}
          customButtonStyles={{width: 200, height: 50}}
        />
      </View>
    );
  };

  return (
    <View style={styles.centeredView}>
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <FlatList data={list} renderItem={renderItem} />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Dismiss</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection: 'row',
        }}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>
            <Font name={'bars'} color={headerTextColor} size={25} />
          </Text>
        </Pressable>
        <Text style={styles.headerText}> NCERT RESOURCES</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal',
    color: headerTextColor,
    paddingTop: 9,
    paddingLeft: 30,
  },
  modalView: {
    margin: 40,
    backgroundColor: bodyBackgroundColor,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
  },
  buttonClose: {
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 5,
    backgroundColor: '#343a40',
    width: 100,
    height: 50,
    marginTop: 10,
    paddingTop: 7,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default MenuModal;
