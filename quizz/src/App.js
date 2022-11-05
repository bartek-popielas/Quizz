import './App.css'
import React from 'react'
import View from './Components/views/view'
import { useState, useEffect } from 'react'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const api = new WooCommerceRestApi({
  url: 'https://johnywick.pl',
  consumerKey: 'ck_1b78d66f50587ecd285c875cf14277dece240a3c',
  consumerSecret: 'cs_07a60ee18c37540e88c528624c03e2a2d291978d',
  version: 'wc/v3',
})

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let fetchProducts = async () => {
      const products = await api.get('products?category=242', { per_page: 50 })
      console.log(products)
      setProducts(products.data)
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
                <img style={{ width: '50px', height: '50px' }} src={image.url} alt='' />
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
