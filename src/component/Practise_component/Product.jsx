import { span } from "framer-motion/client";
import React, { useEffect, useState } from "react";

export default function Product() {
  const [productdata, setProductData] = useState([]);
  const [stock, setStock] = useState(false);
  const [search, setSearch] = useState("");
  const apidata = [
    {
      id: 1,
      category: "Electronics",
      icon: "📱",
      products: [
        { id: 101, name: "iPhone 15", price: 79999, inStock: true },
        { id: 102, name: "Samsung S24", price: 69999, inStock: false },
        { id: 103, name: "OnePlus 12", price: 49999, inStock: true },
      ],
    },
    {
      id: 2,
      category: "Clothing",
      icon: "👕",
      products: [
        { id: 201, name: "Nike T-Shirt", price: 1499, inStock: true },
        { id: 202, name: "Levi's Jeans", price: 3999, inStock: true },
      ],
    },
    {
      id: 3,
      category: "Books",
      icon: "📘",
      products: [
        { id: 301, name: "You Don't Know JS", price: 599, inStock: true },
        { id: 302, name: "Clean Code", price: 799, inStock: false },
        {
          id: 303,
          name: "The Pragmatic Programmer",
          price: 899,
          inStock: true,
        },
      ],
    },
  ];

  useEffect(() => {
    const Product = apidata.map((item, index) => ({
      id: item.id,
      category: item.category,
      icon: item.icon,
      product: item.products.map((item) => ({
        name: item.name,
        price: item.price,
        stock: item.inStock,
      })),
    }));
    setStock(Product?.product?.stock);
    console.log("Stock", stock);
    setProductData(Product);
  }, []);

  const FilterProduct = productdata.filter((item) => {
    const Text = search.toLowerCase();

    return (
      item.category?.toLowerCase().includes(Text) ||
      item.name?.toLowerCase().includes(Text)
    );
  });
  return (
    <div>
      <h1>Product</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* {console.log("Product", productdata)} */}
      <div>
        {FilterProduct.map((value, index) => {
          return (
            <div key={index}>
              <h1>{value.category}</h1>
              <span>{value.icon}</span>
              {value.product.map((val, ind) => {
                return (
                  <div key={ind}>
                    <span>{val.name}</span>
                    <span>{val.price}</span>
                    <span>{val.stock}</span>
                    {console.log("Stock", val.stock)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
