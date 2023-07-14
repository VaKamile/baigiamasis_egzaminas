import React, { useState } from 'react';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import axios from 'axios';
import { StyledInputsWrapper, StyledInputWrapper } from './style';

export type FormValue = {
  _id?: string;
  name: string;
  surname: string;
  email: string;
  age: number;
};

type FormProps = {
  onSubmitSuccess: () => void;
};

const Form: React.FC<FormProps> = ({ onSubmitSuccess }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleFormSubmit = async () => {
    try {
      const formValue: FormValue = {
        name,
        surname,
        email,
        age: parseInt(age),
      };

      const response = await axios.post(
        'http://localhost:5000/api/users',
        formValue
      );

      console.log('Data sent to the database:', response.data);
      await onSubmitSuccess();

      setName('');
      setSurname('');
      setEmail('');
      setAge('');
    } catch (error) {
      console.error('Error sending data to the database:', error);
    }
  };

  return (
    <StyledInputsWrapper>
      <StyledInputWrapper>
        <Label className='label' text='Vardas' />
        <Input
          className='input is-small'
          type='text'
          value={name}
          setValue={setName}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <Label className='label' text='Pavardė' />
        <Input
          className='input is-small'
          type='text'
          value={surname}
          setValue={setSurname}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <Label className='label' text='El. paštas' />
        <Input
          className='input is-small'
          type='text'
          value={email}
          setValue={setEmail}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <Label className='label' text='Amžius' />
        <Input
          className='input is-small'
          type='text'
          value={age}
          setValue={setAge}
        />
      </StyledInputWrapper>
      <StyledInputWrapper
        className='js-modal-trigger button is-info is-rounded is-responsive'
        data-target='modal-js-example'
        onClick={handleFormSubmit}
      >
        Pridėti naują
      </StyledInputWrapper>
    </StyledInputsWrapper>
  );
};

export default Form;
