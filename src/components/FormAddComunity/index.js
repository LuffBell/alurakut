export const FormAddComunity = (props) => {
    return (
        <form onSubmit={props.handleAddCommunity}>

            <input
            placeholder="Nome para a comunidade:"
            name="nome"
            aria-label="Nome para a comunidade"
            type="text"
            />

            <input
            placeholder="Url da imagen da comunidade"
            name="imagen"
            aria-label="Url da imagen da comunidade"
            />

            <button>Criar comunidade</button>
        </form>
    )
}