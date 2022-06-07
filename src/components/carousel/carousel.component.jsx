import { Carousel } from "antd";
import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import "./carousel.styles.scss";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

const HomeCarousel = () => {
  return (
    <Carousel autoplay className="carousel-container">
      <div>
        <DirectoryItem category={categories[0]} />
      </div>
      <div>
        <DirectoryItem category={categories[1]} />
      </div>
      <div>
        <DirectoryItem category={categories[2]} />
      </div>
      <div>
        <DirectoryItem category={categories[3]} />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
