import TableRowHead from '../TableRowHead';
import TableRowBody from '../TableRowBody';

import { StyledDivider, StyledTable } from './style';

export interface ITableProps {
  className: string;
}

const Table: React.FC<ITableProps> = ({ className }) => {
  return (
    <>
      <StyledTable className={className}>
        <TableRowHead />
        <StyledDivider></StyledDivider>
        <TableRowBody />
      </StyledTable>
    </>
  );
};

export default Table;
