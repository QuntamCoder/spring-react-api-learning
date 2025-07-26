import React, { useState, useEffect } from 'react';

function GetStudent() {
      const [students,setStudents]=useState([])

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await fetch('http://localhost:8080/getAllStudents')
         const data = await response.json()
        setStudents(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData();
  }, [])  
  return (
<div>
      {/* {students.map(student => (
        <div key={student.rollNo}>
          <h1>{student.rollNo}</h1>
          <h2>{student.address}</h2>
          <p>{student.name}</p>
          <p>{student.std}</p>
        </div> */}
        <table>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Address</th>
              <th>Name</th>
              <th>Standard</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.rollNo}>
                <td>{student.rollNo}</td>
                <td>{student.address}</td>
                <td>{student.name}</td>
                <td>{student.std}</td>
              </tr>
            ))}
          </tbody>
        </table>
 
    </div>
  )

}

export default GetStudent