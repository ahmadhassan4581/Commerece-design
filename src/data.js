import image1 from './Assets/product_14.png';
import image2 from './Assets/product_16.png';
import image3 from './Assets/product_18.png';
import image4 from './Assets/product_23.png';
import image5 from './Assets/product_13.png';
import image6 from './Assets/product_15.png';
import image7 from './Assets/product_16.png';
import image8 from './Assets/product_17.png';
import image9 from './Assets/product_18.png';
import image10 from './Assets/product_19.png';
import image11 from './Assets/product_20.png';
import image12 from './Assets/product_21.png';
import image13 from './Assets/product_22.png';
import image14 from './Assets/product_23.png';
import image15 from './Assets/product_24.png';

import image31 from './Assets/product_1.png';
import image32 from './Assets/product_2.png';
import image33 from './Assets/product_3.png';
import image34 from './Assets/product_4.png';
import image35 from './Assets/product_5.png';
import image36 from './Assets/product_6.png';
import image37 from './Assets/product_7.png';
import image38 from './Assets/product_8.png';
import image39 from './Assets/product_9.png';
import image40 from './Assets/product_10.png';
import image41 from './Assets/product_11.png';
import image42 from './Assets/product_12.png';

// Combine all products into one array with unique IDs
let all_products = [
  // Original all_product items (men's products)
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "men",
    images: [image1, image2, image3, image4],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "men",
    images: [image5, image6, image7, image8],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "men",
    images: [image9, image10, image11, image12],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "men",
    images: [image13, image14, image15, image1],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "men",
    images: [image6, image7, image8, image9],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "men",
    images: [image7, image8, image9, image10],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 13,
    name: "Men's Casual Slim Fit T-Shirt",
    category: "men",
    images: [image10, image11],
    new_price: 40.0,
    old_price: 65.0,
  },
  {
    id: 14,
    name: "Men's Stylish Denim Jacket",
    category: "men",
    images: [image12, image13],
    new_price: 70.0,
    old_price: 90.0,
  },
  {
    id: 15,
    name: "Men's Classic Chino Pants",
    category: "men",
    images: [image14, image15],
    new_price: 60.0,
    old_price: 85.0,
  },
  
  // Original all_product_2 items (women's products) with adjusted IDs
  {
    id: 101,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image31, image32, image33, image34],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 102,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image35, image36, image37, image38],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 103,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image39, image40, image41, image42],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 104,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image35, image36, image37, image38],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 105,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image31, image32, image33, image34],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 106,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image39, image40, image41, image42],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 107,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image35, image36, image37, image38],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 108,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image39, image40, image41, image42],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 109,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image35, image36, image37, image38],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 110,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "men",
    images: [image39, image40, image41, image42],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 111,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image31, image32, image33, image34],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 112,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image39, image40, image41, image42],
    new_price: 50.0,
    old_price: 80.5,
  },
  // Additional women's products from original all_product
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image11, image12, image13, image14],
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    images: [image15, image1, image2, image3],
    new_price: 50.0,
    old_price: 80.5,
  }
];

let data_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: image1,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: image2,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: image3,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: image4,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: image5,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: image6,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: image7,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: image8,
    new_price: 100.0,
    old_price: 150.0,
  },
];

export default { all_products, data_product };
