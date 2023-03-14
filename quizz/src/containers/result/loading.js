import { LoadingDiv } from './loading.styles'
import { useContext, useEffect } from 'react'
import { StepContext } from '../../context/stepContext'
import { api } from '../../assets/services/wordpressApi'

export default function Loading() {
  const { stepIncrement, step, products, setProducts, setLoading, result } = useContext(StepContext)

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      setLoading(false)
      stepIncrement(step)
    }
  }, [products])

  useEffect(() => {
    let fetchProducts = async () => {
      const products = await api.get(`products?category=${result}`, { per_page: 50 }, {headers: {"Content-Type": "application/json"}})
      setProducts(products.data)

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append("Access-Control-Allow-Headers", "*");
    }

    fetchProducts().catch(err => console.log(err))
  }, [result])

  return <LoadingDiv></LoadingDiv>
}
