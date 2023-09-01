import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import Pdf from 'react-native-pdf';
import {Themes} from './Theme';

const {bodyBackgroundColor, buttonBackgroundColor} = Themes.default;

const PDF = ({route}) => {
  const uri = route.params.uri;

  const source = {
    uri: uri,
    cache: true,
  };

  const renderIndicator = percent => (
    <View style={styles.indicator}>
      <ActivityIndicator size={100} color={buttonBackgroundColor} />
      <Text style={{color: buttonBackgroundColor}}>{`${(percent * 100).toFixed(
        2,
      )} %`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
        renderActivityIndicator={renderIndicator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bodyBackgroundColor,
  },
  pdf: {
    flex: 1,
  },
  indicator: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default PDF;
