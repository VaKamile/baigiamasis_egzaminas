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
  width: 90%;
  max-width: 364px;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const StyledBox = styled.div`
  width: 500px;
`;
