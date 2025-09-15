import { useState } from "react";

function FormComponent() {
  // State to hold input value
  const [name, setName] = useState("");

  // Function to handle input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Form Example</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <p>Hello, {name ? name : "Guest"} 👋</p>
    </div>
  );
}

export default FormComponent;
