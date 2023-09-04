import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {Themes} from './Theme';
import {SOLUTIONS} from './reference';
import {unzip} from 'react-native-zip-archive';

const {buttonBackgroundColor, buttonTextColor} = Themes.default;

const Download = ({
  uri,
  book,
  chapter,
  text,
  customButtonStyle,
  type,
  renderFlag,
  isBook,
}) => {
  const [downloading, setDownloading] = useState(false);

  const downloadFile = () => {
    setDownloading(true);
    let file_ext = setExtension();
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
        const path = res.path();
        renderFlag();
        if (isBook === true) {
          // eslint-disable-next-line no-alert
          alert('Book Downloaded Successfully.');
          // ================  upgrade later =================
          // unzip(path, RootDir)
          //   .then(result => {
          //     console.log(result, 'result of unzip');
          //     setDownloading(false);
          //     res.flush();
          //   })
          //   .catch(err => {
          //     console.log(`Error unzipping the file ${err}`);
          //   });
        }
        setDownloading(false);
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

  const {button, textStyle, view} = styles;
  return (
    <View style={view}>
      {downloading ? (
        <>
          <ActivityIndicator size={25} color={buttonBackgroundColor} />
          <Text>Downloading...</Text>
        </>
      ) : (
        <TouchableOpacity
          style={[button, customButtonStyle]}
          onPress={downloadFile}>
          <Text style={textStyle}>{`${text ? text : 'Download'}`}</Text>
        </TouchableOpacity>
      )}
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
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
