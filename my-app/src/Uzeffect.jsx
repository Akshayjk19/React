import React, { useEffect, useState } from "react";

function Uzeffect() {
  const [names, setnames] = useState("john");

  useEffect(() => {
    alert(`Name May change ${names}`);
  }, [names]);

  return (
    <div>
      <h1>{names}</h1>

      <button onClick={() => setnames("Good")}>Change</button>
    </div>
  );
}

export default Uzeffect;
