import { useState } from "react";
import {Navbar} from "./components/Navbar";
import {NoteForm} from "./components/NoteForm";
import {NotesList} from "./components/NotesList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    const newNote = {
      id: Date.now(),
      title: note.title,
      description: note.description
    };
    setNotes([...notes, newNote]);
  }
  return (
      <div>
        <Navbar />
        <div className="container">
          <NoteForm addNote={addNote} />
          <NotesList notes={notes} />
        </div>

      </div>
  );
}

export default App;