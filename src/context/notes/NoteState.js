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

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children};
        </NoteContext.Provider>
    );
};

export default NoteState;
