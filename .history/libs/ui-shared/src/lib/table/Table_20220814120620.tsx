import { Paper, Table as CustomTable, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

import './Table.css';

/* eslint-disable-next-line */
export interface TableProps {
  children: React.ReactNode;
  headers: [];
  className?: string;
}

export function Table(props: TableProps) {
  const { children, headers, className } = props;
  return (
    <TableContainer component={Paper}>
      <CustomTable className={className} sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {
            headers.map(({label, id, city, }: any) => (
              <TableRow key={id}>
                <TableCell align="right">{label}</TableCell>
              </TableRow>
            ))
          }
        </TableHead>
        <TableBody>
          { children }
        </TableBody>
      </CustomTable>
    </TableContainer>
  );
}

export default Table;
