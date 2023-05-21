import Card from "../widgets/card";
import NewNote from "../widgets/new_note";
import { useState } from "react";

function Home() {
    const [notes, setNotes] = useState([]);
    let cards = [];
    for (let note of notes) {
        cards.push(<Card text={note} />);
    }
    return (
        <div className="container">
            <div className="row m-3">
                <NewNote />
            </div>
            <div className="row m-3">
                {cards}
            </div>
        </div>
    )
}

export default Home;
