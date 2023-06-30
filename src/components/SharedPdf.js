import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import PDFView from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob';

const SharedPDF = ({ fileUrl }) => {
  const [pdfSource, setPdfSource] = useState(null);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const response = await RNFetchBlob.config({
          fileCache: true,
          appendExt: 'pdf',
        }).fetch('GET', fileUrl);
        console.log(response, 'response');
        const localFilePath = response.path();
        setPdfSource({ uri: `file://${localFilePath}` });
      } catch (error) {
        console.log('Error fetching PDF:', error);
      }
    };

    fetchPDF();
  }, [fileUrl]);

  return (
    <View style={{ flex: 1 }}>
      {pdfSource && (
        <PDFView
          style={{ flex: 1 }}
          source={pdfSource}
          resourceType="file"
          onLoad={() => console.log('PDF loaded')}
          onError={(error) => console.log('Error while loading PDF:', error)}
        />
      )}
    </View>
  );
};

export default SharedPDF;
