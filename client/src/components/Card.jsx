export function Card(props) {

    return (
            <div className="card">
                <img src={props.path} className="card-img-top" alt={props.id} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>    
    );
}