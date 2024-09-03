import React, { useEffect, useState } from "react";
import axios from "axios";
import { TableColumn } from "./TableColumn";

const ParentComponent = () => {
  const handleEdit = (id) => {
    console.log("Edited row with id:", id);
  };
  const handleView = (id) => {
    console.log("View row with id:", id);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    };
    fetch();
  }, [data]);
  return (
    <table border="1">
      <thead>
        <tr>
          {TableColumn({ handleEdit, handleView }).map((column, index) => (
            <th key={index}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((column) => {
          return (
            <tr key={column.id}>
              {TableColumn({
                handleEdit: handleEdit,
                handleView: handleView,
              }).map((columnData, index) => (
                <td key={index}>{columnData.render(column)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ParentComponent;
