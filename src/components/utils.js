import {PermissionsAndroid, Share, Alert} from 'react-native';

/// grant permission in android
export const getDownloadPermissionAndroid = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'File Download Permission',
        message: 'Your permission is required to save Files to your device',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log(granted, 'permission granted');
    if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
  } catch (err) {
    console.log('err', err);
  }
};

export const shareApp = async () => {
  try {
    const result = await Share.share({
      message:
        'Study anytime, anywhere with our user-friendly study app!, AppLink: https://play.google.com/store/apps/details?id=com.allncertbooks',
      url: 'https://play.google.com/store/apps/details?id=com.allncertbooks',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }
};

export const titleCase = s =>
  s
    .replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());
