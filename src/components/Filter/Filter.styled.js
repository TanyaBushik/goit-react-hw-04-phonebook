import styled from '@emotion/styled';

export const Label = styled.label`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 18px;
  font-weight: 400;
`;

export const Input = styled.input`
  width: 200px;
  height: 20px;
  padding: 7px 15px;
  margin-top: 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;

  &:focus {
    border: 2px solid green;
  }
`;
