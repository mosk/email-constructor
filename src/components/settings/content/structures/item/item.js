import { useDrag } from 'react-dnd';

import PropTypes from 'prop-types';
import styles from './item.module.css';

const Item = ({ columns }) => {
  // dnd
  const [{ isDrag }, dragRef] = useDrag({
    type: 'row',
    item: { columns },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div
      className={`${styles.wrapper} ${isDrag ? styles.dragged : ''}`}
      ref={dragRef}
    >
      {[...columns].map((col) => {
        return <span className={styles.col} key={col.type} />;
      })}
    </div>
  );
};

export default Item;

Item.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
};
