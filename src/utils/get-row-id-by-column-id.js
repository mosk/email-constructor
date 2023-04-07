const getRowIDByColumnID = (id, rows) => {
  const currentColumnIndex = id.split(`_`)[1];
  const parentRowID = id.split(`_`)[0];
  const parentRow =
    rows.find((item) => item.id === parentRowID) !== undefined
      ? rows.find((item) => item.id === parentRowID)
      : false;

  console.log(parentRow);

  const rowID = parentRow ? parentRow.columns[currentColumnIndex].id : false;

  return rowID;
};

export default getRowIDByColumnID;
