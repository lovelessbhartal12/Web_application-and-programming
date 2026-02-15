import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Welcome, ${formData.username}! 🎉`);

    console.log(formData);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{ marginTop: "10px" }}
          />
        </div>

        <div>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}
            style={{ marginTop: "10px" }}
          />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Register
        </button>
      </form>

      {/* ✅ Display Form Data */}
      <h3 style={{ marginTop: "20px" }}>Form Data:</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}

export default RegistrationForm;
