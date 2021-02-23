import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from './components/screens/ScheduleScreen';
import CourseDetailScreen from './components/screens/CourseDetailScreen';
import { useContext, useState, useEffect } from 'react';
import UserContext from './components/UserContext';
import CourseEditScreen from './components/screens/CourseEditScreen';
import { Button } from 'react-native';
import { firebase } from './utils/firebase.js';
import RegisterScreen from './components/screens/RegisterScreen';

const Stack = createStackNavigator();

const SignInButton = ({ navigation, user }) => (
  user && user.uid
  ? <Button title="Logout" color="#448aff"
      onPress={() => firebase.auth().signOut()}
    />
  : <Button title="SignIn" color="#448aff"
      onPress={() => navigation.navigate('RegisterScreen')}
    />
);

const App = () => {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid);
      const handleData = snap => {
        setUser(uid=auth.uid, ...snap.val());
      }
      db.on('value', handleData, error => alert(error));
      return () => { db.off('value', handleData); };
    } else {
      setUser(null);
    }
  }, [auth]);
  return (
    <UserContext.Provider value={user}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScheduleScreen"
          component={ScheduleScreen}
          options={({navigation}) => ({ 
            title: "Schedule",
            headerRight: () => (
              <SignInButton navigation={navigation} user={user} />
            ),
          })
        }
        />
        <Stack.Screen name="CourseDetailScreen"
          component={CourseDetailScreen}
          options={{ title: 'Course detail'}} 
        />
        <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor'}} 
          />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;