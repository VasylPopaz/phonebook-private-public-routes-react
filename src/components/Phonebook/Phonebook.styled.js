import styled from 'styled-components';

export const Form = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 18px;
  font-weight: 600;
`;

export const FormInput = styled.input`
  outline: lightblue;
  font-size: 18px;
  padding: 4px 8px;
`;
export const AddButton = styled.button`
  padding: 12px 8px;
  border-radius: 10px;
  background-color: lightgreen;
  color: black;
  font-weight: 600;
  text-transform: capitalize;
  transition: all 350ms ease;

  &:hover,
  &:focus {
    background-color: green;
    color: white;
  }
`;
