import "./dropDown.css"

const DropDown = (props) => {
    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select required={props.mandatory}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown