import React, { useState } from "react";
import reactLogo from "./assets/react.png";
import "./App.css";
import emailjs from "emailjs-com";

function App() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent default form reload

    if (email) {
      const templateParams = { email };

      emailjs
        .send(
          "service_bqvx0ii", // Replace with your EmailJS service ID
          "template_hmzdn1h", // Replace with your EmailJS template ID
          templateParams,
          "NsMvQnaxN8Ow5yJhE" // Replace with your EmailJS public key
        )
        .then(
          (response) => {
            console.log("Email sent successfully!", response);
            alert("Thank you for signing up! We will contact you soon.");
            setEmail(""); // Clear input field
          },
          (error) => {
            console.log("Email send error:", error);
            alert("There was an error. Please try again later.");
          }
        );
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="page-container">
      <img src={reactLogo} className="logo" alt="React logo" />
      <h1 className="title">Coming Soon</h1>

      <div className="form-wrapper">
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          <button type="submit">GET IN TOUCH</button>
        </form>
      </div>
    </div>
  );
}

export default App;
