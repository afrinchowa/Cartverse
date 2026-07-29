import React from "react";
const Background = React.lazy(() => import("./Background"));
const Hero = React.lazy(() => import("./Hero"));
import { heroData } from "../data/heroData";
import { useState } from "react";
import OurPolicy from "./OurPolicy";
  
const Home = () => {
  const [heroCount, setHeroCount] = useState(0);
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
 <Background />
   <Hero 
      heroCount={heroCount}
      setHeroCount={setHeroCount}
    heroData={heroData[heroCount]}/>
      </div>
     <Product/>
   <OurPolicy/>
   
    </div>
  );
};

export default Home;
