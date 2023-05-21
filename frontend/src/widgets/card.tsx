function Card(props: { text: string }) {
    return (
        <div className="w-50 p-2">
            <div className="card">
                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                    <a className="btn btn-primary">Button</a>
                </div>
            </div>
        </div>
    )
}

export default Card;
