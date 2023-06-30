import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {Themes} from './Theme';

const {buttonBackgroundColor, buttonTextColor} = Themes.default;

const Download = ({uri, book, chapter, text, customButtonStyle}) => {
  const downloadFile = () => {
    console.log('hello');
    let FILE_URL = uri;
    // let file_ext = getFileExtention(FILE_URL);
    let file_ext = '.' + 'pdf';
    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.DownloadDir;

    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path: `${RootDir}/file_${book ? book : ''}_${
          chapter ? chapter : ''
        }${file_ext}`,
        description: 'downloading file...',
        notification: true,

        useDownloadManager: true,
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        console.log('res -> ', JSON.stringify(res));
        alert('File Downloaded Successfully.');
      });
  };

  const getFileExtention = fileUrl => {
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : '';
  };

  const {button, textStyle} = styles;
  return (
    <View>
      <TouchableOpacity
        style={[button, customButtonStyle]}
        onPress={downloadFile}>
        <Text style={textStyle}>{`${text ? text : 'Download'}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: buttonBackgroundColor,
    elevation: 5,
    color: 'blue',
    borderRadius: 5,
    width: 80,
    height: 50,
  },
  textStyle: {
    color: buttonTextColor,
  },
});
