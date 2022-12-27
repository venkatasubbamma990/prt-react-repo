import React from "react";
import './Details.css'
import book1 from './images/book1.webp'
import book2 from './images/book2.jpg'
import book3 from './images/book3.jpg'
import book4 from './images/book4.jpg'
import book5 from './images/book5.jpg'
import book6 from './images/book6.jpg'
import book7 from './images/book7.jpg'
import book8 from './images/book8.jpg'
import { useState } from "react";
let Details = ({changeHandler}) =>{
    let [state,setstate] = useState({
        Books:[
            {
                id:"101",
                image:book1,
                title:"book1",
                Author:"Author1",
                Count:234,
                Rating:4
            },
            {
                id:"102",
                image:book2,
                title:"book2",
                Author:"Author2",
                Count:234,
                Rating:4
            },
            {
                id:"103",
                image:book3,
                title:"book3",
                Author:"Author3",
                Count:234,
                Rating:4
            },
            {
                id:"104",
                image:book4,
                title:"book4",
                Author:"Author4",
                Count:234,
                Rating:4
            },
            {
                id:"105",
                image:book5,
                title:"book5",
                Author:"Author5",
                Count:234,
                Rating:4
            },
            {
                id:"106",
                image:book6,
                title:"book6",
                Author:"Author6",
                Count:234,
                Rating:4
            },
            {
                id:"107",
                image:book7,
                title:"book7",
                Author:"Author7",
                Count:234,
                Rating:4
            },
            {
                id:"106",
                image:book6,
                title:"book7",
                Author:"Author7",
                Count:234,
                Rating:4
            }
        ]

    })
    let {Books} = state
    let searchhandler = (id) =>{
        let items = Books.map((book)=>{
            if(book.id === book.sno){
                return(
                    setstate((state)=>({
                        Books:[...items]
                       }))
                   
                )
            }
        })

    }


    return(
        <div>
           
            <div className="books-rack">
           

                {
                    Books.map((book)=>{
                        return(
                           
                            <div>

                               <span className="details-image"> <img src={book.image} alt="i"/></span>
                                <div className="details">
                                    <h4>{book.id}</h4>
                                    <h4>{book.title}</h4>
                                    <h4>{book.Author}</h4>
                                    <h4>pageCount:{book.Count}</h4>
                                    <h4>Rating:{book.Rating}</h4>
                                   
                                </div>
                               
                                </div>

                        )
                    })
                   
                }
                  
            </div>
           
           <div search={searchhandler}>
           
           </div>

        </div>
    )
}
export default Details