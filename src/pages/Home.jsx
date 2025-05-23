
import MiCarousel from '../components/carousel/MiCarousel'
import ShopContent from "../components/ShopContent/ShopContent"

const Home = ({favorite, setFavorite, shop, setShop}) => {


  return (
    <main>
      <MiCarousel />
      <ShopContent favorite={favorite} setFavorite={setFavorite} shop={shop} setShop={setShop} />
    </main>
  )
}

export default Home