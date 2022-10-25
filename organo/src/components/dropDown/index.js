import "./dropDown.css"

const DropDown = (props) => {
    return (
        <div className="drop-down">
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} required={props.mandatory} value={props.value}>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown