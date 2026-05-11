import {NoteCard} from "./NoteCard";

export const NotesList=({ notes })=> {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))
            }
        </div>
    );
}