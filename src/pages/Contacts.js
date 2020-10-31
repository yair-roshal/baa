import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import { Link } from "react-router-dom";
// import Services from '../components/Services'
import Communication from '../components/Communication'
// import FeaturedHouses from '../components/FeaturedHouses'
// import Button from '../components/StyledHero'

export default function Contacts() {
  return (
      <>
    <Hero>
      <Banner title="Контакты" subtitle="Всегда рады вас слышать">
        {/* <Link to="/houses" className="btn-primary">
          our houses
        </Link> */}
      </Banner>
    </Hero>
    
<Communication/>

{/* <FeaturedHouses/> */}
 
 {/* <Button>hello</Button> */}


 
</>
  );
}
