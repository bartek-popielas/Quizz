import './App.css';
import React from "react";
import View from "./Components/views/view";
import {useState, useEffect} from "react";

const url = "https://johnywick.pl/wp-json/wp/v2/product?categories=drzewne";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(url, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Unable to Retrieve Data. Please try again.");
    }
    return response.json();
  };

  useEffect(() => {
    fetchProducts()
        .then((data) => {
          setProducts((products) => [...data]);
        })
        .catch((err) => {
          console.error(err.message);
        });
  }, []);

  if (!products.length) {
    return <div>loading</div>;
  }


  const items = products.map((prod) => (
        <li key={prod.id}>
          <h1>{prod.slug}</h1>

        </li>



  ));

  products.map((item) => {
    console.log(item);
  })

  return (
      <>
        <View/>
        <ul>{items}</ul>
      </>


  );
}

export default App;
