import Label from '../../atoms/Label';
import {
  StyledLabelsWrapper,
  StyledInputName,
  StyledInputSurname,
  StyledInputEmail,
  StyledInputAge,
} from '../TableRowHead/style';

const TableRowHead = () => {
  return (
    <StyledLabelsWrapper>
      <StyledInputName>
        <Label text='Vardas' />
      </StyledInputName>
      <StyledInputSurname>
        <Label text='Pavardė' />
      </StyledInputSurname>
      <StyledInputEmail>
        <Label text='El. paštas' />
      </StyledInputEmail>
      <StyledInputAge>
        <Label text='Amžius' />
      </StyledInputAge>
    </StyledLabelsWrapper>
  );
};

export default TableRowHead;
