import React, { useState } from 'react';
import axios from 'axios';

function AddStudent({ onStudentAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    std: '',
    address: ''
  });

  // ✅ This is the missing function!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/addStudent', formData);
      if (onStudentAdded) {
        onStudentAdded(); // Refresh the list in parent
      }
      setFormData({ name: '', std: '', address: '' }); // Clear form
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Name"
        required
      />
      <input
        type="text"
        name="std"
        value={formData.std}
        onChange={handleChange}
        placeholder="Enter Standard"
        required
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Enter Address"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
