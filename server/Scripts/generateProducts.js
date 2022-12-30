const connect = require("../db/connection");
const productModel = require("../models/products.model");

connect().then(async () => {
  await productModel.insertMany([
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220702/JOG6/62bf5e64aeb26921af59fdb8/-473Wx593H-464574519-teal-MODEL.jpg",
      title: "Printed Round-Neck Sweatshirt",
      brand: "LEVIS",
      price: 875,
      offer_percent: 65,
      category: "Men",
      size: "XL",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210403/hnQQ/6068e54ff997dd7b6467de3e/-473Wx593H-461211735-white-MODEL.jpg",
      title: "Basket-Weave Belt with Buckle Closure",
      brand: "LEVIS",
      price: 850,
      offer_percent: 50,
      category: "Men",
      size: "S",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220124/VGYD/61eeadccf997dd662337b0bd/-473Wx593H-463124918-pink-MODEL.jpg",
      title: "Floral Print Straight Kurta Set  ",
      brand: "Vaidehi",
      price: 1310,
      offer_percent: 43,
      category: "Women",
      size: "L",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/h84/h17/15216355508254/-473Wx593H-461085066-maroon-MODEL.jpg",
      title: "Brand Print Slim Fit Crew-Neck Swet T-shirt",
      brand: "LEVIS",
      price: 615,
      offer_percent: 44,
      category: "Women",
      size: "M",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20220923/FeJi/632d9997f997dd1f8d19158b/-473Wx593H-465045819-multi-MODEL2.jpg",
      title: "Striped Straight Kurta",
      brand: "Nayka",
      price: 615,
      offer_percent: 44,
      category: "Women",
      size: "S",
    },
    {
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210629/JpIm/60da6ae7aeb269a9e32ffa0d/-473Wx593H-462566319-navy-MODEL3.jpg",
      title: "Printed Straight Kurta Set",
      brand: "Femella",
      price: 615,
      offer_percent: 44,
      category: "Women",
      size: "M",
    },
  ]);
});
