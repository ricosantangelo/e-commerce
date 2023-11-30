const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

// Import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Set up associations
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Category.hasMany(Product, {
  foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

// Export models and connection
module.exports = {
  sequelize,
  Category,
  Product,
  Tag,
  ProductTag
};
