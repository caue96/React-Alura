import TextField from "../textField"
import "./formulary.css"

const Formulary = () => {
    return (
        <section className="formulary">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome ..." />
                <TextField label="Cargo" placeholder="Digite seu cargo ..." />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem ..." />
            </form>
        </section>
    )
}

export default Formulary