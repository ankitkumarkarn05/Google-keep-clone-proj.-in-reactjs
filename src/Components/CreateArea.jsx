import React, { useState } from "react";
import "./CreateArea.css";

const CreateArea = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const handleChange = (event) => {
              const {name, value} = event.target;

              setNote((preValue) => {
                  return {
                    ...preValue, [name]: value,
                  };
              });
    }
    
    const submitButton = (event) => {
        props.passNote(note)
        event.preventDefault();
        setNote({
            title: "",
            content: "",
        })
    }

      return (
        <div>
            <form>
                <input value={note.title} 
                type="text" placeholder="Title"
                 name="title" onChange={handleChange}
                 />
                <p>
                    <textarea value={note.content} name="content" id="" placeholder="Take a note...." onChange={handleChange}/>
                </p>
                <button onClick={submitButton}>Add</button>
            </form>
        </div>
      )
}

export default CreateArea;