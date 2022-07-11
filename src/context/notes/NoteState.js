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
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiJ9.NjJjOWMxMjcyOWYzMTUzMjM5ZWNhNmM4.KXy-eklYQGKFPM2HS15AQEXm6Hs6wa3n7v_6w1roGhM",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const note = await response.json();
        setNotes(notes.concat(note));
    };

    // Delete a Note
    const deleteNote = async (id) => {
        //API CALL
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiJ9.NjJjOWMxMjcyOWYzMTUzMjM5ZWNhNmM4.KXy-eklYQGKFPM2HS15AQEXm6Hs6wa3n7v_6w1roGhM",
            },
        });
        const json = response.json();
        console.log(json);
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
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token":
                    "eyJhbGciOiJIUzI1NiJ9.NjJjOWMxMjcyOWYzMTUzMjM5ZWNhNmM4.KXy-eklYQGKFPM2HS15AQEXm6Hs6wa3n7v_6w1roGhM",
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();
        // Logic to edit in client
        let newNotes = JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
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
