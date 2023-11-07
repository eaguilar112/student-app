import Image from 'next/image'
import React from 'react'
import Navbar from 'student-app\src\app\components\';
import StudentList from 'student-app\src\app\components\';
import Footer from 'student-app\src\app\components\';
import AddStudent from 'student-app\src\app\components\';

export default function Home() {
  const [students, setStudents] = React.useState(studentsData);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div>
      <Navbar />
      <h1>Student List</h1>
      <StudentList students={students} />
      <h2>Add a New Student</h2>
      <StudentForm addStudent={addStudent} />
      <Footer />
    </div>
  );
}