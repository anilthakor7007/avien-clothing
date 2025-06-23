import React from 'react'
import Banner from '../components/comman/Banner';
import NewArrival from '../components/comman/NewArrival';
import Category from '../components/comman/Category';
import ShopByAge from '../components/kids_homePg/ShopByAge'
import ShopByPrice from '../components/kids_homePg/ShopByPrice';


const bannerImages = [
  "src/assets/images/kids/kidsBanner/KDB1.png",
  "src/assets/images/kids/kidsBanner/KDB2.png",
  "src/assets/images/kids/kidsBanner/KDB3.png",

];


const categoriesImages = [
  {
    src: 'src/assets/images/kids/category/KCT1.PNG',
    link: '/shop/kids',
    alt: 'Girls T-Shirts',
  },
  {
    src: 'src/assets/images/kids/category/KCT2.PNG',
    link: '/shop/kids',
    alt: 'Girls T-Shirts',
  },
  {
    src: 'src/assets/images/kids/category/KCT3.PNG',
    link: '/shop/kids',
    alt: 'Girls Joggers',
  },
  {
    src: 'src/assets/images/kids/category/KCT4.PNG',
    link: '/shop/kids',
    alt: 'Boys Joggers',
  },
  {
    src: 'src/assets/images/kids/category/KCT5.PNG',
    link: '/shop/kids',
    alt: 'Girls Jackets',
  },
  {
    src: 'src/assets/images/kids/category/KCT6.PNG',
    link: '/shop/kids',
    alt: 'Boys Jackets',
  },
];


const Kids = () => {
  return (
   <>
    <Banner bannerImages={bannerImages}/>
    <NewArrival/>
    <ShopByAge/>
    <ShopByPrice/>
    <Category categoriesImages={categoriesImages}/>

   
   </>
  )
}

export default Kids