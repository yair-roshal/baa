import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from '../components/Services'
import FeaturedHouses from '../components/FeaturedHouses'
import OurWork from '../components/OurWork'
import WhoWe from '../components/WhoWe'
// import Button from '../components/StyledHero'
// import Slider from 'infinite-react-carousel';
 

import MySlider from '../components/MySlider'

export default function Home() {
  return (
      <>
    <Hero>
      <Banner title="Luxurious houses" subtitle="deluxe houses starting at $299">
        <Link to="/houses" className="btn-primary">
          our houses
        </Link>
      </Banner>
    </Hero>


        <h2>Кому мы помогаем:</h2>
        
    <MySlider />

  <OurWork />
    
  <WhoWe />


   

   







<Services/>

<FeaturedHouses/>
  


    


 
</>
  );
}
