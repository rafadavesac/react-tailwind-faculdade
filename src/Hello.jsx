function Hello({ name = "NI" }){ //componente 
    return(
        <>
        <main>
            <h1>Seja-bem vindo, {name}!</h1>
        </main>
        </>
    )
}

export default Hello;
//entre as { } dá pra colocar expressões javascript - ex: <p>{1+1}</p> -> 2
//props -> Propriedade (valor passado, tipo um parametro) |props = objeto .name=propriedade passada
// { name } -> deestructuring of the object props | let { name } = props
// name = "NI" -> valor default caso o name venha vazio