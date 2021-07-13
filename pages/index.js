import { MainGrid } from "../src/components/MainGrid"
import { Box } from "../src/components/Box"
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/components/lib/AlurakutCummons"
import { ProfileRelations } from "../src/components/ProfileRelations"

const ProfileSideBar = (props) => {
  return (
    <Box>
      <img src={`https://github.com/${props.usuario}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const usuario = 'luffbell';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

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
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((i)=> {
                return (
                  <li>
                    <a href={`/users/${i}`} key={i}>
                      <img src={`https://github.com/${i}.png`}/>
                      <span>{i}</span>
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
