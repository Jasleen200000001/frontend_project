import React, { useState } from "react";

function InputForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Age:
        <select
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        >
          <option value="">Select Age</option>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </label>
      <br />

      <label>
        Upload File:
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
