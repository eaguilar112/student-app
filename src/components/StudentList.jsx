const fs = require('fs');

const jsonFilePath = 'student-app\students.json';

fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
  } else {
    const jsonData = JSON.parse(data);
    // Display the JSON data in the console or use it as needed
    console.log(jsonData); // This logs the JSON data to the console
  }
});

export default StudentList;