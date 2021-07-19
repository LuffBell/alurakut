import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import { MainGrid } from "../src/components/MainGrid"
import Box from "../src/components/Box"
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/lib/AlurakutCummons"
import { ProfileRelationsWrapper } from "../src/components/ProfileRelationsWrapper"
import { useState, useEffect } from "react"
import ProfileSideBar from "../src/components/ProfileSideBar"
import { FormAddComunity } from "../src/components/FormAddComunity"
import { AddDepoiment } from "../src/components/AddDepoiment"
import { SendScrap } from "../src/components/SendScrap"


export default function Home(props) {
  const [pessoasFavoritas, setPessoasFavoritas] = useState([])
  const [comunidades, setComunidades] = useState([])
  const [controller, setController] = useState(3);
  const [depoiments, setDepoiments] = useState(['Olá, tudo bem?']);

  const axios = require('axios').default;

  const usuario = props.githubUser;

  useEffect(() => {
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
    
    axios({
      method: 'POST',
      url: 'https://graphql.datocms.com/',
      headers: {
        'Authorization': 'c3f161ae3bc1bdb07fc16bdfd7809b',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      data: JSON.stringify({ "query": `query {
        allCommunities {
          id
          title
          imageurl
          creatorSlug
        }
      }`}
      )
    })
    .then((response) => {
      const comunidadesVindasDoDato = response.data.data.allCommunities;
      setComunidades([...comunidadesVindasDoDato])
    })
      
  }, [])

  const handleAddCommunity = (e) => {
    e.preventDefault();
    
    const dataForm = new FormData(e.target);
    const comunidade = {
      title: dataForm.get('nome'),
      imageurl: dataForm.get('imagen'),
      creatorSlug: usuario,
    }
    axios({
      method: 'POST',
      url: '/api/comunidades',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(comunidade)
    })
    .then(async (response) => {
      const dados = await response.data;
      const comunidade = dados.registroCriado;
      setComunidades([comunidade, ...comunidades])
    })
  }

  const handleAddDepoiments = (e) => {
    e.preventDefault();

    const formDepoiments = new FormData(e.target)
    const depoimento = formDepoiments.get('depoimento')
    setDepoiments([depoimento, ...depoiments])
  }

  const SwitchThings = (props) => {
    switch (props.controller) {
      case 0:
        return (<FormAddComunity handleAddCommunity={handleAddCommunity} />)
        break;
      case 1:
        return (<AddDepoiment handleAddDepoiments={handleAddDepoiments} />)
        break;
      case 2:
        return (<SendScrap />)
        break;
      case 3:
        return (<></>)
      default:
        break;
    }
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
                    <button onClick={() => { setController(index) }}>{i}</button>
                  </li>
                )
              })}
            </ul>
            
            <SwitchThings controller={controller}/>

          </Box>
          <Box>
            <h2 className="subTitle">Depoimentos</h2>
            <ul  style={{ listStyleType: "none" }}>
              {depoiments.map((i,index)=> {
                return (
                  <li key={index} style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #ffffff", padding: "1rem 0" }}>
                    <img src={`https://github.com/${usuario}.png`} style={{ width: "80px", marginRight: "1rem", borderRadius: "8px" }}/>
                    <p style={{ color: "#FFFFFF" }}>{i}</p>
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
                  <li key={i.id} style={{ display: style }}>
                    <a href={`/communities/${i.title}`}>
                      <img src={i.imageurl}/>
                      <span>{i.title}</span>
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

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
        Authorization: token
      }
  })
  .then((resposta) => resposta.json())

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    }, // will be passed to the page component as props
  }
} 