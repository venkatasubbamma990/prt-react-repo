import React from "react";
import book1 from './images/book1.webp'
import book2 from './images/book2.jpg'
import book3 from './images/book3.jpg'
import book4 from './images/book4.jpg'
import book5 from './images/book5.jpg'
import book6 from './images/book6.jpg'
import book7 from './images/book7.jpg'
import book8 from './images/book8.jpg'
import './Books.css'
let Books = () =>{
    return(
        <div className="books">
            <div className="book-self">
            <img src={book1} alt="book1" />
            <img src={book2} alt="book2" />
            <img src={book3} alt="book3" />
            <img src={book4} alt="book4" />
            <img src={book5} alt="book5" />
            <img src={book6} alt="book6" />
            <img src={book7} alt="book7" />
            <img src={book8} alt="book8" />

            </div>
            <div className="author">
                

            </div>

        </div>
    )
}
export default Books;