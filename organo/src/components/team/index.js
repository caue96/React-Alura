import Collaborator from "../collaborator"
import "./team.css"

const Team = (props) => {
    const css = {backgroundColor: props.secundaryColor}

    return (
        (props.collaborators.length > 0) ? <section className="team" style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className="collaborators">
                {props.collaborators.map(collaborator => <Collaborator name={collaborator.name} position={collaborator.position} image={collaborator.image} />)}
            </div>
        </section>
        : ''
    )
}

export default Team