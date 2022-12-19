import React,{useState} from "react";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Note from "./Components/Note";

const App = () =>{

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
   //alert("clicked");
       setAddItem((prevValue) => {
        return [...prevValue, note];
       });
  };
 
  const onDelete = (id) => {
      setAddItem((olddata) =>
          olddata.filter((currdata, indx)=>{
               return indx !== id;
          })
      );

  };

    return (
      <div className="App">
       <Header/>
       <CreateArea passNote={addNote}/>
       {  addItem.map((val, index)=>{
                return <Note
                   key={index}
                   id={index}
                   title={val.title}
                   content={val.content}
                   deleteItem={onDelete}
                />
            })
        }
 
       </div>
      
    );
}
export default App;