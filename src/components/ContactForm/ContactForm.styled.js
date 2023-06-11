import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const NameInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
  width: 200px;
  height: 20px;
  padding: 7px 15px;
`;

export const NumberInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
  width: 200px;
  height: 20px;
  padding: 7px 15px;
`;

export const LabelName = styled.label`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

export const LabelNumber = styled.label`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

export const AddBtn = styled.button`
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid;
  background-color: white;

  &:hover {
    color: white;
    background-color: blue;
  }
`;
