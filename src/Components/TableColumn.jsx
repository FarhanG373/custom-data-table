export const TableColumn = ({ handleEdit, handleView }) => {
  return [
    {
      title: "id",
      render: (rowData) => rowData.id,
    },
    {
      title: "UserID",
      render: (rowData) => rowData.userId,
    },
    {
      title: "Title",
      render: (rowData) => rowData.title,
    },
    {
      title: "Body",
      render: (rowData) => rowData.body,
    },
    {
      title: "Actions",
      render: (rowData) => (
        <>
          <button onClick={() => handleView(rowData.id)}>View</button>
          <button onClick={() => handleEdit(rowData.id)}>Edit</button>
        </>
      ),
    },
  ];
};
