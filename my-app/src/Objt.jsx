import React from 'react'

function Objt() {
   const emp1=[{id:2,fname:"zani",pic:"https://media.istockphoto.com/id/931479532/photo/mountain-valley-during-sunrise-beutiful-natural-landsscape-in-the-summer-time.jpg?b=1&s=612x612&w=0&k=20&c=nOMomwI-6QWNhKIl1leUdOCszBsKSEJswdezZVXUxdc="},{id:2,fname:"zani",pic:"https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/316e62a71020a924f9f663b6ca6b7eda/Fresh_Stock_Content.jpg"}]
// const val=new (emp1)
// id.val=ob;
// console.log(ob)
// console.log(emp1)

  return (
emp1.map((va)=>
    <div>
   <div className='float-start w-25 p-1'>
           <div className="card ">   
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <img src={va.pic}  width="100%"/>
              <p className="card-text">{va.id},{va.fname}</p>
              <a href="#!" class="btn btn-primary">Button</a>
    
            </div>
          </div>
          </div>
      </div>
   
  ))
}

export default Objt