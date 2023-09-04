import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Download from '../Download';
import {NCERT_HOST} from '../reference';
import ItemSeparator from '../List/ItemSeparator';
import {Themes} from '../Theme';
import Ads from '../Ads';
import {SOLUTIONS} from '../reference';
import Chapter from '../List/Chapter';
import RNFetchBlob from 'rn-fetch-blob';

const {bodyBackgroundColor} = Themes.default;

const Chapters = ({route, navigation}) => {
  const data = route.params.data;
  const book = route.params.book;
  const type = route.params.type;
  const chapters = data[book];
  const downloadChapterUrl = `${NCERT_HOST}/${data[`${book}_pdf_key`]}dd.zip`;
  const [chapterDownloaded, setChapterDownloaded] = useState(false);

  const {fs} = RNFetchBlob;

  const {container, headerStyle} = styles;

  const renderItem = ({item}) => {
    return (
      <Chapter
        navigation={navigation}
        item={item}
        data={data}
        book={book}
        type={type}
      />
    );
  };

  const headerComponent = () => {
    switch (type) {
      case SOLUTIONS:
        return null;
      default:
        return listHeaderComponent;
    }
  };

  const headerComponentStyle = () => {
    switch (type) {
      case SOLUTIONS:
        return null;
      default:
        return headerStyle;
    }
  };

  const listHeaderComponent = () => {
    return (
      <Download
        uri={downloadChapterUrl}
        book={book}
        text={'Download Book PDF'}
        customButtonStyle={{width: 350}}
        renderFlag={() => setChapterDownloaded(true)}
        isBook={true}
      />
    );
  };

  return (
    <View style={container}>
      <FlatList
        data={chapters}
        renderItem={item => renderItem(item)}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={headerComponent()}
        ListHeaderComponentStyle={headerComponentStyle()}
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
    backgroundColor: bodyBackgroundColor,
  },
  headerStyle: {
    padding: 10,
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
});

export default Chapters;
