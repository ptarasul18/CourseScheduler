import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CourseList from '../CourseList';
import { useContext, useState, useEffect } from 'react';
import CourseSelector from '../CourseSelector';
import UserContext from '../UserContext';
import CourseEditScreen from './CourseEditScreen';

const schedule = {
  title: "CS Courses for 2018-2019",
  "courses": [
    {
      "id": "F101",
      "title": "Computer Science: Concepts, Philosophy, and Connections",
      "meets": "MWF 11:00-11:50"
    },
    {
      "id": "F110",
      "title": "Intro Programming for non-majors",
      "meets": "MWF 10:00-10:50"
    },
    {
      "id": "F111",
      "title": "Fundamentals of Computer Programming I",
      "meets": "MWF 13:00-13:50"
    },
    {
      "id": "F211",
      "title": "Fundamentals of Computer Programming II",
      "meets": "TuTh 12:30-13:50"
    }
  ]
};


const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
);
// const CourseList = ({courses}) => (
//   <ScrollView>
//   <View style={styles.courseList}>
//     {courses.map(course => <Course key={course.id} course={course} />)}
//   </View>
//   </ScrollView>
// );
// const getCourseNumber = course => (
//   course.id.slice(1)
// );

// const Course = ({course}) => (
//   <TouchableOpacity style={styles.courseButton}>
//     <Text style={styles.courseText}>
//       {`CS ${getCourseNumber(course)}\n${course.meets}`}
//     </Text>
//   </TouchableOpacity>
// );


const ScheduleScreen = ({navigation}) => {
  const user = useContext(UserContext);
  const [schedule, setSchedule] = useState({title: '', courses: [] });
  // const view = (course) => {
  //   navigation.navigate('CourseDetailScreen', { course });
  // };
  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';
  const canEdit = user && user.role === 'admin';
  const view = (course) => {
    navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  };  
  useEffect(() => {
    const fetchSchedule =  async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchSchedule();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  },
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  // courseButton: {
  //   flex: 1,
  //   borderRadius: 5,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   margin: 10,
  //   height: 60,
  //   padding: 10,
  //   minWidth: 90,
  //   maxWidth: 90,
  //   backgroundColor: '#66b0ff',
  // },
  // courseText:{
  //   color: '#fff',
  //   fontSize: 12,
  //   textAlign: 'center',
  // },
});

export default ScheduleScreen;