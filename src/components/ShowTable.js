import React, { useContext, useState } from 'react';
import { AppContext } from '../Context';

const ShowTable = () => {
  const [data, setData] = useContext(AppContext);
  const [updateBody, setUpdateBody] = useState('');
  // console.log(data);

  function deleteRow(index) {
    setData(data.filter((item, idx) =>  index !== idx ));
  }
  
  function editBody(index) {
    setData(data.map((value, idx) =>  {if(index === idx){
      return ({...value, body:updateBody});
    }
    else{
      return value;
    }
  } ));
  }
  return (
    <div className='table-responsive'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Delete</th>
            <th scope="col">Update Body</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index+1}</th>
                  <td>{item.userId}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td><button className="btn btn-danger" onClick={() => { deleteRow(index) }}>Delete</button>;</td>
                  <td><input type="text" onChange={(e)=>{setUpdateBody(e.target.value)}} />
                    <button className="btn btn-primary" onClick={() => { editBody(index) }}>Edit Body</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowTable
