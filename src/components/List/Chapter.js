import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../Button';
import Download from '../Download';
import RNFetchBlob from 'rn-fetch-blob';
import {SOLUTIONS, SOLUTIONS_HOST, NCERT_HOST} from '../reference';

const Chapter = ({navigation, item, data, book, type}) => {
  const [value, setValue] = useState(0);
  const [filePath, setFilePath] = useState(false);
  const {fs} = RNFetchBlob;
  const downloadDir = `${fs.dirs.DownloadDir}/file_${book}_`;

  const chapter = item + 1;
  // const filePath = `${downloadDir}chapter_${chapter}.pdf`;

  const onClick = uri => {
    navigation.navigate('PDF', {
      uri: uri,
    });
  };

  const forceRender = () => {
    setValue(value + 1);
  };

  const [exist, setExist] = useState(false);

  useEffect(() => {
    fs.exists(filePath)
      .then(e => {
        setExist(e);
      })
      .catch(() => {
        setExist(false);
      });
  }, [filePath, fs, value]);

  const uri = () => {
    switch (type) {
      case SOLUTIONS:
        return `${SOLUTIONS_HOST}/${data[`${book}_solutions`][item]}`;
      default:
        return `${NCERT_HOST}/${data[`${book}_pdf_key`]}${
          chapter < 10 ? `0${chapter}` : chapter
        }.pdf`;
    }
  };

  useEffect(() => {
    switch (type) {
      case SOLUTIONS:
        setFilePath(`${downloadDir}chapter_${chapter}_solution.pdf`);
        break;
      default:
        setFilePath(`${downloadDir}chapter_${chapter}.pdf`);
    }
  }, [type, chapter, downloadDir]);

  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{`CHAPTER ${chapter}`}</Text>
      {exist ? (
        <Button
          text={'View PDF Offline'}
          customButtonStyles={{width: 180, height: 50}}
          onClick={() => onClick(filePath)}
        />
      ) : (
        <>
          <Button
            text="View PDF"
            customButtonStyles={{width: 100, height: 50}}
            onClick={() => onClick(uri())}
          />
          <Download
            uri={uri()}
            book={book}
            chapter={`chapter_${chapter}`}
            type={type}
            renderFlag={forceRender}
            isBook={false}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    borderStyle: 'solid',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  textStyle: {
    paddingTop: 20,
    paddingLeft: 8,
    color: 'black',
  },
});

export default Chapter;
