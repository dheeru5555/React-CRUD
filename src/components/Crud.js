
import React from 'react';
import axios from 'axios';
import Insert from './Insert';
import { useState, useEffect } from 'react' 

const Crud = () => 
 {
  
  var count = 0;
  count = count+1;
  
  const [data, setData] = useState([]);  
  useEffect(() => {  
  const GetData = async () => {  
    const res = await axios.get('http://localhost:4000/posts');  
    console.log(res)
    setData(res.data.posts);  
  };  
  GetData();  

 },[]);  

const deleteData = (_id) =>
  {
    axios.delete('http://localhost:4000/posts/'+_id)
    .then((result)=>{
      console.log('Succes')
    })
    .catch(()=>{
      alert('Error in the Code');
    });
 };

  return (
   <div class="container">
     <div class="row">
      <div class="col-sm-4">
        <h4 class="text-center  ml-4 mb-5">Insert Records</h4>
        <Insert/>
     </div>

    <div class="col-sm-8">
      <h4 class="text-center  ml-4  mb-5">View Records</h4>
     <table class="table table-hover table-bordered ml-4 ">
        <thead>
        <tr>
            <th>No</th>
            <th>Id</th>
            <th>Title</th>
            <th>Auther</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
        </thead>
         <tbody>
            {data.map((item, idx) => {  
              
            return  <tr>          
             <td>{count++}</td>   
             <td>{item._id}</td>   
             <td>{item.name}</td>
             <td>{item.email}</td>
             <td>{item.user}</td>
             <td>
              <button onClick={() => { data(item._id) }}><i class="fa fa-edit"></i></button>  
              <button  type="submit" onClick={() => { deleteData(item._id) }}><i class="fa fa-trash"></i></button>  
             </td>
             </tr>  
             })}        
        </tbody>
     </table>
    </div>
 </div>
</div>
    );
}
export default Crud;