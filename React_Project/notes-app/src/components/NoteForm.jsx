import { useState } from "react";

export const NoteForm =({ addNote })=> {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        const noteData = {
            title: title,
            description: description
        };
        addNote(noteData);
        setTitle("");
        setDescription("");
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)}
            />
            <textarea
                placeholder="Enter description"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)}
            ></textarea>
            <button type="submit">Add Note</button>
        </form>
    );
}