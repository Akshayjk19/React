import React, { useState } from "react";
import "./Dataadd.css";

function Dataadd() {
  const [data, setdata] = useState([
    { id: 100, name: "Akshay", Quali: "Bca" },
    { id: 101, name: "Athulya", Quali: "Msc" },
    { id: 102, name: "Arunima", Quali: "Msc" },
    { id: 103, name: "Keerthana", Quali: "Msc" },
    { id: 104, name: "Kavaya", Quali: "Msc" },
  ]);
  const addata = [
    { id: 105, name: "Jhon", Quali: "Bca" },
    { id: 105, name: "Jhon", Quali: "Bca" },
  ];
  const add = () => {
    const adding = [...data, ...addata];
    setdata(adding);
  };
  return (
    <div>
      <div className="tbl">
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Qualification</th>
          </tr>
          {data.map((info) => (
            <tr>
              <td>{info.id}</td>
              <td>{info.name}</td>
              <td>{info.Quali}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>
              <div className="text-center">
                <button style={{ width: "150px" }} onClick={add}>
                  Add
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Dataadd;
