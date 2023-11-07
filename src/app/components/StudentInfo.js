import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.firstName} {student.lastName} - DOB: {student.dob}, Grade: {student.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentInfo;