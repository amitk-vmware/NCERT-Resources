import React from 'react';
import Button from '../Button';
import {View, FlatList, StyleSheet} from 'react-native';
import {titleCase} from '../utils';
import Ads from '../Ads';
import {Themes} from '../Theme';
import {SOLUTIONS} from '../reference';

const {bodyBackgroundColor} = Themes.default;

const Books = ({route, navigation}) => {
  const data = route.params.data;
  const subject = route.params.subject;
  const books = data[subject];
  const type = route.params.type;

  const onClick = book => {
    navigation.navigate('CHAPTERS', {
      book: book,
      data,
      type,
      title: title(),
    });
  };

  const title = () => {
    switch (type) {
      case SOLUTIONS:
        return 'CHAPTERS (SOLUTION)';
      default:
        return 'CHAPTERS';
    }
  };

  const renderItem = ({item}) => (
    <View style={{paddingTop: 20}}>
      <Button
        text={titleCase(item)}
        customButtonStyles={{width: 300, height: 60}}
        onClick={() => onClick(item)}
      />
    </View>
  );
  const {container} = styles;
  return (
    <View style={container}>
      <FlatList
        data={books}
        renderItem={item => renderItem(item)}
        ListFooterComponent={() => <View />}
        ListFooterComponentStyle={{marginBottom: 100}}
      />
      <Ads />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: bodyBackgroundColor,
  },
});

export default Books;
