import React from 'react';
import {View, Text} from 'react-native';

const Chapter = () => {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{`CHAPTER ${chapter}`}</Text>
      <Button
        text="View PDF"
        customButtonStyles={{width: 80, height: 50}}
        onClick={() => onClick(exist ? filePath : uri)}
      />
      <Download
        uri={uri}
        book={book}
        chapter={`chapter_${chapter}`}
        type={type}
      />
    </View>
  )
}

export default Chapter;
