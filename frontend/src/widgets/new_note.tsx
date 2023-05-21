import { useState } from "react";

function NewNote(props: { notes: string[], setNotes: any }) {
    const [currentNote, setCurrentNote] = useState("");
    return (
        <div className="row">
            <div className="form-floating col">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={currentNote} onChange={(e) => {
                    setCurrentNote(e.target.value);
                }}></textarea>
                <label htmlFor="floatingTextarea">Enter your note</label>
            </div>
            <div className="col-1">
                <button type="submit" className="btn btn-primary" onClick={() => {
                    props.setNotes(props.notes.concat([currentNote]));
                }}>Submit</button>
            </div>
        </div>
    )
}

export default NewNote;
