import React, { useState } from "react";
import { Container } from 'reactstrap';
import Form from "./components/Form";
import TableNotes from "./components/TableNotes";

import Title from "./components/Title";

function App() {

  const [value, setValue] = useState('');
  const [notesBankCounted, setNotesBankCounted] = useState([])

  let notesBank = [100, 50, 10, 5, 1];
  
  const CountBankNotes = (value)=>{
    
    let notesCounted = [];

    for (let i = 0; i < notesBank.length; i++){

      let noteBank = notesBank[i];

      let counter = 0;
      let valueCalc = value;


      do{

        valueCalc = valueCalc - noteBank;
        if(valueCalc >= 0){
          counter ++
        }

      }while(valueCalc >=0);

      notesCounted[i] = counter;
      value = value - (notesCounted[i] * noteBank)

      
    }

    return notesCounted;
  }


  const renderNotesBank = (value)=>{

    let returnNotesBankCounted = CountBankNotes(value)
    
    setNotesBankCounted(returnNotesBankCounted)

  }

  const justNumber = (value)=>{

    let r =  value.replace(/\D/g, '')
    setValue(r)

  }

  return (
    <>
      <Container fluid>
        <Title text='Caixa eletrônico' />
        <Form 
          value={value}
          justNumber={justNumber}
          renderNotesBank={renderNotesBank}
        />
        {notesBankCounted.length !== 0 &&
            <TableNotes notesBankCounted={notesBankCounted} notesBank={notesBank}/>
        }
      </Container>
    </>
  );
}

export default App;
