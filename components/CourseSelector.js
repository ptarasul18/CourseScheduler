import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CourseList from './CourseList';
import Course from './Course';
import { hasConflict } from '../utils/course';

const CourseSelector = ({courses, view}) => {
    const [selected, setSelected] = useState([]);
    // const view = (course) => {
    //   navigation.navigate('CourseDetailScreen', { course });
    // };

    const toggle = course => setSelected(selected => (
        selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
      ));
  
    return (
      <View style={styles.courseList}>
        { 
          courses.map(course => (
            <Course key={course.id} course={course}
                isDisabled={hasConflict(course, selected)} 
                select={toggle}
                isSelected={selected.includes(course)}
                view={view}
            />
          ))
        }
      </View>
    );
  };

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

  export default CourseSelector;