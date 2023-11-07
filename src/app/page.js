import React from 'react'
import Link from 'next/link'
import Navbar from 'student-app\src\app\components\Navbar.js'
import StudentList from 'student-app\src\app\components\StudentList.js'
import Footer from 'student-app\src\app\components\Footer.js'
import AddStudent from 'student-app\src\app\components\AddStudent.js'

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