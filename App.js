import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from './components/screens/ScheduleScreen';
import CourseDetailScreen from './components/screens/CourseDetailScreen';
import { useContext, useState, useEffect } from 'react';
import UserContext from './components/UserContext';
import CourseEditScreen from './components/screens/CourseEditScreen';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState({ role: 'admin'});
  return (
    <UserContext.Provider value={user}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScheduleScreen"
          component={ScheduleScreen}
          options={{ title: 'Schedule'}}
        />
        <Stack.Screen name="CourseDetailScreen"
          component={CourseDetailScreen}
          options={{ title: 'Course detail'}} 
        />
        <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor'}} 
          />
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;