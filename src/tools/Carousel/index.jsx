import React from "react";
import image1 from "assets/img/img-47.jpg"
import image2 from "assets/img/img-34.jpg"
import image3 from "assets/img/img-55.jpg"
import image4 from "assets/img/img-42.jpg"

import { Carousel } from 'antd';


const CarouselImages = () => {


	return (
		<>

			<Carousel autoplay className="margin-bottom">
			    <div>
			      <img src={image3} alt="" width="100%" height="100%"/>
			    </div>
			    <div>
			      <img src={image2} alt="" width="100%" height="100%"/>
			    </div>
			    <div>
			      <img src={image1} alt="" width="100%" height="100%"/>
			    </div>
			    <div>
			     <img src={image4} alt="" width="100%" height="100%"/>
			    </div>
		  </Carousel>

		</>
	);
};

export default CarouselImages;