import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  NameInput,
  NumberInput,
  LabelName,
  LabelNumber,
  AddBtn,
} from './ContactForm.styled';

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onAdd(name, number);
    setName('');
    setNumber('');
  };

  // const handleNameChange = e => {
  //   setName(e.currentTarget.value);
  // };
  // const handleNumberChange = e => {
  //   setNumber(e.currentTarget.value);
  // };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelName>
        Name
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+((['
            -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only
            letters, apostrophe, dash and spaces. For example Adrian, Jacob
            Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
        ></NameInput>
      </LabelName>

      <LabelNumber>
        Number
        <NumberInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
        ></NumberInput>
      </LabelNumber>

      <AddBtn type="submit">Add Contact</AddBtn>
    </Form>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
