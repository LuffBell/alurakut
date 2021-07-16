import { MainGrid } from "../src/components/MainGrid"
import Box from "../src/components/Box"
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/components/lib/AlurakutCummons"
import { ProfileRelationsWrapper } from "../src/components/ProfileRelationsWrapper"
import { useState } from "react"
import ProfileSideBar from "../src/components/ProfileSideBar"
import { FormAddComunity } from "../src/components/FormAddComunity"
import { AddDepoiment } from "../src/components/AddDepoiment"
import { SendScrap } from "../src/components/SendScrap"


export default function Home() {
  const [pessoasFavoritas, setPessoasFavoritas] = useState([])
  const [comunidades, setComunidades] = useState([
    { data: new Date().toISOString(), nome: "Circo Pega Fogo", imagen: "https://github.com/LuffBell/alurakut/blob/main/src/img/comu1.jpeg?raw=true" },
    { data: new Date().toISOString(), nome: "VASP", imagen: "https://github.com/LuffBell/alurakut/blob/main/src/img/comu2.jpg?raw=true" },
    { data: new Date().toISOString(), nome: "Pensador", imagen: "https://raw.githubusercontent.com/LuffBell/alurakut/main/src/img/comu3.webp" },
    { data: new Date().toISOString(), nome: "Er...", imagen: "https://github.com/LuffBell/alurakut/blob/main/src/img/comu4.jpg?raw=true" },
    { data: new Date().toISOString(), nome: "Esquizopocs", imagen: "https://github.com/LuffBell/alurakut/blob/main/src/img/comu5.jfif?raw=true" },
    { data: new Date().toISOString(), nome: "<3", imagen: "https://github.com/LuffBell/alurakut/blob/main/src/img/comu6.jpg?raw=true" },
  ])
  const [controller, setController] = useState(0);

  const axios = require('axios').default;

  const usuario = 'luffbell';

  axios({
    method: 'get',
    url: 'https://api.github.com/users/juunegreiros/followers',
    responseType: 'json'
  })
    .then((response)=>{
      setPessoasFavoritas([...response.data])
    })
    .catch((error)=>{
      console.log(error);
    })

    const handleAddCommunity = (e) => {
      e.preventDefault();
      
      const dataForm = new FormData(e.target);

      const comunidade = {
        data: new Date().toISOString(),
        nome: dataForm.get('nome'),
        imagen: dataForm.get('imagen')
      }

      setComunidades([...comunidades, comunidade])
    }

  return (
    <>
      <AlurakutMenu githubUser={usuario}/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar usuario={usuario} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">
              Bem-Vindo(a), {usuario}
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>

            <ul style={{ display: "flex", listStyle: "none", justifyContent: "space-around", marginBottom: "1rem" }}>
              {["Criar Comunidade", "Escrever um depoimento", "Deixar um scrap"].map((i,index)=>{
                return (
                  <li key={index}>
                    <button>{i}</button>
                  </li>
                )
              })}
            </ul>

          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsWrapper>
            <h2 className="smallTitle">
              Meus Amigxs ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((i, index)=> {
                const style = index > 5 ? "none" : "block";
                return (
                  <li key={index} style={{ display: style }}>
                    <a href={`/users/${i.login}`}>
                      <img src={`https://github.com/${i.login}.png`}/>
                      <span>{i.login}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            <button className="buttonVerTodos"><a>Ver Todos</a></button>
          </ProfileRelationsWrapper>
          <ProfileRelationsWrapper>
            <h2 className="smallTitle">
              Minhas comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((i, index)=> {
                const style = index > 5 ? "none" : "block";
                return (
                  <li key={i.data} style={{ display: style }}>
                    <a href={`/users/${i.login}`}>
                      <img src={i.imagen}/>
                      <span>{i.nome}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            <button className="buttonVerTodos"><a>Ver Todos</a></button>
          </ProfileRelationsWrapper>
        </div>
      </MainGrid>
    </>
  )
}
