import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GetStudent from './components/GetStudent.jsx';
import AddStudent from './components/AddStudent.jsx';
import UpdateStudent from './components/UpadateStudent.jsx';

function App() {
  const [students, setStudents] = useState([]);
  const [editRollNo, setEditRollNo] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getAllStudents');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Management App</h1>

      <AddStudent onAdd={fetchStudents} />

      <GetStudent
        students={students}
        onDelete={fetchStudents}
        onEdit={(rollNo) => setEditRollNo(rollNo)}
      />

      {editRollNo && (
        <UpdateStudent
          rollNo={editRollNo}
          onUpdateSuccess={() => {
            fetchStudents();
            setEditRollNo(null);
          }}
          onCancel={() => setEditRollNo(null)}
        />
      )}
    </div>
  );
}

export default App;
