import React from 'react';
import Button from '../Button';
import {View, FlatList, StyleSheet} from 'react-native';
import {titleCase} from '../utils';
import Ads from '../Ads';
import {Themes} from '../Theme';

const {bodyBackgroundColor} = Themes.default;

const Subjects = ({route, navigation}) => {
  const data = route.params.item;
  const subjects = data.subjects;
  const onClick = subject => {
    navigation.navigate('BOOKS', {
      subject: subject,
      data,
      type: route.params.type,
    });
  };

  const renderItem = ({item}) => (
    <View style={{paddingTop: 20}}>
      <Button
        text={titleCase(item)}
        customButtonStyles={{width: 300, height: 50}}
        onClick={() => onClick(item)}
      />
    </View>
  );

  const {container} = styles;
  return (
    <View style={container}>
      <FlatList
        data={subjects}
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

export default Subjects;
