import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            _id: "62ca003ab1544b2886882856",
            user: "62c9c12729f3153239eca6c8",
            title: "Hello this is not my first note but 2nd note",
            description: "pretty lazy to write something innovative again",
            date: "2022-07-09T22:24:58.399Z",
            __v: 0,
        },
        {
            _id: "62ca003ab1544b28868828561",
            user: "62c9c12729f3153239eca6c8",
            title: "Hello this is not my first note but 2nd note",
            description: "pretty lazy to write something innovative again",
            date: "2022-07-09T22:24:58.399Z",
            __v: 0,
        },
        {
            _id: "62ca003ab1544b28868828562",
            user: "62c9c12729f3153239eca6c8",
            title: "Hello this is not my first note but 2nd note",
            description: "pretty lazy to write something innovative again",
            date: "2022-07-09T22:24:58.399Z",
            __v: 0,
        },
    ];

    const [notes, setNotes] = useState(notesInitial);

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API Call
        console.log("Adding a new note");
        const note = {
            _id: "61322f119553781a8ca8d0e08",
            user: "6131dc5e3e4037cd4734a0664",
            title: title,
            description: description,
            tag: tag,
            date: "2022-07-09T22:24:58.399Z",
            __v: 0,
        };
        setNotes(notes.concat(note));
    };

    // Delete a Note
    const deleteNote = (id) => {
        const newNotes = notes.filter((notes) => {
            return notes._id !== id;
        });
        setNotes(newNotes);
    };
    // Edit a Note
    const editNote = () => {};

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
