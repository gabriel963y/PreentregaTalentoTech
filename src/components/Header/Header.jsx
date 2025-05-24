
import MyNavbar from "../Navbar/MyNavbar"
import Topbar from "./Topbar"

const Header = ({favorite, shop, setShop}) => {


  return (
    <div>
      <Topbar />
      <MyNavbar favorite={favorite} shop={shop} setShop={setShop}/>
    </div>
  )
}



export default Header