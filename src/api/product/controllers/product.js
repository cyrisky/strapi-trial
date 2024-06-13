'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
  async getProductsByCategory(ctx) {
    const { category } = ctx.params;
    console.log('Category:', category); // Debugging line
    try {
      const products = await strapi.entityService.findMany('api::product.product', {
        filters: { category: { $eq: category } },
      });
      console.log('Products:', products); // Debugging line
      ctx.send(products);
    } catch (err) {
      console.error('Error:', err); // Debugging line
      ctx.throw(500, err);
    }
  },

  async getProductsByCategoryAndName(ctx) {
    const { category, productName } = ctx.params;
    console.log('Category:', category, 'ProductName:', productName); // Debugging line
    try {
      const filters = { category: { $eq: category } };
      if (productName) {
        filters.name = { $eq: productName };
      }
      const products = await strapi.entityService.findMany('api::product.product', {
        filters,
      });
      console.log('Products:', products); // Debugging line
      ctx.send(products);
    } catch (err) {
      console.error('Error:', err); // Debugging line
      ctx.throw(500, err);
    }
  },
}));
