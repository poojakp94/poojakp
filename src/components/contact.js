import React, {useState} from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`
const FieldWrapper = styled.form`
  width: calc(100% - 100px);
  border-radius: var(--card-border-radius);
  box-shadow: inset 0 0.75rem 2rem rgba(229, 225, 197, 0.7);
  padding: 50px;
  display: flex;
  flex-direction:column;
  background-color:#fff;
  @media (min-width: 768px) {
    width: 25%;
  }  
`
const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(229, 225, 187, 0.8);
  line-height: 1.5rem;
  outline: none;
`
const Label = styled.label`
  position: relative;
  margin: 20px 0;
`
const InputLabel = styled(Label)`
  align-self: flex-end;
`
const Textarea = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  line-height: 4ch;
  background-image: linear-gradient(transparent, transparent calc(4ch - 1px), rgba(229, 225, 187, 0.8) 0px);
  background-size: 100% 4ch;
`
const Button = styled.button`
  padding: 8px 20px;
  border: 1px solid rgba(229, 225, 187, 0.8);
  background: #fff;
  outline: none;
  line-height: 1.5rem;
  align-self: flex-end;
  &:hover {
    color: blueviolet;
    border: 1px solid blueviolet;
  }
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
      <FieldWrapper name="contact" method="POST" data-netlify="true" onSubmit="submit">
        <input  type="hidden" name="form-name" value="contact" />
        <Label>
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
          <Textarea name="message" value={message} onChange={event => {event.preventDefault();
            const {value}= event.target;
            setMessage(value)}}
            onFocus={()=>{setFocuseOnMessageField(true)}}
            onBlur={event => {
                if (event.target.value === "") {
                    setFocuseOnMessageField(false);
                }
              }}rows="5">
          </Textarea>
        </Label>
        <InputLabel>
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
          <Input type="text" name="name" value={name} onChange={event => {event.preventDefault();
            const {value}= event.target;
            setName(value)}}
            onFocus={()=>{setFocuseOnNameField(true)}}
            onBlur={event => {
                if (event.target.value === "") {
                    setFocuseOnNameField(false);
                }
              }}>
          </Input>
        </InputLabel>
        <InputLabel>
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
          <Input type="email" name="email" value={email} onChange={event => {event.preventDefault();
            const {value}= event.target;
            setEmail(value)}}
            onFocus={()=>{setFocuseOnEmailField(true)}}
            onBlur={event => {
                if (event.target.value === "") {
                    setFocuseOnEmailField(false);
                }
              }}>
          </Input>
        </InputLabel>
        <Button type="submit">Send</Button>
      </FieldWrapper>
    </Container>
  )
}
