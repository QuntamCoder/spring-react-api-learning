import { useEffect, useState } from 'react';
import AddStudent from './components/AddStudent.jsx';
import GetStudent from './components/GetStudent.jsx';

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:8080/getAllStudents');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <AddStudent onStudentAdded={fetchStudents} />
      <GetStudent students={students} onDelete={fetchStudents} />
    </div>
  );
}

export default App;
