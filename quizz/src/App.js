import './App.css'
import React from 'react'
import View from './Components/views/view'
import { useState, useEffect } from 'react'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

// const api = new WooCommerceRestApi({
//   url: 'https://johnywick.pl',
//   consumerKey: 'ck_5717c4688a0d1fa3465d17508d77423d06d5c33d',
//   consumerSecret: 'cs_d70676840ad919ff7ff716325933364c57e50f8f',
//   version: 'wc/v3',
// })

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let fetchProducts = async () => {
      const response = await fetch('https://johnywick.pl/wp-json/wp/v2/product?categories=272')
      const json = await response.json()

      setProducts(json)
    }

    fetchProducts().catch(err => console.log(err))
  }, [])

  return (
    <>
      <View />
      {products && (
        <div>
          {products.map(product => {
            // console.log(product)
            const yoast = product.yoast_head_json
            const image = yoast.og_image[0]

            return (
              <div key={yoast.title}>
                <img src={image.url} alt='' />
                <p>{yoast.title}</p>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default App
