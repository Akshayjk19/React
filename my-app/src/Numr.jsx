import React, { useState } from 'react'

function Numr() {
    const [num, setnum] = useState(0)
  return (
    <div>
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Number :{num}</h5>
  
    <button type="button" class="btn btn-primary" onClick={()=>setnum(num+1)}>+</button>
    <button type="button" class="btn btn-primary" onClick={()=>setnum(num-1)}>-</button>
  </div>
</div>
   

    </div>
  )
}

export default Numr