import { Table } from '@mui/material'

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
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      </Table>
      </
  );
}

export default Table;
