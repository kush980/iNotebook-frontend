import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //Fetch all notes
    // Add a Note
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiJ9.NjJjOWMxMjcyOWYzMTUzMjM5ZWNhNmM4.KXy-eklYQGKFPM2HS15AQEXm6Hs6wa3n7v_6w1roGhM",
            },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    };

    // Add a Note
    const addNote = async (title, description, tag) => {
        //API CALL
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiJ9.NjJjOWMxMjcyOWYzMTUzMjM5ZWNhNmM4.KXy-eklYQGKFPM2HS15AQEXm6Hs6wa3n7v_6w1roGhM",
            },
            body: JSON.stringify({ title, description, tag }),
        });
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
    const deleteNote = async (id) => {
        //API CALL
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiJ9.NjJjOWMxMjcyOWYzMTUzMjM5ZWNhNmM4.KXy-eklYQGKFPM2HS15AQEXm6Hs6wa3n7v_6w1roGhM",
            },
            body: JSON.stringify({}),
        });
        const newNotes = notes.filter((notes) => {
            return notes._id !== id;
        });
        setNotes(newNotes);
    };
    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        //API CALL
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiJ9.NjJjOWMxMjcyOWYzMTUzMjM5ZWNhNmM4.KXy-eklYQGKFPM2HS15AQEXm6Hs6wa3n7v_6w1roGhM",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();
        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    };

    return (
        <NoteContext.Provider
            value={{ notes, addNote, deleteNote, editNote, getNotes }}
        >
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
