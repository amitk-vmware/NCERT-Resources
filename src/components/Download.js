import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {Themes} from './Theme';
import {SOLUTIONS} from './reference';

const {buttonBackgroundColor, buttonTextColor} = Themes.default;

const Download = ({uri, book, chapter, text, customButtonStyle, type}) => {
  const downloadFile = () => {
    // let FILE_URL = uri;
    let file_ext = setExtension();
    // file_ext = '.' + file_ext[0];
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
      .fetch('GET', uri)
      .then(res => {
        console.log('res -> ', JSON.stringify(res));
        alert('File Downloaded Successfully.');
      });
  };

  const setExtension = () => {
    let ext;
    switch (type) {
      case SOLUTIONS:
        ext = '_solution.pdf';
        break;
      default:
        ext = getFileExtention(uri);
        ext = '.' + ext[0];
    }
    return ext;
  };

  const getFileExtention = fileUrl => {
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
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
