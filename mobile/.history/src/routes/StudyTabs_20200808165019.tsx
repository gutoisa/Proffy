import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';


const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs(){
    return(
      <Navigator
        tabBarOptions={{
          style:{
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },

          tabStyle:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },

          iconStyle:{
            flex: 0,
            width: 20,
            height: 20,
          },

          labelStyle:{
            fontFamily: 'Archivo_700Bold',
            fontSize: 13,
            marginLeft:16,
          },

          inactiveBackgroundColor: '#fafafc',
          activeBackgroundColor: 'ebebf5',
          inactiveTintColor: '#c1bccc',

        }}
      >
          <Screen name="TeacherList" component={TeacherList} />
          <Screen name="Favorites" component={Favorites} />
      </Navigator>  
    )
}

export default StudyTabs;