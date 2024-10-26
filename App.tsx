import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, TextInput, Button, ScrollView } from 'react-native';

const courses = {
  "First Aid": { description: "Learn essential first aid skills.", price: "R 1500" },
  "Sewing": { description: "Master the art of sewing.", price: "R 1500" },
  "Life Skills": { description: "Develop crucial life skills.", price: "R 1500" },
  "Landscaping": { description: "Learn landscaping techniques.", price: "R 1500" },
  "Child Minding": { description: "Get trained in child care.", price: "R 750" },
  "Garden Maintenance": { description: "Understand garden upkeep.", price: "R 750" },
  "Cooking": { description: "Cook delicious meals.", price: "R 750" },
};

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [courseDetails, setCourseDetails] = useState<{ description: string, price: string } | null>(null);
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleCourseChange = (itemValue: string) => {
    setSelectedCourse(itemValue);
    setCourseDetails(courses[itemValue] || null); // Update course details based on selection
  };

  const handleJoinCourse = () => {
    alert(`You have requested to join ${selectedCourse} with the email: ${email}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.jpg')} // Replace with your logo path
          style={styles.logo}
        />
      </View>
      <Text style={styles.heading}>Courses</Text>
      <View style={styles.courseList}>
        <Text style={styles.courseItem}>1. First Aid</Text>
        <Text style={styles.courseItem}>2. Sewing</Text>
        <Text style={styles.courseItem}>3. Life Skills</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>Six Week Courses</Text>
      </View>
      <View style={styles.courseList}>
        <Text style={styles.courseItem}>4. Landscaping</Text>
        <Text style={styles.courseItem}>5. Child Minding</Text>
        <Text style={styles.courseItem}>6. Garden Maintenance</Text>
        <Text style={styles.courseItem}>7. Cooking</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxText}>Six Month Courses</Text>
      </View>
      <View style={styles.inquireBox}>
        <Text style={styles.inquireHeading}>Inquire About a Course</Text>
        <Picker
          selectedValue={selectedCourse}
          style={styles.picker}
          onValueChange={handleCourseChange}
        >
          <Picker.Item label="Select a Course" value="" />
          {Object.keys(courses).map(course => (
            <Picker.Item key={course} label={course} value={course} />
          ))}
        </Picker>
        {courseDetails && (
          <View style={styles.courseDetails}>
            <Text style={styles.detailHeading}>Course Description:</Text>
            <Text>{courseDetails.description}</Text>
            <Text style={styles.detailHeading}>Price:</Text>
            <Text>{courseDetails.price}</Text>
          </View>
        )}
        <TextInput
          style={styles.input}
          placeholder="Name and Surname"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Email address"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Join Course" onPress={handleJoinCourse} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F4F5', // Light background color
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center', // Center the logo horizontally
    marginBottom: 20,
  },
  logo: {
    width: 250,
    height: 250,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 15,
  },
  courseList: {
    marginBottom: 20,
    alignSelf: 'flex-start', 
  },
  courseItem: {
    fontSize: 18,
    color: '#333',
    marginVertical: 5,
    textAlign: 'left', 
  },
  box: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    alignSelf: 'stretch', 
  },
  boxText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  inquireBox: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignSelf: 'stretch',
  },
  inquireHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  courseDetails: {
    marginTop: 15,
  },
  detailHeading: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default App;
