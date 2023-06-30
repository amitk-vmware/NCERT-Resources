import React from 'react';
import Button from '../Button';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Download from '../Download';
import {NCERT_HOST} from '../reference';
import ItemSeparator from '../List/ItemSeparator';
import {Themes} from '../Theme';
import {SOLUTIONS} from '../reference';

const {bodyBackgroundColor} = Themes.default;

const Chapters = ({route, navigation}) => {
  const data = route.params.data;
  const book = route.params.book;
  const type = route.params.type;
  const chapters = data[book];

  const onClick = uri => {
    navigation.navigate('PDF', {
      uri: uri,
    });
  };

  const {container, viewStyle, headerStyle, textStyle} = styles;

  const renderItem = ({item}) => {
    let chapter = item + 1;
    let uri;
    switch (type) {
      case SOLUTIONS:
        uri = `${data[`${book}_solutions`][item]}`;
        break;
      default:
        uri = `${NCERT_HOST}/${data[`${book}_pdf_key`]}${
          chapter < 10 ? `0${chapter}` : chapter
        }.pdf`;
    }
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{`CHAPTER ${chapter}`}</Text>
        <Button
          text="View PDF"
          customButtonStyles={{width: 80, height: 50}}
          onClick={() => onClick(uri)}
        />
        <Download uri={uri} book={book} chapter={`chapter_${chapter}`} />
      </View>
    );
  };

  const listHeaderComponent = () => {
    const uri = `${NCERT_HOST}/${data[`${book}_pdf_key`]}dd.zip`;
    return (
      <Download
        uri={uri}
        book={book}
        text="Download Book PDF"
        customButtonStyle={{width: 350}}
      />
    );
  };

  return (
    <View style={container}>
      <FlatList
        data={chapters}
        renderItem={item => renderItem(item)}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={listHeaderComponent}
        ListHeaderComponentStyle={headerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bodyBackgroundColor,
  },
  viewStyle: {
    justifyContent: 'center',
    borderStyle: 'solid',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  headerStyle: {
    padding: 10,
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  textStyle: {
    paddingTop: 20,
    paddingLeft: 8,
    color: 'black',
  },
});

export default Chapters;
