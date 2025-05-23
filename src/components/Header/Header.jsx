import MiNavbar from '../Navbar/MiNavbar'
import Topbar from "./Topbar"

const Header = ({favorite, shop}) => {


  return (
    <div>
      <Topbar />
      <MiNavbar favorite={favorite} shop={shop}/>
    </div>
  )
}



export default Header