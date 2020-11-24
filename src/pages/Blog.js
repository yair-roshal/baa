
import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import HouseContainer from '../components/HouseContainer'

const blog = () => {
  return  (
  <>
   <Hero hero="housesHero">
  <Banner title="Наш Блог">
    <Link className="btn-primary" to="/" >
      return home
    </Link>
  </Banner>
</Hero>

{/* <HouseContainer/> */}


<button className="button15"></button>



<Link className="btn-primary" to="/" >
      подблог1
   </Link> <br/>

   <Link className="btn-primary" to="/" >
      подблог2
   </Link><br/>

   <Link className="btn-primary" to="/" >
      подблог3
   </Link><br/>

</>
)
};

export default blog;
