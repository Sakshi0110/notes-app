function NewNote() {
    return (
        <div className="row">
            <div className="form-floating col">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Enter your note</label>
            </div>
            <div className="col-1">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    )
}

export default NewNote;
