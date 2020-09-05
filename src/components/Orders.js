import React, {useState} from 'react';
import List from './list-order'
import './orders.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'

 function Order(){
const [orderList, setList] =useState([{id:1, message:'it works ', direccion:'mirave', name:'ayelen'}])
const [input, setInput]=useState('');
const [Name, setName]=useState('');
const [direccion, setDireccion]=useState('');



const handleSubmit = (event, orderList, setList, input, setInput, direccion, setDireccion, Name, setName) =>{
       event.preventDefault();
       const id= (orderList.length) ? orderList[orderList.length - 1].id + 1 : 0
       setList([...orderList, {id:id, message:input, direccion:direccion, Name:Name}])
       setInput('')
       setDireccion('')
       setName('')
}


const handleChange =(e)=>{
   setInput(e.target.value)
}  
const handleChange2=(p) =>{ 
       setDireccion(p.target.value)
}
const handleChange3=(c) =>{ 
       setName(c.target.value)
}



const deleteUl=(id, orderList, setList)=>{
       setList(orderList.filter((p=>p.id!==id)))
}

return ( 
  <div>
         <nav>  <h2 class>List your orders</h2></nav>
       
       <form onSubmit={(e)=>handleSubmit(e, orderList, setList, input, setInput, direccion, setDireccion, Name, setName)} >
      <input value={Name} onChange={handleChange3} placeholder='Name...'></input>
       <textarea value={input} onChange={handleChange} placeholder='Order...'> </textarea>  
       <input value={direccion} onChange={handleChange2} placeholder='Direction...'></input>
      <button  class="btn btn-outline-light">ADD</button>     
       </form>
      <div> 
  {orderList.map(a=>(
           <List  name={a.name} message={a.message} id={a.id} direccion={a.direccion} deleteUl={(id)=>deleteUl(id, orderList, setList)}/>
    ))}
     </div>


       </div> 
       
      
          )
}
export default Order;