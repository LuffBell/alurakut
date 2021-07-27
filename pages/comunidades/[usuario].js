import { ComunnityGrid } from "../../src/components/ComunnityGrid"
import ProfileSideBar from "../../src/components/ProfileSideBar"
import Box from "../../src/components/Box"
import { useState, useEffect } from "react"
import { AlurakutMenu } from "../../src/lib/AlurakutCummons"
import { deletToken } from "../index"
import { useRouter } from "next/dist/client/router"

export default function ComunnityScreen () {
    const axios = require('axios').default;
    const router = useRouter()
    
    const [comunidades, setComunidades] = useState([])
    
    const { usuario } = router.query

    useEffect(() => {
        axios({
            method: 'POST',
            url: 'https://graphql.datocms.com/',
            headers: {
              'Authorization': '5c9f8f78ee8f1d509567f90998bae8',
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

    return (
        <>
            <AlurakutMenu githubUser={usuario} deletToken={deletToken}/>
            <ComunnityGrid>
                <div className="profileArea" style={{ gridArea: "profileArea" }}>
                    <ProfileSideBar usuario={usuario} />
                </div>
                <div style={{ gridArea: "comunnityArea" }}>
                    <Box>
                        <h2 className="title">Minhas comunidades:</h2>

                        <ul>
                            {comunidades.map((i)=>{
                            return (
                                <li key={i.id} className="listItens">
                                <img src={i.imageurl} className="imgBox"/>
                                <div className="divInfo">
                                    <p style={{ color: "#FFFFFF", paddingBottom: "1rem" }}>{i.title}</p>
                                    <p style={{ color: "#FFFFFF95" }}>Dono: {i.creatorSlug}</p>
                                </div>
                                </li>
                            )
                            })}
                        </ul>
                    </Box>
                </div>
            </ComunnityGrid>
        </>
    )
}