import React from 'react'
import Banner from "../components/comman/Banner"
import ShopByColour from '../components/womens_homePg/ShopByColour'
import NewArrivals from '../components/comman/NewArrival'
import MostLovedProduct from "../components/womens_homePg/MostLovedProduct"
import TopSelling from '../components/womens_homePg/TopSelling'
import StyleOfWeek from '../components/womens_homePg/StyleOfWeek'
import ShopByTheme from '../components/comman/ShopByTheme'
import Category from '../components/comman/Category'
import WhyChooseUs from '../components/womens_homePg/WhyChooseUs'
import Footer from '../components/Footer'
import BrandTitle from '../components/comman/BrandTitle'

const themesImages = [
  {
    src: "src/assets/images/womens/shopByTheme/SBT1.PNG",
    link: "/shop/productId",
    alt: "Shop by theme",
  },

  {
    src: "src/assets/images/womens/shopByTheme/SBT2.PNG",
    link: "/shop/productId",
    alt: "Shop by theme",
  },
  {
    src: "src/assets/images/womens/shopByTheme/SBT3.PNG",
    link: "/shop/productId",
    alt: "Shop by theme",
  },
  {
    src: "src/assets/images/womens/shopByTheme/SBT4.PNG",
    link: "/shop/productId",
    alt: "Shop by theme",
  },

];


const categoriesImages = [
  {
    src: 'src/assets/images/womens/category/WCT1.PNG',
    link: '/shop/women',
    alt: 'Tops',
  },
  {
    src: 'src/assets/images/womens/category/WCT2.PNG',
    link: '/shop/women',
    alt: 'Jeans',
  },
  {
    src: 'src/assets/images/womens/category/WCT3.PNG',
    link: '/shop/women',
    alt: 'OverSized T-shirts',
  },
  {
    src: 'src/assets/images/womens/category/WCT4.PNG',
    link: '/shop/women',
    alt: 'Shirts',
  },
  {
    src: 'src/assets/images/womens/category/WCT5.PNG',
    link: '/shop/women',
    alt: 'Jackets',
  },
  {
    src: 'src/assets/images/womens/category/WCT6.PNG',
    link: '/shop/women',
    alt: 'Hoodies & Sweatshirts',
  },
];


const bannerImages = [
  "src/assets/images/womens/womensBanner/WB1.jpg",
  "src/assets/images/womens/womensBanner/WB2.jpg",
  "src/assets/images/womens/womensBanner/WB3.jpg",
];

const Women = () => {
  return (
    <>
    
    <Banner bannerImages={bannerImages}/>
    <ShopByColour/>
    <MostLovedProduct/>
    <NewArrivals/>
    <TopSelling/>
    <StyleOfWeek/>
    <Category categoriesImages={categoriesImages}/>
    <ShopByTheme themesImages={themesImages}/>
    <WhyChooseUs/>


    
    </>
  )
}

export default Women