import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {Themes} from './Theme';

const {buttonBackgroundColor, buttonTextColor} = Themes.default;

const Download = () => {
  const downloadFile = () => {
    let FILE_URL =
      'https://ipfs.filebase.io/ipfs/QmYAy7Ff5vZr6WUxVUaq78i3cgycmyeY2FCEZVEKtJvfL4';
    let file_ext = getFileExtention(FILE_URL);
    console.log(file_ext, 'file_ext');
    file_ext = '.' + 'pdf';
    const {config, fs} = RNFetchBlob;
    let RootDir = fs.dirs.DownloadDir;

    
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path: `${RootDir}/file_${file_ext}`,
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
    return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
  };

  const {button, textStyle} = styles;
  return (
    <View>
      <TouchableOpacity style={button} onPress={downloadFile}>
        <Text style={textStyle}>{'Download'}</Text>
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
