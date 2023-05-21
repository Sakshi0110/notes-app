import Card from "../widgets/card";

function Home() {
    return (
        <div className="container">
            <div className="row m-3">
                <div className="form-floating col">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label htmlFor="floatingTextarea">Enter your note</label>
                </div>
                <div className="col-1">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
            <div className="row m-3">
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home;
