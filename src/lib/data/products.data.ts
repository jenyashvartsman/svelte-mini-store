import type { ProductDto } from "../dto/product.dto";

const productsData: ProductDto[] = [
  {
    name: "Apple",
    price: 1.2,
    category: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
  },
  {
    name: "Banana",
    price: 0.5,
    category: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
  },
  {
    name: "Carrot",
    price: 0.8,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Carrot_with_loin.jpg",
  },
  {
    name: "Milk",
    price: 1.5,
    category: "Dairy",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Glass_of_milk.jpg",
  },
  {
    name: "Bread",
    price: 2.0,
    category: "Bakery",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Freshly_baked_bread.jpg",
  },
  {
    name: "Orange",
    price: 1.1,
    category: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
  },
  {
    name: "Tomato",
    price: 1.3,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
  },
  {
    name: "Potato",
    price: 0.6,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg",
  },
  {
    name: "Eggs",
    price: 2.5,
    category: "Dairy",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/14/Chicken_egg_001.jpg",
  },
  {
    name: "Chicken Breast",
    price: 5.0,
    category: "Meat",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chicken_breast.png",
  },
  {
    name: "Cheese",
    price: 3.0,
    category: "Dairy",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Assorted_cheese.jpg",
  },
  {
    name: "Lettuce",
    price: 1.0,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Iceberg_lettuce.jpg",
  },
  {
    name: "Strawberries",
    price: 2.2,
    category: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
  },
  {
    name: "Grapes",
    price: 2.1,
    category: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg",
  },
  {
    name: "Yogurt",
    price: 1.8,
    category: "Dairy",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Yogurt_and_blueberries.jpg",
  },
  {
    name: "Spinach",
    price: 1.5,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/03/Spinacia_oleracea_Spinazie_bloeiend.jpg",
  },
  {
    name: "Beef",
    price: 7.0,
    category: "Meat",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Beef_cuts.svg",
  },
  {
    name: "Pork",
    price: 6.5,
    category: "Meat",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Roast_pork_%28Chinese%29.JPG",
  },
  {
    name: "Fish",
    price: 8.0,
    category: "Seafood",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Salmon_ova_eggs.jpg",
  },
  {
    name: "Shrimp",
    price: 12.0,
    category: "Seafood",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Shrimp3.jpg",
  },
  {
    name: "Butter",
    price: 2.5,
    category: "Dairy",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Buttercurl.jpg",
  },
  {
    name: "Mushrooms",
    price: 2.0,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Agaricus_bisporus_3.jpg",
  },
  {
    name: "Cucumber",
    price: 0.9,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Cucumis_sativus.jpg",
  },
  {
    name: "Bell Pepper",
    price: 1.2,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Capsicum_annuum_fruits_IMGP0049.jpg",
  },
  {
    name: "Broccoli",
    price: 1.4,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/03/Broccoli_and_cross_section_edit.jpg",
  },
  {
    name: "Garlic",
    price: 0.7,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Allium_sativum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-198.jpg",
  },
  {
    name: "Onion",
    price: 0.6,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Onion_on_White.JPG",
  },
  {
    name: "Corn",
    price: 1.3,
    category: "Vegetables",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Corncobs.jpg",
  },
  {
    name: "Blueberries",
    price: 3.0,
    category: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Vaccinium_corymbosum_berries.jpg",
  },
  {
    name: "Pineapple",
    price: 2.8,
    category: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg",
  },
  {
    name: "Watermelon",
    price: 3.5,
    category: "Fruits",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Watermelon_cross_BNC.jpg",
  },
  {
    name: "Pasta",
    price: 1.2,
    category: "Pantry",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Pasta_2006_1.jpg",
  },
  {
    name: "Rice",
    price: 1.0,
    category: "Pantry",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/60/White_rice.jpg",
  },
  {
    name: "Oats",
    price: 2.0,
    category: "Pantry",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Avena_sativa.jpg",
  },
  {
    name: "Honey",
    price: 4.0,
    category: "Pantry",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Honey_jar_and_dipper.jpg",
  },
  {
    name: "Peanut Butter",
    price: 3.0,
    category: "Pantry",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Peanut_Butter.jpg",
  },
  {
    name: "Jam",
    price: 2.5,
    category: "Pantry",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Strawberry_jam_on_bread.jpg",
  },
  {
    name: "Olive Oil",
    price: 6.0,
    category: "Pantry",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Olive_oil_drops_with_olives.jpg",
  },
  {
    name: "Salt",
    price: 0.5,
    category: "Pantry",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Salt_shaker_on_white_background.jpg",
  },
  {
    name: "Pepper",
    price: 1.0,
    category: "Pantry",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Pepper_mill_and_peppercorns.jpg",
  },
  {
    name: "Cereal",
    price: 3.0,
    category: "Pantry",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/42/Bowl_of_Cereal.jpg",
  },
  {
    name: "Juice",
    price: 2.5,
    category: "Beverages",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/70/Orange_juice_1.jpg",
  },
  {
    name: "Coffee",
    price: 5.0,
    category: "Beverages",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
  },
  {
    name: "Tea",
    price: 4.0,
    category: "Beverages",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/A_cup_of_tea.JPG",
  },
  {
    name: "Soda",
    price: 1.5,
    category: "Beverages",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Coca-Cola.JPG",
  },
  {
    name: "Beer",
    price: 6.0,
    category: "Beverages",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Glass_of_Beer.jpg",
  },
  {
    name: "Wine",
    price: 12.0,
    category: "Beverages",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Red_Wine_Glas.jpg",
  },
  {
    name: "Chips",
    price: 1.8,
    category: "Snacks",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Potato-Chips.jpg",
  },
  {
    name: "Chocolate",
    price: 2.5,
    category: "Snacks",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Chocolate.jpg",
  },
  {
    name: "Ice Cream",
    price: 4.0,
    category: "Snacks",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/47/Ice_Cream.jpg",
  },
  {
    name: "Cookies",
    price: 2.8,
    category: "Snacks",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Choc-Chip-Cookie.jpg",
  },
];
