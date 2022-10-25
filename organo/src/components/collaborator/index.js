import "./collaborator.css"

const Collaborator = ({name, position, image}) => {
    return (
        <div className="collaborator">
            <div className="cabecalho">
                <img src={image} alt={name} />
            </div>
            <div className="rodape">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Collaborator