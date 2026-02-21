import projectsData from './projects.json';

import magiaHero from '../assets/images/projects/ECommerce-MagiaEncapsulada/Principal-Image.png';
import magiaHome from '../assets/images/projects/ECommerce-MagiaEncapsulada/1-Home.png';
import magiaProduct from '../assets/images/projects/ECommerce-MagiaEncapsulada/2-ProductPage.png';
import magiaDashboardCreate from '../assets/images/projects/ECommerce-MagiaEncapsulada/3-AddProduct-Dashboard.png';
import magiaDashboardList from '../assets/images/projects/ECommerce-MagiaEncapsulada/4-ProductList-Dashboard.png';
import magiaShipping from '../assets/images/projects/ECommerce-MagiaEncapsulada/5-AddShippingAddress.png';
import magiaCart from '../assets/images/projects/ECommerce-MagiaEncapsulada/6-PurchaseOrderCart.png';
import magiaOrdersBuyer from '../assets/images/projects/ECommerce-MagiaEncapsulada/7-OrderList-BuyerView.png';
import magiaOrdersAdmin from '../assets/images/projects/ECommerce-MagiaEncapsulada/8-OrderList-Dashboard.png';
import legalGuardHero from '../assets/images/projects/LegalGuard/principal-image.png';
import legalGuardMain from '../assets/images/projects/LegalGuard/Main.png';
import legalGuardChat from '../assets/images/projects/LegalGuard/Chat.png';
import legalGuardLogin from '../assets/images/projects/LegalGuard/Login.png';
import pokeHero from '../assets/images/projects/PokeApi- Whos that pokemon/Principal-Image.png';
import pokeMainLight from '../assets/images/projects/PokeApi- Whos that pokemon/Main Modo Claro.png';
import pokeMainDark from '../assets/images/projects/PokeApi- Whos that pokemon/Main Modo Oscuro.png';
import pokeGameLight from '../assets/images/projects/PokeApi- Whos that pokemon/Game Modo Claro.png';
import pokeGameDark from '../assets/images/projects/PokeApi- Whos that pokemon/Game Modo oscuro.png';
import gtgHero from '../assets/images/projects/gtg - Landing Page/principal-image.png';
import gtgFullCapture from '../assets/images/projects/gtg - Landing Page/Longcapture.png';

const imageMap = {
  magiaHero,
  magiaHome,
  magiaProduct,
  magiaDashboardCreate,
  magiaDashboardList,
  magiaShipping,
  magiaCart,
  magiaOrdersBuyer,
  magiaOrdersAdmin,
  legalGuardHero,
  legalGuardMain,
  legalGuardChat,
  legalGuardLogin,
  pokeHero,
  pokeMainLight,
  pokeMainDark,
  pokeGameLight,
  pokeGameDark,
  gtgHero,
  gtgFullCapture
};

type ProjectData = {
  id: string;
  title: string;
  category: string;
  description: string;
  summary: string;
  highlights: string[];
  details: string[];
  techStack?: string[];
  demoUrl?: string;
  imageKey: keyof typeof imageMap;
  galleryKeys?: Array<keyof typeof imageMap>;
};

export const projects = (projectsData as ProjectData[]).map((project) => ({
  ...project,
  image: imageMap[project.imageKey],
  gallery: project.galleryKeys?.map((key) => imageMap[key])
}));
