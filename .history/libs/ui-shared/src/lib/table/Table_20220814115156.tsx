import { Paper, Table as CustomTable, TableContainer, TableHead, TableRow } from '@mui/material'

import './Table.css';

/* eslint-disable-next-line */
export interface TableProps {
  data: [];
  headers: [];
  className?: string;
}

export function Table(props: TableProps) {
  const { data, headers, className } = props;
  return (
    <TableContainer component={Paper}>
      <CustomTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {
            headers.map((item, index) => (
              <TableRow key={index}></TableRow></TableRow>
            )})
          }
        </TableHead>
      </CustomTable>
    </TableContainer>
  );
}

export default Table;
