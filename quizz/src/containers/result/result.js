import React, { useEffect, useState } from 'react'
import { api } from '../../assets/services/wordpressApi'
import { ResultWrapper, ProductBox, ProductImg, ProductPrice, ProductName, ProductLink } from './result.styles'

export default function Result() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    let fetchProducts = async () => {
      const products = await api.get('products?category=241', { per_page: 50 })
      console.log(products)
      setProducts(products.data)
    }

    fetchProducts().catch(err => console.log(err))
  }, [])

  return (
    <>
      {products && (
        <ResultWrapper>
          {products.map(product => {
            const yoast = product.yoast_head_json
            const image = yoast.og_image[0]

            return (
              <ProductBox key={yoast.title}>
                <ProductImg style={{ width: '150px', height: '150px' }} src={image.url} alt='' />
                <ProductName>{product.name}</ProductName>
                {product.has_options === true ? (
                  <ProductPrice>od {product.price}</ProductPrice>
                ) : (
                  <ProductPrice>{product.price}</ProductPrice>
                )}
                <ProductLink href={product.permalink}>Przejdź do produktu</ProductLink>
              </ProductBox>
            )
          })}
        </ResultWrapper>
      )}
    </>
  )
}
