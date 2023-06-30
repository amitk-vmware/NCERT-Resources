import React from 'react';
import Button from '../Button';
import {StyleSheet, View} from 'react-native';
import {BOOKS_ARRAY, SOLUTIONS_ARRAY, BOOKS, SOLUTIONS} from '../reference.js';
import Ads from '../Ads';
import {Themes} from '../Theme';

const {bodyBackgroundColor} = Themes.default;

const Home = ({navigation}) => {
  const onClick = type => {
    let title;
    let data;
    switch (type) {
      case 'solutions':
        title = 'CLASSES (SOLUTION)';
        data = SOLUTIONS_ARRAY;
        break;
      default:
        title = 'CLASSES';
        data = BOOKS_ARRAY;
    }
    navigation.navigate('CLASSES', {data: data, title: title, type: type});
  };

  const {container, customButtonStyles} = styles;

  return (
    <View style={container}>
      <Button
        text={'NCERT BOOKS FOR ALL CLASSES'}
        customButtonStyles={customButtonStyles}
        onClick={() => onClick(BOOKS)}
      />
      {/* <Button
        text={'NCERT BOOKS SOLUTIONS'}
        customButtonStyles={customButtonStyles}
        onClick={() => onClick(SOLUTIONS)}
      /> */}
      <Ads />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bodyBackgroundColor,
  },
  customButtonStyles: {
    width: 300,
    height: 100,
    margin: 10,
  },
});

export default Home;
