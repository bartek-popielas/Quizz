import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export const api = new WooCommerceRestApi({
  url: process.env.REACT_APP_WP_URL,
  consumerKey: process.env.REACT_APP_CONSUMER_KEY,
  consumerSecret: process.env.REACT_APP_CONSUMER_SECRET,
  version: process.env.VERSION,
})
