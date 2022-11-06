import React, { useEffect, useState } from 'react'
import { api } from '../../assets/services/wordpressApi'
import { ResultWrapper, ProductBox, ProductImg, ProductPrice, ProductName, ProductLink } from './result.styles'
import { useContext } from 'react'
import { StepContext } from '../../context/stepContext'
import Loading from './loading'

export default function Result() {
  const { result } = useContext(StepContext)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 10000)

  useEffect(() => {
    let fetchProducts = async () => {
      const products = await api.get(`products?category=${result}`, { per_page: 50 })
      console.log(products)
      setProducts(products.data)
    }

    fetchProducts().catch(err => console.log(err))
  }, [result])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
