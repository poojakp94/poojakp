import React, {useState} from 'react'
import styled from 'styled-components';
import './contact.css';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const Title = styled.div`
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  padding: 20px 0 10px;
  
`;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameFieldFocused, setFocuseOnNameField] =useState(false)
  const [isEmailFieldFocused, setFocuseOnEmailField] =useState(false)
  const [isMessageFieldFocused, setFocuseOnMessageField] =useState(false)
  
  return (
    <Container>
      <Title>Contact</Title>
      <form className="form-wrapper" name="contact" method="POST" data-netlify="true">
        <input  type="hidden" name="form-name" value="contact" />
        <label className="textarea-label">
          <span
          style={{
            position: "absolute",
            fontSize: isMessageFieldFocused ? "0.8rem" : "1rem",
            transform: isMessageFieldFocused ? "translate(0, -20px)" : "none",
            transition: "font-size 0.3s, transform 0.3s"
            }}
          >
          Message
          </span>
          <textarea name="message" value={message} onChange={event => {event.preventDefault();
            const {value}= event.target;
            setMessage(value)}}
            onFocus={()=>{setFocuseOnMessageField(true)}}
            onBlur={event => {
                if (event.target.value === "") {
                    setFocuseOnMessageField(false);
                }
              }}rows="5">
          </textarea>
        </label>
        <label className="input-label">
          <span
            style={{
              position: "absolute",
              fontSize: isNameFieldFocused ? "0.8rem" : "1rem",
              transform: isNameFieldFocused ? "translate(0, -20px)" : "none",
              transition: "font-size 0.3s, transform 0.3s"
            }}
          >
            Name
          </span>
          <input type="text" name="name" value={name} onChange={event => {event.preventDefault();
            const {value}= event.target;
            setName(value)}}
            onFocus={()=>{setFocuseOnNameField(true)}}
            onBlur={event => {
                if (event.target.value === "") {
                    setFocuseOnNameField(false);
                }
              }}>
          </input>
        </label>
        <label className="input-label">
          <span
          style={{
            position: "absolute",
            fontSize: isEmailFieldFocused ? "0.8rem" : "1rem",
            transform: isEmailFieldFocused ? "translate(0, -20px)" : "none",
            transition: "font-size 0.3s, transform 0.3s"
            }}
          >
            Email
          </span>
          <input type="email" name="email" value={email} onChange={event => {event.preventDefault();
            const {value}= event.target;
            setEmail(value)}}
            onFocus={()=>{setFocuseOnEmailField(true)}}
            onBlur={event => {
                if (event.target.value === "") {
                    setFocuseOnEmailField(false);
                }
              }}>
          </input>
        </label>
        <button type="submit">Send</button>
      </form>
    </Container>
  )
}
