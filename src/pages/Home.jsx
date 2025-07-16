
import { Helmet } from 'react-helmet'
import MyCarousel from '../components/carousel/MyCarousel'
import Categories from '../components/Categories/Categories'
import ShopContent from '../components/ShopContent/ShopContent'


const Home = () => {

  return (
    <>
      <Helmet>
        <title>LeanShop | Inicio</title>
        <meta name='description' content='Descubrí las mejores ofertas en LeanShop' />
        <link rel="canonical" href="www.leanshop.com" />
      </Helmet>
      <main>
        <MyCarousel />
        <Categories />
        <ShopContent />
      </main>
    </>
  )
}

export default Home