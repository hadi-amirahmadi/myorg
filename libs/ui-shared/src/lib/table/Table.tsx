import { Paper, Table as CustomTable, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

import './Table.css';

type obj = { id: number; label: string; city: string; flag: string; cl: string; }

/* eslint-disable-next-line */
export interface TableProps {
  children: React.ReactNode;
  headers: obj[];
  className?: string;
}

export function Table(props: TableProps) {
  const { children, headers, className } = props;
  return (
    <TableContainer component={Paper}>
      <CustomTable className={className} sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {
            headers.map(({label, id, city, flag, cl}: any) => (
              <TableRow key={id}>
                <TableCell align="center">{label}</TableCell>
                <TableCell align="center">{city}</TableCell>
                <TableCell align="center">{flag}</TableCell>
                <TableCell align="center">{cl}</TableCell>
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
