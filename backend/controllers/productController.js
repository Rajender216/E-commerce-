import { v2 as clodinary } from "cloudinary";
import productModel from "../models/productModel.js";
//add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await clodinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const newProduct = new productModel({
      name,
      description,
      price: Number(price),
      image: imageUrl,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      date: Date.now(),
    });

    await newProduct.save();

    res.send({ success: true , message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};
//list product
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.send({ success: true, products });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};
//remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.send({ success: true, message: "Deleted" });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};
//single product Info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById( productId );
    res.send({ success: true, product });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
