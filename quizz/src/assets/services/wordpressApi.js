import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export const api = new WooCommerceRestApi({
  url: 'https://johnywick.pl',
  consumerKey: 'ck_1b78d66f50587ecd285c875cf14277dece240a3c',
  consumerSecret: 'cs_07a60ee18c37540e88c528624c03e2a2d291978d',
  version: 'wc/v3',
})
