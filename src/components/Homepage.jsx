import React, { useState } from 'react'
import Books from './Books'

import Details from './Details'
import './Homepage.css'

let Homepage = ({searchhandler}) =>{
    let [search,setsearch] = useState("")
   let changeHandler = (e) =>{
    setsearch(e.target.value)

   }
   


    return(
        <div>
            <pre>{JSON.stringify(search)}</pre>
           <div className='image'>
            <div className='heading-div'>
                <h1 className='text'>BOOK SEARCH</h1>
               </div>
               <div className='search'>
                <input type="text" placeholder='Search for a book'  onChange={changeHandler}/> 
                {/* <button onClick={()=>{searchhandler(id)}}><i  className="fa-solid fa-magnifying-glass"></i></button> */}
               </div>
               <div>
               {/*   <Books/>  */} 
                <Details change={changeHandler}/>
               </div>

           </div>
        </div>
    )
}
export default Homepage