import React from "react";
import "./Note.css";


const Note = (props) => {
     const deleteNote = () => {  
          props.deleteItem(props.id);
     
     };
     return (
        <div className="note">
             <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button  className="btn" onClick={deleteNote}>
               <i className="fa-solid fa-trash"/>
            </button>
        </div>
     );
}
export default Note; 