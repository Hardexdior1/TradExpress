import chromeWatch from "../images/watch-1-600x600.png";
import classicWatch from "../images/watch-2-600x600.png";

import goldWatch from "../images/gold-watch-600x600.png";
import blackWatch from "../images/black-watch-600x600.png";

const Watches = [
  {
    id: 1,
    img: chromeWatch,
    name: "Chrome Watch",
    price: 399.0,
  },
  {
    id: 2,
    img: classicWatch,
    name: "Classic Watch",
    price: 399.0,
    normalPrice: 499.0,
    sale: true,
  },
  {
    id: 3,
    img: goldWatch,
    name: "Gold Watch",
    price: 699.0,
  },
  {
    id: 4,
    img: blackWatch,
    name: "Black Watch",
    price: 599.0,
  },
];

export default Watches;
