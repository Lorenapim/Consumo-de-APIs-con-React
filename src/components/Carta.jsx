const Carta = ({ contenido }) => {
    return (
        <div className="col-md-4">
        <div className="card container mt-4">
            <div className="card-body mx-auto ">
                <h5 className="card-title">{contenido[0]}</h5>
                <p className="card-text">{contenido.slice(1,4).join(', ')}</p>
                <img src={contenido[4]} alt={contenido[0]} />
            </div>
        </div>
        </div>
    );
};

export default Carta;