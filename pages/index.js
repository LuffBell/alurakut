import { MainGrid } from "../src/components/MainGrid"
import { Box } from "../src/components/Box"
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/components/lib/AlurakutCummons"
import { ProfileRelations } from "../src/components/ProfileRelations"
import { useState } from "react"

const ProfileSideBar = (props) => {
  return (
    <Box>
      <img src={`https://github.com/${props.usuario}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const [pessoasFavoritas, setPessoasFavoritas] = useState([])

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

  return (
    <>
      <AlurakutMenu />
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
        </div>
        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelations>
            <h2 className="smallTitle">
              Amigxs ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((i, index)=> {
                const style = index > 5 ? "none" : "block";
                return (
                  <li key={i.login} style={{ display: style }}>
                    <a href={`/users/${i.login}`} key={i.login}>
                      <img src={`https://github.com/${i.login}.png`}/>
                      <span>{i.login}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelations>
        </div>
      </MainGrid>
    </>
  )
}
