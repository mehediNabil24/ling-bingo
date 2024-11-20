import React from 'react';
import image1 from '../assets/languages-signpost.jpg';
import image2 from '../assets/caro-book.jpeg';
import image3 from '../assets/carousel-2.jpg';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[350px]">
  <div id="item1" className="carousel-item  w-full">
    <img
      src={image1}
      className="w-full  object-fit" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={image2}
      className="w-full object-fit" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src={image3}
      className="w-full object-fit" />
  </div>
  
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  
</div>
        </div>
    );
};

export default Banner;