import './Table.css';

/* eslint-disable-next-line */
export interface TableProps {
  data: [];
  header
}

export function Table(props: TableProps) {
  return (
    <div>
      <h1>Welcome to Table!</h1>
    </div>
  );
}

export default Table;