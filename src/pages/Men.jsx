import React from 'react'
import Banner from "../components/comman/Banner"
import Footer from '../components/Footer';
import BestSeller from '../components/mens_homePg/BestSeller';
import Category from '../components/comman/Category';
import NewArrival from '../components/comman/NewArrival';
import ShopByTheme from '../components/comman/ShopByTheme';
import BrandTitle from '../components/comman/BrandTitle';

const themesImages = [
  {
    src: "src/assets/images/mens/shopByTheme/MSBT1.PNG",
    link: "/shop/productId",
    alt: "Shop by theme",
  },

  {
    src: "src/assets/images/mens/shopByTheme/MSBT2.PNG",
    link: "/shop/productId",
    alt: "Shop by theme",
  },
  {
    src: "src/assets/images/mens/shopByTheme/MSBT3.PNG",
    link: "/shop/productId",
    alt: "Shop by theme",
  },
  {
    src: "src/assets/images/mens/shopByTheme/MSBT4.PNG",
    link: "/shop/productId",
    alt: "Shop by theme",
  },

];


const bannerImages = [
  "src/assets/images/mens/mensBanner/MB1.jpg",
  "src/assets/images/mens/mensBanner/MB2.jpg",
  "src/assets/images/mens/mensBanner/MB3.jpg",

];


const categoriesImages = [
  {
    src: 'src/assets/images/mens/category/MCT1.PNG',
    link: '/shop/men',
    alt: 'Over Sized T-Shirts',
  },
  {
    src: 'src/assets/images/mens/category/MCT2.PNG',
    link: '/shop/men',
    alt: 'Jeans',
  },
  {
    src: 'src/assets/images/mens/category/MCT3.PNG',
    link: '/shop/men',
    alt: 'Shirts',
  },
  {
    src: 'src/assets/images/mens/category/MCT4.PNG',
    link: '/shop/men',
    alt: 'T-Shirts',
  },
  {
    src: 'src/assets/images/mens/category/MCT5.PNG',
    link: '/shop/men',
    alt: 'Pents',
  },
  {
    src: 'src/assets/images/mens/category/MCT6.PNG',
    link: '/shop/men',
    alt: 'Jackets',
  },
];



const Men = () => {
  return (
    <>
    
    <Banner bannerImages={bannerImages}/>
    <BestSeller/>
    <Category categoriesImages={categoriesImages}/>
    <NewArrival/>
    <ShopByTheme themesImages={themesImages} />
    {/* <ShopByColour/>
    <MostLovedProduct/>
    <NewArrivals/>
    <TopSelling/>
    <StyleOfWeek/>
 
   
    <WhyChooseUs/> */}

   
    </>
  )
}

export default Men