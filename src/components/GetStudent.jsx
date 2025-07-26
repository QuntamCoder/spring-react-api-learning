import axios from 'axios';

function GetStudent({ students, onDelete }) {
  const DeleteStudent = async (rollNo) => {
    try {
      await axios.delete(`http://localhost:8080/deleteStudent/${rollNo}`);
      onDelete(); // ✅ Trigger refresh
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Roll No</th>
          <th>Address</th>
          <th>Name</th>
          <th>Standard</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.rollNo}>
            <td>{student.rollNo}</td>
            <td>{student.address}</td>
            <td>{student.name}</td>
            <td>{student.std}</td>
            <td>
              <button onClick={() => DeleteStudent(student.rollNo)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default GetStudent;

