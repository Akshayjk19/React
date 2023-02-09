import React, { useState } from "react";

function Sprad() {
  const [Info, setInfo] = useState([
    { name: "Robertson", age: "22", quali: "Bca" },
    { name: "Athulya", age: "22", quali: "Bca" },
    { name: "Arunima", age: "22", quali: "Bca" },
  ]);
  const nwobj = { name: "Aswin", age: "22", quali: "Bca" };

  const addnow = () => {
    const adding = [...Info, nwobj];
    console.log(adding);
    setInfo(adding);
  };

  return (
    <div style={{ padding: "30px 10px", width: "250px" }}>
      {Info.map((itm) => (
        <div style={{ border: "1px solid black" }}>
          <h1>{itm.name} </h1>
          <p>
            {itm.age} {itm.quali}
          </p>
        </div>
      ))}
      <div>
        <button className="btn btn-primary" onClick={addnow}>
          Add Data
        </button>
      </div>
    </div>
  );
}

export default Sprad;
