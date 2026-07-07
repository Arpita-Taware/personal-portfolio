import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/contact`,
        form
      );

      console.log(res.data);

      setSuccess("✅ Thank you! Your message has been sent successfully.");

      setForm({
        name: "",
        email: "",
        message: ""
      });

      setTimeout(() => {
        setSuccess("");
      }, 4000);

    } catch (err) {
      console.error(err);

      setError("❌ Failed to send message. Please try again.");

      setTimeout(() => {
        setError("");
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <form
        onSubmit={handleSubmit}
        id="contact-form"
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />

        <button
          type="submit"
          className="btn contact-btn"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;