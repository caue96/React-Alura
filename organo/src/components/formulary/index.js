import Button from "../button"
import DropDown from "../dropDown"
import TextField from "../textField"
import "./formulary.css"

const Formulary = () => {
    const times = [
        "A",
        "B",
        "C",
        "D"
    ]

    const onSave = (event) => {
        event.preventDefault()
        console.log("Salvando")
    }

    return (
        <section className="formulary">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome ..." />
                <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo ..." />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem ..." />
                <DropDown mandatory={true} label ="Time" itens={times} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Formulary