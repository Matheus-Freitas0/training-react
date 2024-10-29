function Titulo({cor,nome, idade}) {
    const urlImg = "https://gartic.com.br/imgs/mural/su/supersonic_br/um-desenho-qualquer-5.png"

    return (
        <div>
            <h1 style={{color: cor}}>Olá eu sou {nome ? nome: "Fulano"} e tenho {idade ? idade: "indefinido"} anos</h1>
            <img src={urlImg} width={200}/>
            <p>Testando Testando Testando</p>
        </div>
    )
}

export default Titulo