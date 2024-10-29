function Titulo() {

    let nome = 'Matheus Monção'
    let idade = 18
    const urlImg = "https://gartic.com.br/imgs/mural/su/supersonic_br/um-desenho-qualquer-5.png"

    return (
        <div>
            <h1>Olá eu sou {nome} e tenho {idade} anos</h1>
            <img src={urlImg} width={200}/>
            <p>Testando Testando Testando</p>
        </div>
    )
}

export default Titulo