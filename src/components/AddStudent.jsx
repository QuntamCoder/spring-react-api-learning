import React from 'react';
import axios from 'axios';

function AddStudent() {
  const [formData, setFormData] = React.useState({
    address: '',
    std: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/addStudent', formData);
      if (response.status === 200) {
        console.log('Student added successfully:', response.data);
      }
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Enter Name"
/>
<input
  type="text"
  name="address"
  value={formData.address}
  onChange={handleChange}
  placeholder="Enter Address"
/>
<input
  type="text"
  name="std"
  value={formData.std}
  onChange={handleChange}
  placeholder="Enter Standard"
/>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
