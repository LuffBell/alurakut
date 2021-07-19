import Box from "../Box"
import { AlurakutProfileSidebarMenuDefault } from "../../lib/AlurakutCummons"

const ProfileSideBar = (props) => {
    return (
    <Box>
      <img src={`https://github.com/${props.usuario}.png`} style={{ borderRadius: '8px' }} />

      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.usuario}`}>
          @{props.usuario}
        </a>
      </p>

      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
    )
}

export default ProfileSideBar;