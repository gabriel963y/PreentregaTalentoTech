import foto1 from "../assets/carousel/foto1.png"
import foto2 from "../assets/carousel/foto2.png"
import foto3 from "../assets/carousel/foto3.png"
import foto4 from "../assets/carousel/foto4.png"
import foto5 from "../assets/carousel/foto5.png"
import foto6 from "../assets/carousel/foto6.png"
import jewelerImg from '../assets/categories/jewelers.png'
import electronicImg from '../assets/categories/electronic.png'
import homeImg from '../assets/categories/home.png'
import fashionImg from '../assets/categories/fashion.png'
import { GiBigDiamondRing } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";

export const images = [
  {
    id: 1,
    url: foto2,
  },
  {
    id: 2,
    url: foto1,
  },
  {
    id: 3,
    url: foto3,
  },
  {
    id: 4,
    url: foto4,
  },
  {
    id: 5,
    url: foto5,
  },
  {
    id: 6,
    url: foto6,
  },
]

export const MENU_DATA = [
  {
    to: "/",
    children: "Inicio"
  },
  {
    to: "/tienda",
    children: "Tienda"
  },
  {
    to: "/ofertas",
    children: "Ofertas"
  },
  {
    to: "/destacados",
    children: "Destacados"
  },
]

export const user = {
  email: "test@lean.com",
  password: "123456"
}


export const categories = [
  {
    name: 'Joyas',
    image: jewelerImg,
  },
  {
    name: 'Electrónica',
    image: electronicImg,
  },
  {
    name: 'Hogar',
    image: homeImg,
  },
  {
    name: 'Moda',
    image: fashionImg,
  }
]

export const titles = {
  home: 'LeanShop | Inicio',
  highlights: 'LeanShop | Destacados',
  myproducts: 'LeanShop | Mis productos',
  cart: 'LeanShop | Carrito',
  myProfile: 'LeanShop | Mi perfil'
}