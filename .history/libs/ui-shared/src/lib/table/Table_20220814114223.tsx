import {} from 

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
    <div>
      <h1>Welcome to Table!</h1>
    </div>
  );
}

export default Table;
