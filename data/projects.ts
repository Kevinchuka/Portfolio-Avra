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

const imageMap = {
  aurora: 'https://picsum.photos/seed/aurora/800/600',
  vanguard: 'https://picsum.photos/seed/vanguard/800/600',
  magiaHero,
  magiaHome,
  magiaProduct,
  magiaDashboardCreate,
  magiaDashboardList,
  magiaShipping,
  magiaCart,
  magiaOrdersBuyer,
  magiaOrdersAdmin
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
