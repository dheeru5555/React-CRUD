import react from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react' 

const Insert = (props)=>{

  const [employee, setemployee] = useState({Title:'',Auhtor:'',Description:''});

  const submitForm=(e)=>{
    e.preventDefault();  

    const sendData = {Title:employee.title,Author:employee.author,Description:employee.desc}; 

    axios.post('http://localhost:3000/posts', sendData)  
          .then((result) => {  
            console.log('Success');
          })
          .catch(()=>{
            console.log('error');
          }); 
   }; 

   const inputValue =(e)=>{
       var name = e.target.name;
       var value = e.target.value;
       setemployee({...employee, [name]:value });
   }

  return(
   
        <form  onSubmit={submitForm}>
            
            <div class="form-group">
            <input type="text"  onChange={inputValue} class="form-control  mb-4" name="title" placeholder="Enter title" value={employee.title} />
            </div>

            <div class="form-group">
            <input type="text" onChange={inputValue} class="form-control  mb-4" name="author" placeholder="Enter author" value={employee.author} />
            </div>

            <div class="form-group">
            <input type="text" onChange={inputValue}  class="form-control mb-4" name="desc" placeholder="Enter desc" value={employee.desc} />
            </div>

            <button type="submit" name="submit" class="btn btn-primary btn-block">Submit</button>
        </form>

  )
}

export default Insert;