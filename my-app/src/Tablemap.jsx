import React, { useState } from 'react'

function Tablemap() {
    const [data, setdata] = useState([{name:'Kavya',Course:'Mern'},{name:'Keerthana',Course:'Mern'},{name:'Arunima',Course:'Mern'},{name:'Athulya',Course:'Mern'},{name:'Akshay',Course:'Mern'}])
  return (
    <div>
    <table>
    <tr>
    <th>Name</th>
    <th>Course</th>
    </tr>
    {data.map((info)=>
    <tr>
    <td>{info.name}</td>
    <td>{info.Course}</td>
    </tr>
    )}
    </table>
    </div>
  )
}

export default Tablemap