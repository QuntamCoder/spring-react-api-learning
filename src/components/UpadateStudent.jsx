import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateStudent({ rollNo, onUpdateSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    std: '',
    address: ''
  });
useEffect(() => {
  axios.get(`http://localhost:8080/getStudent/${rollNo}`)
    .then(response => {
      const data = response.data;
      setFormData({
        name: data.name ?? '',
        std: data.std ?? '',
        address: data.address ?? ''
      });
    })
    .catch(error => {
      console.error('Error fetching student:', error);
    });
}, [rollNo]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/updateStudent/${rollNo}`, formData);
      onUpdateSuccess();
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Student (Roll No: {rollNo})</h3>
      <input
        type="text"
        name="name"
        value={formData.name || ''}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="std"
        value={formData.std  || ''}
        onChange={handleChange}
        placeholder="Standard"
      />
      <input
        type="text"
        name="address"
        value={formData.address || ''}
        onChange={handleChange}
        placeholder="Address"
      />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default UpdateStudent;
