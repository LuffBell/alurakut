export const AddDepoiment = (props) => {
    return (
        <form onSubmit={props.handleAddDepoiments}>
            <input
            placeholder="Escreva seu depoimento"
            name="depoimento"
            aria-label="Depoimento"
            type="text"
            />

            <button>Escrever</button>
        </form>
    )
}