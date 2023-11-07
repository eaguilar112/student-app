import React from 'react';

const StudentInfo = ({ students }) => {
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