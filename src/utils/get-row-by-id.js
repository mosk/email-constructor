const getRowByID = (rows, id) => {
  let row;

  for (let i = 0; i < rows.length; i++) {
    const currentRow = rows[i];

    for (let j = 0; j < currentRow.columns.length; j++) {
      const currentColumn = currentRow.columns[j];

      if (currentColumn.id === id) {
        row = currentColumn;
      }
    }
  }

  return row;
};

export default getRowByID;
