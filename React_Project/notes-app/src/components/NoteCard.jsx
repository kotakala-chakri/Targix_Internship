export const NoteCard =({ note }) => {
    return (
        <div className="note-card">
            <h2>{note.title}</h2>
            <p>{note.description}</p>
        </div>
    );
}