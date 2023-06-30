import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Button from '../Button';
import Ads from '../Ads';
import {Themes} from '../Theme';

const {bodyBackgroundColor} = Themes.default;

const Classes = ({route, navigation}) => {
  const data = route.params.data;
  const onClick = item => {
    navigation.navigate('SUBJECTS', {item: item, type: route.params.type});
  };

  const renderItem = ({item}) => (
    <View style={{paddingTop: 20}}>
      <Button
        text={`Class ${item.class}`}
        customButtonStyles={{width: 300, height: 50}}
        onClick={() => onClick(item)}
      />
    </View>
  );

  const {container} = styles;
  return (
    <View style={container}>
      <FlatList
        data={data}
        renderItem={renderItem}
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

export default Classes;
