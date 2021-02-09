import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Course from './Course';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';


const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);

// const CourseList = ({courses}) => {
//   const [selectedTerm, setSelectedTerm] = useState('Fall');
//   const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
//   return(
//     <ScrollView>
//     <View style={styles.courseList}>
//       {courses.map(course => <Course key={course.id} course={course} />)}
//     </View>
//     </ScrollView>
//   )
// }

// const CourseList = ({courses}) => {
//   const [selectedTerm, setSelectedTerm] = useState('Fall');
//   //const [selected, setSelected] = useState([]);
//   const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
//   //const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
//   return (
//     <View>
//       <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
//       <CourseSelector courses={termCourses} />
//       <ScrollView>
//         <View style={styles.courseList} >
//           { termCourses.map(course => <Course key={course.id} course={course} />) }
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  
  return (
    <ScrollView>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseSelector courses={termCourses} />
    </ScrollView>
  );
};

  const styles = StyleSheet.create({
    courseButton: {
      flex: 1,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      height: 60,
      padding: 10,
      minWidth: 90,
      maxWidth: 90,
      //backgroundColor: '#66b0ff',
    },
    courseText:{
      color: '#fff',
      fontSize: 12,
      textAlign: 'center',
    },
    courseList: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  export default CourseList;