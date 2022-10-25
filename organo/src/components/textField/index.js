import "./textField.css"

const TextField = (props) => {
    const placeHolderModified = `${props.placeholder}...`

    const onDigit = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onDigit} required={props.mandatory} placeholder={props.placeHolderModified}/>
        </div>
    )
}

export default TextField