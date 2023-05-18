import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../Styles/contact.css"

const ContactMe = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSubjectChange = e => {
    setSubject(e.target.value);
  };

  const handleMessageChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_vuwtte9', 'template_t4eyvqj', e.target, 'r-Gvk4GgvMcfkmqLp')
      .then((result) => {
        console.log(result.text);
        window.alert('Message sent successfully!');
        setName('');
        setSubject('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-me">
      <h2 id='title'>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__group field">
          <input
            required
            placeholder="Name"
            className="form__field"
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <label className="form__label" htmlFor="name">Name</label>
        </div>
        <div className="form__group field">
          <input
            required
            placeholder="Subject"
            className="form__field"
            type="text"
            name="subject"
            value={subject}
            onChange={handleSubjectChange}
          />
          <label className="form__label" htmlFor="subject">Subject</label>
        </div>
        <div className="form__group field">
          <textarea
            required
            placeholder="Message"
            className="form__field"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
          <label className="form__label" htmlFor="message">Message</label>
        </div>
        <button type="submit" id='form-btn'>Submit</button>
      </form>
    </div>
  );
};

export default ContactMe;
