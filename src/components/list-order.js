import  React from 'react';
import  './list-order.css'
export default function list({ name, direccion, message, id,  deleteUl}) {
return( 
    
   <div className='divpe' > 
 
   <p>   <button className='buttonb'  class="btn btn-light" onClick={()=>deleteUl(id)}>x</button>{id})Name: {name}- Order: {message} - <span>  </span> Direction: {direccion}</p>
    </div>
    )
   
}
    


