'use strict';

/**
 * product router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::product.product', {
  config: {
    find: {
      auth: { enabled: false },
    },
    findOne: {
      auth: { enabled: false },
    },
    create: {
      auth: { enabled: true },
    },
    update: {
      auth: { enabled: true },
    },
    delete: {
      auth: { enabled: true },
    },
  },
  routes: [
    {
      method: 'GET',
      path: '/products/category/:category',
      handler: 'product.getProductsByCategory',
      config: {
        auth: { enabled: false }, // Adjust based on your authentication needs
      },
    },
    {
      method: 'GET',
      path: '/products/category/:category/product/:productName?',
      handler: 'product.getProductsByCategoryAndName',
      config: {
        auth: { enabled: false }, // Adjust based on your authentication needs
      },
    },
  ],
});
