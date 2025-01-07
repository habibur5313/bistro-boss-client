import React from "react";
import { Parallax, Background } from 'react-parallax';
const CoverImage = ({ image, title }) => {
  return (
<Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={`${image}`}
        bgImageAlt="the dog"
        strength={-200}
    >
     <div
      className="hero h-[700px]"
 
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
        </div>
      </div>
    </div>
    </Parallax>
   

  );
};

export default CoverImage;
