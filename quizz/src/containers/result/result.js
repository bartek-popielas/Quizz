import React, { useEffect, useState } from 'react'
import { api } from '../../assets/services/wordpressApi'
import { ResultWrapper, ProductBox, ProductImg, ProductPrice, ProductName, ProductLink } from './result.styles'
import { useContext } from 'react'
import { StepContext } from '../../context/stepContext'
import Loading from './loading'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../assets/services/firebase'

export default function Result() {
  const { result, newUser, setNewUser, stepIncrement, step, products, setProducts } = useContext(StepContext)

  // const { handleProduct, newUser } = useContext(StepContext)

  const HandleClick = e => {
    e.preventDefault()

    //loadre na button
    setNewUser(prev => ({
      ...prev,
      [e.target.name]: e.target.href,
    }))

    const addUser = async () => {
      const ref = await addDoc(collection(db, 'users_answers'), newUser)
      console.log(ref.id)

      //ID dodać w cookie
      //zmniejszyć zdjęcia
      //akutalizacja w firebase
    }

    addUser().catch(err => console.log(err))
  }

  useEffect(() => {
    console.log(newUser)
  }, [newUser])

  return (
    <>
      <ResultWrapper>
        {products.map(product => {
          const yoast = product.yoast_head_json
          const image = yoast.og_image[0]

          return (
            <ProductBox key={yoast.title}>
              <ProductImg style={{ width: '150px', height: '150px' }} src={image.url} alt='' />
              <ProductName>{product.name}</ProductName>
              {product.has_options === true ? (
                <ProductPrice>od {product.price} ZŁ</ProductPrice>
              ) : (
                <ProductPrice>{product.price} ZŁ</ProductPrice>
              )}
              <ProductLink name='product' href={product.permalink} onClick={HandleClick} target='_blank'>
                Przejdź do produktu
              </ProductLink>
            </ProductBox>
          )
        })}
      </ResultWrapper>
    </>
  )
}
