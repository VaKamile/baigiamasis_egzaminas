import { styled } from 'styled-components';

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

export const StyledInputWrapper = styled.div`
  margin-top: 5px;
  max-width: 364px;
  @media (min-width: 768px) {
    width: 40%;
  }
`;
export const StyledFormButton = styled.div``;
