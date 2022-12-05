import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

import {
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';

const styles = {
    form: {
    padding: '40px'
    }
};


function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

    return (
        <div style={styles.form}>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                        onBlur={handleChange}
                        defaultValue={name}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleName">
                        Name
                    </Label>
                    <Input
                        id="examplename"
                        name="name"
                        placeholder="name placeholder"
                        type="name"
                        onBlur={handleChange}
                        defaultValue={email}
                    />\
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">
                        Text Area
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        onBlur={handleChange}
                        defaultValue={message}
                    />
                </FormGroup>
            </Form>
        </div>

    )
}

export default Contact;
