// import { useSelector } from 'react-redux';

import styles from './structures.module.css';
import Item from './item/item';

const Structures = () => {
  const rows = [
    {
      columns: [{ type: 1 }],
    },
    {
      columns: [{ type: 2 }, { type: 3 }],
    },
    {
      columns: [{ type: 4 }, { type: 5 }, { type: 6 }],
    },
    {
      columns: [{ type: 7 }, { type: 8 }, { type: 9 }, { type: 10 }],
    },
  ];

  return (
    <ul className={styles.wrapper}>
      {rows.map((row) => (
        <li key={row.columns.length} className={styles.col}>
          <Item columns={row.columns} />
        </li>
      ))}
    </ul>
  );
};

export default Structures;
