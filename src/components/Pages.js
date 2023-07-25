import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chapters from './Page/Chapters';
import Home from './Page/Home';
import Subjects from './Page/Subjects';
import Classes from './Page/Classes';
import Books from './Page/Books';
import PDF from './pdf';
import MenuModal from './MenuModal';
import {Themes} from './Theme';

const Stack = createNativeStackNavigator();

const Pages = () => {
  const {headerBackgroundColor, headerTextColor} = Themes.default;

  return (
    <Stack.Navigator initialRouteName="HOME">
      <Stack.Screen
        name="HOME"
        component={Home}
        options={{
          title: '',
          headerLeft: () => <MenuModal />,
          headerStyle: {backgroundColor: headerBackgroundColor},
        }}
      />
      <Stack.Screen
        name="CLASSES"
        component={Classes}
        options={({route}) => ({
          title: route.params.title,
          headerStyle: {backgroundColor: headerBackgroundColor},
          headerTintColor: headerTextColor,
        })}
      />
      <Stack.Screen
        name="SUBJECTS"
        component={Subjects}
        options={({route}) => ({
          title: route.params.title,
          headerStyle: {backgroundColor: headerBackgroundColor},
          headerTintColor: headerTextColor,
        })}
      />
      <Stack.Screen
        name="BOOKS"
        component={Books}
        options={({route}) => ({
          title: route.params.title,
          headerStyle: {backgroundColor: headerBackgroundColor},
          headerTintColor: headerTextColor,
        })}
      />
      <Stack.Screen
        name="CHAPTERS"
        component={Chapters}
        options={({route}) => ({
          title: route.params.title,
          headerStyle: {backgroundColor: headerBackgroundColor},
          headerTintColor: headerTextColor,
        })}
      />
      <Stack.Screen
        name="PDF"
        component={PDF}
        options={{
          title: 'View Pdf',
          headerStyle: {backgroundColor: headerBackgroundColor},
          headerTintColor: headerTextColor,
        }}
      />
    </Stack.Navigator>
  );
};

export default Pages;
