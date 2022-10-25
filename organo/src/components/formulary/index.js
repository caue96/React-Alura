import Button from "../button"
import DropDown from "../dropDown"
import TextField from "../textField"
import "./formulary.css"
import { useState } from 'react';

const Formulary = (props) => {
    const teams = [
        "A",
        "B",
        "C",
        "D"
    ]

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.atCollaboratorRegistry({
            name,
            position,
            image,
            team
        })
    }

    return (
        <section className="formulary">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome ..." value={name} onChange={value => setName(value)} />
                <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo ..." value={position} onChange={value => setPosition(value)} />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem ..." value={image} onChange={value => setImage(value)} />
                <DropDown mandatory={true} label ="Time" items={teams} value={team} onChange={value => setTeam(value)} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Formulary